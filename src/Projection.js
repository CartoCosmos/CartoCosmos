L.Control.Projection = L.Control.extend({
  options: {
    position: "bottomleft"
  },

  onAdd: function(map) {
    var container = L.DomUtil.create("div");

    this.northPolar = L.DomUtil.get("projectionNorthPole");
    L.DomEvent.on(this.northPolar, "click", this.loadNorthPolar, this);
    this.geodesic = L.DomUtil.get("projectionCylindrical");
    L.DomEvent.on(this.geodesic, "click", this.loadGeodesic, this);
    this.southPolar = L.DomUtil.get("projectionSouthPole");
    L.DomEvent.on(this.southPolar, "click", this.loadSouthPolar, this);

    return container;
  },

  loadNorthPolar: function(e) {
    var center = [90, 0];
    this._map.changeProjection("northPolar", center);
  },

  loadSouthPolar: function(e) {
    var southStere = new L.Proj.CRS(
      "EPSG:32761",
      "+proj=stere +lat_0=-90 +lon_0=0" +
        "+k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs",
      {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
        origin: [0, 0]
      }
    );
    var center = [-90, 0];
    this._map.options.crs = southStere;
    this._map._resetView(center, 1, true); //we need this to redraw all layers (polygons, markers...) in the new projection.
    this._map.loadLayerCollection("southPolar");
  },

  loadGeodesic: function(e) {
    var center = [0, 0];
    this._map.options.crs = L.CRS.EPSG4326;
    this._map._resetView(center, 1, true); //we need this to redraw all layers (polygons, markers...) in the new projection.
    this._map.loadLayerCollection("geodesic");
  },

  onRemove: function(map) {
    // Nothing to do here
  }
});
