L.Map.AstroMap = L.Map.extend({
  initialize: function(mapDiv, target) {
    this.mapDiv = mapDiv;
    this.target = target;
    this.layerControl = null;
    this.layers = {
      geodesic: new L.LayerCollection(this.target, "cylindrical"),
      northPolar: new L.LayerCollection(
        this.target,
        "north-polar stereographic"
      ),
      southPolar: new L.LayerCollection(
        this.target,
        "south-polar stereographic"
      )
    };
    L.Map.prototype.initialize.call(this, this.mapDiv, {
      center: [0, 0],
      zoom: 1,
      maxZoom: 8,
      crs: L.CRS.EPSG4326,
      attributionControl: false
    });
    this.loadLayerCollection("geodesic");
  },

  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  }
});

