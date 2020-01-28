L.LayerCollection = L.Class.extend({
  initialize: function(target, projName) {
    this.target = target;
    this.projName = projName;
    this.baseLayers = {};
    this.overlays = {};
    this.defaultLayerIndex = 0;
    L.LayerCollection.layerControl = null;

    var layers = this.parseJSON();
    this.createBaseLayers(layers["base"]);
    this.createOverlays(layers["overlays"]);
  },

  parseJSON: function() {
    var layers = {
      base: [],
      overlays: [],
      wfs: []
    };

    var targets = myJSONmaps["targets"];
    for (var i = 0; i < targets.length; i++) {
      var currentTarget = targets[i];

      if (currentTarget["name"].toLowerCase() == this.target.toLowerCase()) {
        var jsonLayers = currentTarget["webmap"];
        for (var j = 0; j < jsonLayers.length; j++) {
          var currentLayer = jsonLayers[j];
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

  createBaseLayers: function(layers) {
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      if (layer["projection"] == this.projName) {
        var baseLayer = L.tileLayer.wms(
          String(layer["url"]) + "?map=" + String(layer["map"]),
          {
            layers: String(layer["layer"])
          }
        );
        var name = String(layer["displayname"]);
        this.baseLayers[name] = baseLayer;
      }
    }
  },

  createOverlays: function(layers) {
    for (var i = 0; i < layers.length; i++) {
      var layer = layers[i];
      var overlay = L.tileLayer.wms(
        String(layer["url"]) + "?map=" + String(layer["map"]),
        {
          layers: String(layer["layer"]),
          transparent: true,
          format: "image/png"
        }
      );
      var name = String(layer["displayname"]);
      this.overlays[name] = overlay;
    }
  },

  addTo: function(map) {
    // Remove old layers
    map.eachLayer(function(layer) {
      map.removeLayer(layer);
    });

    if (L.LayerCollection.layerControl) {
      L.LayerCollection.layerControl.remove();
    }

    var defaultLayer = Object.keys(this.baseLayers)[this.defaultLayerIndex];
    this.baseLayers[defaultLayer].addTo(map);

    L.LayerCollection.layerControl = L.control.layers(
      this.baseLayers,
      this.overlays
    );
    L.LayerCollection.layerControl.addTo(map);
  }
});
