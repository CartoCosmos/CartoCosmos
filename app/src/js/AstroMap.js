import L from "leaflet";
import "proj4leaflet";

import AstroProj from "./AstroProj";
import LayerCollection from "./LayerCollection";
import { getItemCollection, url } from "./ApiJsonCollection";
import { MY_JSON_MAPS } from "./layers";
import "leaflet-html-legend";

/**
 * @class AstroMap
 * @aka L.Map.AstroMap
 * @extends L.Map
 *
 * @classdesc
 * The central class that creates an interactive map in the HTML.
 * Works with all target bodies supported by the USGS by loading the body's
 * base layers and overlays in a LayerCollection. Allows users to change
 * the projection of the map.
 *
 * @example
 * // initialize the map on the "map" div with the target Mars
 * L.Map.AstroMap("map", "Mars", {});
 *
 * @param {String} mapDiv - ID of the div for the map.
 *
 * @param {String} target - Name of target to display layers for.
 *
 * @param {Object} options - Options for the map.
 */
export default L.Map.AstroMap = L.Map.extend({
  options: {
    center: [0, 0],
    zoom: 1,
    maxZoom: 8,
    attributionControl: false,
    zoomControl: false
  },

  initialize: function(mapDiv, target, options) {
    this._mapDiv = mapDiv;
    this._target = target;
    this._astroProj = new AstroProj();
    this._radii = {
      a: "",
      c: ""
    };
    this._footprintCollection = {};
    this._footprintControl = null;
    this._geoLayer = null;

    // Set by layer collection or baselayerchange event
    this._currentLayer = null;

    // Store layers at map creation so we only need to create layers once.
    let cylLayerInfo = this.parseJSON("cylindrical");
    if (Object.entries(cylLayerInfo["base"]).length == 0) {
      throw "No entry in the JSON for [" +
        this._target +
        "]. Cannot instantiate a map.";
    }

    // Could not work with _
    this.layers = {
      cylindrical: new LayerCollection("cylindrical", cylLayerInfo)
    };

    let northLayerInfo = this.parseJSON("north-polar stereographic");
    if (Object.entries(northLayerInfo["base"]).length == 0) {
      this._hasNorthPolar = false;
    } else {
      this._hasNorthPolar = true;
      this.layers["northPolar"] = new LayerCollection(
        "north-polar stereographic",
        northLayerInfo
      );
    }

    let southLayerInfo = this.parseJSON("south-polar stereographic");
    if (Object.entries(southLayerInfo["base"]).length == 0) {
      this._hasSouthPolar = false;
    } else {
      this._hasSouthPolar = true;
      this.layers["southPolar"] = new LayerCollection(
        "south-polar stereographic",
        southLayerInfo
      );
    }

    this._defaultProj = L.extend({}, L.CRS.EPSG4326, { R: this._radii["a"] });
    this.options["crs"] = this._defaultProj;
    this._currentProj = "EPSG:4326";

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this._mapDiv, this.options);
    this.loadLayerCollection("cylindrical");

    this.loadFootprintLayer(target, 1);

    // Listen to baselayerchange event so that we can set the current layer being
    // viewed by the map.
    this.on("baselayerchange", function(e) {
      this.setCurrentLayer(e["layer"]);
    });
  },

  /**
   * @function AstroMap.prototype.loadLayerCollection
   * @description Adds the LayerCollection with the requested name.
   *
   * @param {String} name - Name of the projection.
   */
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  /**
   * @function AstroMap.prototype.loadFootprintLayer
   * @description Adds the ApiJsonCollection with the requested name.
   *
   * @param {String} name - Name of the STAC Catalog. example "ctx_dtms"
   */
  loadFootprintLayer: function(name, page) {
    getItemCollection(name, page).then(result => {
      if (result != undefined) {
        this._geoLayer = L.geoJSON().addTo(this);
        this._footprintCollection["Footprints"] = this._geoLayer;
        for (let i = 0; i < result.length; i++) {
          for (let j = 0; j < result[i].features.length; j++) {
            this._geoLayer.addData(result[i].features[j]);
          }
        }
        this._footprintControl = L.control.layers(null, this._footprintCollection).addTo(this);
        this.addFootprintLegend(name, page);
      }
    });
  },


  /**
   * @function AstroMap.prototype.addFootprintLegend
   * @description Adds legend for each footprint layer
   *
   * @param {Object} footprintCollection - dictonary of footprint layers
   */
  addFootprintLegend: function(name, page) {
    var self = this;

    var legend = L.control.htmllegend({
      legends: [{
          name: 'Footprints',
          layer: this._geoLayer,
          elements: [{
              html: `<div class="pagination">
                      <a id=footprint_left>&laquo;</a>
                      <a id=footprint_pageNumber>${page}</a>
                      <a id=footprint_right>&raquo;</a>
                    </div>`
          }]
        }]
     });
    this.addControl(legend);

    $('#footprint_right').click(function () {
      page = page + 1;
      self._footprintControl.remove();
      self._geoLayer.clearLayers();
      self.removeControl(legend);
      self.loadFootprintLayer(name, page);
    });
    $('#footprint_left').click(function () {
      page = page - 1;
      if (page > 0) {
        self._footprintControl.remove();
        self._geoLayer.clearLayers();
        self.removeControl(legend);
        self.loadFootprintLayer(name, page);
      }
    });
  },

  /**
   * @function AstroMap.prototype.parseJSON
   * @description Parses the USGS JSON, creates layer objects for a particular target and projection,
   *              and stores them in a JS object.
   * @param {String} [projection - Name of the projection to grab the layer information for.
   * @return {Object} - Dictionary containing the layer information in the format: {base: [], overlays: []}
   */
  parseJSON: function(projection) {
    let layers = {
      base: [],
      overlays: [],
      wfs: []
    };

    let targets = MY_JSON_MAPS["targets"];
    for (let i = 0; i < targets.length; i++) {
      let currentTarget = targets[i];

      if (currentTarget["name"].toLowerCase() == this._target.toLowerCase()) {
        this._radii["a"] = parseFloat(currentTarget["aaxisradius"] * 1000);
        this._radii["c"] = parseFloat(currentTarget["caxisradius"] * 1000);
        let jsonLayers = currentTarget["webmap"];
        for (let j = 0; j < jsonLayers.length; j++) {
          let currentLayer = jsonLayers[j];
          if (
            currentLayer["projection"].toLowerCase() != projection.toLowerCase()
          ) {
            continue;
          }
          if (currentLayer["type"] == "WMS") {
            // Base layer check
            if (currentLayer["transparent"] == "false") {
              layers["base"].push(currentLayer);
            } else {
              // Do not add "Show Feature Names" PNG layer.
              if (currentLayer["displayname"] != "Show Feature Names") {
                layers["overlays"].push(currentLayer);
              }
            }
          } else {
            layers["wfs"].push(currentLayer);
          }
        }
      }
    }
    return layers;
  },

  /**
   * @function AstroMap.prototype.changeProjection
   * @description Changes the projection of the map and resets the center and view.
   *
   * @param {String} name - Name of Projection.
   *
   * @param {List} center - Center of map based off of projection.
   */
  changeProjection: function(name, center) {
    if (this._currentProj == "EPSG:4326") {
      // Reset the view before changing the projection since
      // an exception may be thrown when swapping to a polar
      // projection from cylindrcal and the zoom level is 7+.
      // proj has trouble unprojecting points in cylindrical
      // at such a high zoom level.
      this.setView(center, 1, true);
    }
    this.options.center = center;
    let newCRS = null;
    if (name == "cylindrical") {
      newCRS = this._defaultProj;
      this._currentProj = "EPSG:4326";
      this.setMaxZoom(8);
    } else {
      let proj = this._astroProj.getStringAndCode(name, this._radii);
      newCRS = new L.Proj.CRS(proj["code"], proj["string"], {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128]
      });
      this._currentProj = proj["code"];
      this.setMaxZoom(6);
    }
    this.options.crs = newCRS;

    // Reset the view again because the map refreshses after changing
    // the projection and you start to zoom in/out. This makes the map do a
    // weird flashing transition.
    this.setView(center, 1, true);
    this.loadLayerCollection(name);

    // this.fire("projChange", { proj: this._currentProj });
  },

  /**
   * @function AstroMap.prototype.hasNorthPolar
   * @description Checks if the map has a layer collection for northPolar.
   *
   * @return {Boolean} Returns true if there is a northPolar collection.
   */
  hasNorthPolar: function() {
    return this._hasNorthPolar;
  },

  /**
   * @function AstroMap.prototype.hasSouthPolar
   * @description Checks if the map has a layer collection for southPolar.
   *
   * @return {Boolean} Returns true if there is a southPolar collection.
   */
  hasSouthPolar: function() {
    return this._hasSouthPolar;
  },

  /**
   * @function AstroMap.prototype.target
   * @description Returns the name of the target.
   *
   * @return {String} Name of target.
   */
  target: function() {
    return this._target;
  },

  /**
   * @function AstroMap.prototype.projection
   * @description Returns the name of the current projection of the map.
   *
   * @return {String} Proj-code of the projection.
   */
  projection: function() {
    return this._currentProj;
  },

  /**
   * @function AstroMap.prototype.setCurrentLayer
   * @description Sets the value of the current layer of the map.
   *          Set by the LayerCollection in the onAdd method.
   */
  setCurrentLayer: function(layer) {
    this._currentLayer = layer;
  },

  /**
   * @function AstroMap.prototype.currentLayer
   * @description Returns the current layer of the map. Used by the LayerCollection
   *          so that it can remove the layer of the map without having to
   *          remove all layers, including drawn shapes.
   *
   * @return {L.Layer} Current layer of the map.
   */
  currentLayer: function() {
    return this._currentLayer;
  },

  /**
   * @function AstroMap.prototype.radii
   * @description Returns the a and c radii of the target.
   *
   * @return {Dictionary} Radii of target in form {'a': . 'c': }.
   */
  radii: function() {
    return this._radii;
  },

  /**
   * @function AstroMap.prototype.center
   * @description getter method to access the center of the map.
   *
   * @return {LatLng} The center coordinates of the map.
   */
  center: function() {
    return this.options.center;
  }
});
