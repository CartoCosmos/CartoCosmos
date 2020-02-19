import AstroProj from "./AstroProj";
import LayerCollection from "./LayerCollection";
import $ from "jquery";
/*
 * @class AstroMap
 * @aka L.Map.AstroMap
 * @inherits L.Map
 *
 * The central class that creates an interactive map in the HTML.
 * Works with all target bodies supported by the USGS by loading the body's
 * base layers and overlays in a LayerCollection. Allows users to change
 * the projection of the map.
 *
 * @example
 *
 * ```js
 * // initialize the map on the "map" div with the target Mars
 * L.Map.AstroMap("map", "Mars", {});
 * ```
 */
export default L.Map.AstroMap = L.Map.extend({
  options: {
    center: [0, 0],
    zoom: 1,
    maxZoom: 8,
    attributionControl: false
  },

  /**
   * @details Initializes the map by loading the LayerCollection for
   * each supported projection and setting default options.
   *
   * @param {String} mapDiv - ID of the div for the map.
   * @param {String} target - Name of target to display layers for.
   * @param {Object} options - Options for the map.
   */
  initialize: function(mapDiv, target, options) {
    this.mapDiv = mapDiv;
    this.target = target;
    this.astroProj = new AstroProj();
    this.radii = this.astroProj.getRadii(this.target);
    this.layers = {
      cylindrical: new LayerCollection(this.target, "cylindrical"),
      northPolar: new LayerCollection(this.target, "north-polar stereographic"),
      southPolar: new LayerCollection(this.target, "south-polar stereographic")
    };

    if (this.layers["northPolar"].isEmpty()) {
      this._hasNorthPolar = false;
    } else {
      this._hasNorthPolar = true;
    }
    if (this.layers["southPolar"].isEmpty()) {
      this._hasSouthPolar = false;
    } else {
      this._hasSouthPolar = true;
    }

    this.defaultProj = L.extend({}, L.CRS.EPSG4326, { R: this.radii["a"] });
    this.options["crs"] = this.defaultProj;

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this.mapDiv, this.options);
    this.loadLayerCollection("cylindrical");

    this.featureLayer = new L.GeoJSON(null, {
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name);
        }
      }
    }).addTo(this);
    this.load_wfs();
    this.on("moveend", this.load_wfs);
  },

  /**
   * @details Adds the LayerCollection with the requrested projection name.
   *
   * @param {String} name - Name of the projection.
   */
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  /**
   * @details Changes the projection of the map and resets the center and view.
   * 
   * @param {String} name - Name of Projection.
   * @param {List} center - Center of map based off of projection.
]   */
  changeProjection: function(name, center) {
    let newCRS = null;
    if (name == "cylindrical") {
      newCRS = this.defaultProj;
    } else {
      let proj = this.astroProj.getStringAndCode(this.target, name);
      newCRS = new L.Proj.CRS(proj["code"], proj["string"], {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
        origin: [0, 0]
      });
    }

    this.options.crs = newCRS;
    this.setView(center, 1, true);
    this.loadLayerCollection(name);
  },

  hasNorthPolar: function() {
    return this._hasNorthPolar;
  },

  hasSouthPolar: function() {
    return this._hasSouthPolar;
  },

  load_wfs: function() {
    var geoJsonUrl =
      "https://astrocloud.wr.usgs.gov/dataset/data/nomenclature/" +
      this.target.toUpperCase() +
      "/WFS";
    var defaultParameters = {
      service: "WFS",
      version: "1.1.0",
      request: "GetFeature",
      outputFormat: "application/json",
      srsName: "EPSG:4326"
    };

    var customParams = {
      bbox: this.getBounds().toBBoxString()
    };
    var parameters = L.Util.extend(defaultParameters, customParams);
    console.log(geoJsonUrl + L.Util.getParamString(parameters));

    var that = this;
    $.ajax({
      url: geoJsonUrl + L.Util.getParamString(parameters),
      dataType: "json",
      timeout: 30000,
      success: function(data) {
        // this.featureLayer.clearLayers();
        that.featureLayer.addData(data);
      }
    });
  }
});
