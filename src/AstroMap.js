L.Map.AstroMap = L.Map.extend({
  options: {
    center: [0, 0],
    zoom: 1,
    maxZoom: 8,
    crs: L.CRS.EPSG4326,
    attributionControl: false
  },

  initialize: function(mapDiv, target, options) {
    this.mapDiv = mapDiv;
    this.target = target;
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

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this.mapDiv, this.options);
    this.loadLayerCollection("geodesic");
  },

  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  changeProjection: function(projName, center) {
    var northStere = new L.Proj.CRS(
      "EPSG:32661",
      "+proj=stere +lat_0=90 +lon_0=0" +
        "+k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs",
      {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
        origin: [0, 0]
      }
    );
    this.options.crs = northStere;
    this._resetView(center, 1, true);
    this.loadLayerCollection(projName);
  }
});
