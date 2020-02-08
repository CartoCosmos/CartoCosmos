import { MY_JSON_MAPS } from "./layers";
/*
 * @class LayerCollection
 * @aka L.Class.LayerCollection
 * @inherits L.Class
 *
 * Holds the base layers and overlays of a particular projection
 * for quick and easy use in the AstroMap class.
 */
export default L.LayerCollection = L.Class.extend({
  // @method initialize(target: String. projName: String)
  // Constructor that creates the layers.
  initialize: function(target, projName) {
    this.target = target;
    this.projName = projName;
    this.baseLayers = {};
    this.overlays = {};
    this.defaultLayerIndex = 0;
    L.LayerCollection.layerControl = null;

    let layers = this.parseJSON();
    this.createBaseLayers(layers["base"]);
    this.createOverlays(layers["overlays"]);
  },

  // @method parseJSON(): Object of Layers
  // Parses the USGS JSON, creates layer objects for a particular
  // target and projection, and stores them in a JS object.
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

  // @method createBaseLayers(layers: Object of layers)
  // Creates WMS layers and adds them to the list of base layers.
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

  // @method createOverlays(layers: Object of layers)
  // Creates WMS layers and adds them to the list of overlays.
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
  },

  // @method addTo(map: AstroMap)
  // Removes the current layers, adds the base layers and overlays to the map,
  // and sets teh default layer.
  addTo: function(map) {
    // Remove old layers
    map.eachLayer(function(layer) {
      map.removeLayer(layer);
    });

    if (L.LayerCollection.layerControl) {
      L.LayerCollection.layerControl.remove();
    }

    let defaultLayer = Object.keys(this.baseLayers)[this.defaultLayerIndex];
    this.baseLayers[defaultLayer].addTo(map);

    L.LayerCollection.layerControl = L.control.layers(
      this.baseLayers,
      this.overlays
    );
    L.LayerCollection.layerControl.addTo(map);
  }
});

// exports.L.layerCollection = function(target, projName) {
//   return new L.LayerCollection(target, projName);
// };
