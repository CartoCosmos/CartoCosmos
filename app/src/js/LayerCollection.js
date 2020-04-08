import $ from "jquery";
import L from "leaflet";

/**
 * @class LayerCollection
 * @aka L.Class.LayerCollection
 * @inherits L.Class
 *
 * @classdesc
 * Holds the base layers and overlays of a particular projection
 * for quick and easy use in the AstroMap class.
 */
export default L.LayerCollection = L.Class.extend({
  /**
   * @function LayerCollection.prototype.initialize
   * @description Constructor that creates the layers.
   * @param {String} target Name of the target.
   * @param {String} projName Name of the projection.
   */
  initialize: function(projName, layerInfo) {
    this._projName = projName;
    this._baseLayers = {};
    this._overlays = {};
    this._defaultLayerIndex = 0;
    this._wfsLayer = null;
    L.LayerCollection.layerControl = null;

    this.createBaseLayers(layerInfo["base"]);
    if (this.isEmpty()) {
      throw "No base layers created. At least one base layer is needed.";
    }
    this.createOverlays(layerInfo["overlays"]);
  },

  /**
   * @function LayerCollection.prototype.createBaseLayers
   * @description Creates WMS layers and adds them to the list of base layers.
   * @param  {List} layers - List of base layer information.
   */
  createBaseLayers: function(layers) {
    for (let i = 0; i < layers.length; i++) {
      let layer = layers[i];
      if (layer["primary"] == "true") {
        this._defaultLayerIndex = layers.length - 1;
      }
      let baseLayer = L.tileLayer.wms(
        String(layer["url"]) + "?map=" + String(layer["map"]),
        {
          layers: String(layer["layer"])
        }
      );
      let name = String(layer["displayname"]);
      this._baseLayers[name] = baseLayer;
    }
  },

  /**
   * @function LayerCollection.prototype.createOverlays
   * @description Creates WMS layers and adds them to the list of overlays.
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
      this._overlays[name] = overlay;
    }
    // Adds WFS feature names to map.
    // Commented out for now.
    // if (this._projName == "cylindrical") {
    //   this._wfsLayer = new L.GeoJSON(null, {

    //       /**
    //       * @function LayerCollection.prototype.onEachFeature
    //       * @description Binds the feature name so that when the feature is clicked,
    //                      a pop-up with the name is displayed.
    //       * @param  {String} layer - Vector layer to add name to.
    //       * @param  {JSON} feature - JSON representing feature clicked on.
    //       */
    //     onEachFeature: function(feature, layer) {
    //       if (feature.properties && feature.properties.name) {
    //         layer.bindPopup(feature.properties.name);
    //       }
    //     },
    //       /**
    //       * @function LayerCollection.prototype.pointToLayer
    //       * @description Add styling so that feature points get created as
    //                      circles instead of markers.
    //       * @param  {Constructor} latlng - Latitude and longitude where mouse was clicked.
    //       * @param  {JSON} feature - JSON representing feature clicked on.
    //       */
    //     pointToLayer: function(feature, latlng) {
    //       return new L.CircleMarker(latlng, { radius: 3, fillOpacity: 1 });
    //     }
    //   });
    //   this._overlays["Show Feature Names"] = this._wfsLayer;
    // }
  },

  /**
   * @function LayerCollection.prototype.addTo
   * @description Removes the current layers, adds the base layers and overlays to the map, and sets the default layer.
   * @param {AstroMap} map - Map to add layers to.
   */
  addTo: function(map) {
    if (map.currentLayer() != null) {
      map.removeLayer(map.currentLayer());
    }

    if (L.LayerCollection.layerControl) {
      L.LayerCollection.layerControl.remove();
    }

    if (!this.isEmpty()) {
      let defaultLayer = Object.keys(this._baseLayers)[this._defaultLayerIndex];
      this._baseLayers[defaultLayer].addTo(map);
      map.setCurrentLayer(this._baseLayers[defaultLayer]);

      L.LayerCollection.layerControl = L.control.layers(
        this._baseLayers,
        this._overlays
      );
      L.LayerCollection.layerControl.addTo(map);
    }

    // if (this._projName == "cylindrical") {
    //   this.loadWFS(map);
    // }
  },

  /**
   * @function LayerCollection.prototype.isEmpty
   * @description Checks to see if there are any base layers.
   * @return {Boolean} Returns true if there are no base layers, false otherwise.
   */
  isEmpty: function() {
    return Object.entries(this._baseLayers).length == 0;
  },

  /**
   * @function LayerCollection.prototype.baseLayers
   * @description Returns the list of base layers.
   * @return {List} List of WMS base layers.
   */
  baseLayers: function() {
    return this._baseLayers;
  },

  /**
   * @function LayerCollection.prototype.overlays
   * @description Returns the list of base layers.
   * @return {List} List of WMS base layers.
   */
  overlays: function() {
    return this._overlays;
  },

  /**
   * @function LayerCollection.prototype.loadWFS
   * @description  Creates the GeoServer query, queries GeoServer for the feature names, and adds the data to the GeoJSON layer.
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

    let parameters = L.Util.extend(defaultParameters);
    // console.log(geoJsonUrl + L.Util.getParamString(parameters));

    let thisContext = this;
    $.ajax({
      url: geoJsonUrl + L.Util.getParamString(parameters),
      dataType: "json",
      timeout: 30000,
      success: function(data) {
        let sortedFeatures = thisContext.sortFeatures(data["features"]);
        data["features"] = sortedFeatures;
        thisContext._wfsLayer.clearLayers();
        thisContext._wfsLayer.addData(data);
      }
    });
  },

  /**
   * @function LayerCollection.prototype.loadWFS
   * @description  Sorts the features by diameter so that smaller features are on top of the larger features on the map. Features with smaller diameters will be put at the end of the list.
   * @param  {List} data - List of features.
   * @return {Integer} Returns -1 if f1 < f2, 1 if f2 > f1, and 0 if f1==f2.
   */
  sortFeatures: function(data) {
    return data.sort(function(a, b) {
      let f1 = parseFloat(a["properties"]["diameter"]);
      let f2 = parseFloat(b["properties"]["diameter"]);
      if (f1 < f2) {
        return 1;
      } else if (f1 > f2) {
        return -1;
      } else {
        return 0;
      }
    });
  }
});
