import { MY_JSON_MAPS } from "./layers";
import $ from "jquery";

/*
 * @class LayerCollection
 * @aka L.Class.LayerCollection
 * @inherits L.Class
 *
 * Holds the base layers and overlays of a particular projection
 * for quick and easy use in the AstroMap class.
 */
export default L.LayerCollection = L.Class.extend({
  /**
   * @details Constructor that creates the layers.
   *
   * @param {String} target Name of the target.
   *
   * @param {String} projName Name of the projection.
   */
  initialize: function(target, projName) {
    this.target = target;
    this.projName = projName;
    this.baseLayers = {};
    this.overlays = {};
    this.defaultLayerIndex = 0;
    this.wfsLayer = null;
    L.LayerCollection.layerControl = null;

    let layers = this.parseJSON();
    this.createBaseLayers(layers["base"]);
    this.createOverlays(layers["overlays"]);
  },

  /**
   * @details Parses the USGS JSON, creates layer objects for a particular
   *          target and projection, and stores them in a JS object.
   *
   * @return {Object} - Dictionary containing the layer information in
   *                    the format: {base: [], overlays: []}
   */
  parseJSON: function() {
    let layers = {
      base: [],
      overlays: [],
      wfs: []
    };

    let targets = MY_JSON_MAPS["targets"];
    for (let i = 0; i < targets.length; i++) {
      let currentTarget = targets[i];

      if (currentTarget["name"].toLowerCase() == this.target.toLowerCase()) {
        let jsonLayers = currentTarget["webmap"];
        for (let j = 0; j < jsonLayers.length; j++) {
          let currentLayer = jsonLayers[j];
          if (
            currentLayer["projection"].toLowerCase() !=
            this.projName.toLowerCase()
          ) {
            continue;
          }
          if (currentLayer["type"] == "WMS") {
            // Base layer check
            if (currentLayer["transparent"] == "false") {
              layers["base"].push(currentLayer);
              if (currentLayer["primary"] == "true") {
                this.defaultLayerIndex = layers["base"].length - 1;
              }
            } else {
              layers["overlays"].push(currentLayer);
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
   * @details Creates WMS layers and adds them to the list of base layers.
   *
   * @param  {List} layers - List of base layer information.
   */
  createBaseLayers: function(layers) {
    for (let i = 0; i < layers.length; i++) {
      let layer = layers[i];
      if (layer["projection"] == this.projName) {
        let baseLayer = L.tileLayer.wms(
          String(layer["url"]) + "?map=" + String(layer["map"]),
          {
            layers: String(layer["layer"])
          }
        );
        let name = String(layer["displayname"]);
        this.baseLayers[name] = baseLayer;
      }
    }
  },

  /**
   * @details Creates WMS layers and adds them to the list of overlays.
   *
   * @param  {List} layers - List of overlay information.
   */
  createOverlays: function(layers) {
    for (let i = 0; i < layers.length; i++) {
      let layer = layers[i];
      let overlay = L.tileLayer.wms(
        String(layer["url"]) + "?map=" + String(layer["map"]),
        {
          layers: String(layer["layer"]),
          transparent: true,
          format: "image/png"
        }
      );
      let name = String(layer["displayname"]);
      this.overlays[name] = overlay;
    }

    this.wfsLayer = new L.GeoJSON(null, {
      onEachFeature: function(feature, layer) {
        if (feature.properties && feature.properties.name) {
          layer.bindPopup(feature.properties.name);
        }
      }
    });
    this.overlays["Show Feature Names WFS"] = this.wfsLayer;
  },

  /**
   * @details Removes the current layers, adds the base layers and overlays to the map,
   *          and sets teh default layer.
   *
   * @param {AstroMap} map - Map to add layers to.
   */
  addTo: function(map) {
    // Remove old layers
    map.eachLayer(function(layer) {
      map.removeLayer(layer);
    });

    if (L.LayerCollection.layerControl) {
      L.LayerCollection.layerControl.remove();
    }

    if (!this.isEmpty()) {
      let defaultLayer = Object.keys(this.baseLayers)[this.defaultLayerIndex];
      this.baseLayers[defaultLayer].addTo(map);

      L.LayerCollection.layerControl = L.control.layers(
        this.baseLayers,
        this.overlays
      );
      L.LayerCollection.layerControl.addTo(map);
    }

    this.loadWFS(map);
    // Commented out for now because WFS queries are super slow.
    // map.on("moveend", this.loadWFS);
  },

  /**
   * @details Checks to see if there are any base layers.
   * @return {Boolean} Returns true if there are no base layers,
   *                   false otherwise.
   */
  isEmpty: function() {
    return Object.entries(this.baseLayers).length == 0;
  },

  /**
   * @details Creates the GeoServer query, queries GeoServer for
   *          the feature names, and adds the data to the GeoJSON layer.
   *
   * @param  {AstroMap} map - The AstroMap to add the GeoJSON layer to.
   */
  loadWFS: function(map) {
    let geoJsonUrl =
      "https://astrocloud.wr.usgs.gov/dataset/data/nomenclature/" +
      map.target().toUpperCase() +
      "/WFS";

    let defaultParameters = {
      service: "WFS",
      version: "1.1.0",
      request: "GetFeature",
      outputFormat: "application/json",
      srsName: "EPSG:4326"
    };

    let customParams = {
      bbox: map.getBounds().toBBoxString()
    };

    let parameters = L.Util.extend(defaultParameters, customParams);
    console.log(geoJsonUrl + L.Util.getParamString(parameters));

    let thisContext = this;
    $.ajax({
      url: geoJsonUrl + L.Util.getParamString(parameters),
      dataType: "json",
      timeout: 30000,
      success: function(data) {
        // this.featureLayer.clearLayers();
        thisContext.wfsLayer.addData(data);
      }
    });
  }
});
