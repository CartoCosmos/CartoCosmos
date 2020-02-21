import AstroProj from "./AstroProj";
import LayerCollection from "./LayerCollection";
import "leaflet-fullscreen";
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
    crs: L.CRS.EPSG4326,
    attributionControl: false,
    fullscreenControl: true
  },

  // @method initialize(mapDiv: String, target: String, options?: Zoom/pan options)
  // Initializes the map by loading the LayerCollection for each supported projection
  // and setting the default options.
  initialize: function(mapDiv, target, options) {
    this.mapDiv = mapDiv;
    this.target = target;
    this.AstroProj = new AstroProj();
    this.layers = {
      geodesic: new LayerCollection(this.target, "cylindrical"),
      northPolar: new LayerCollection(this.target, "north-polar stereographic"),
      southPolar: new LayerCollection(this.target, "south-polar stereographic")
    };

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this.mapDiv, this.options);
    this.loadLayerCollection("geodesic");
  },

  // @method loadLayerCollection(name: String)
  // Adds the LayerCollection with the requrested projection name.
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  // @method changeProjection(name: String, center: List)
  // Changes the projection of the map and resets the center and view.
  changeProjection: function(name, center) {
    let newCRS = null;
    if (name == "geodesic") {
      newCRS = L.CRS.EPSG4326;
    } else {
      let proj = this.AstroProj.getStringAndCode(this.target, name);
      newCRS = new L.Proj.CRS(proj["code"], proj["string"], {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
        origin: [0, 0]
      });
    }
    this.options.crs = newCRS;
    this._resetView(center, 1, true);
    this.loadLayerCollection(name);
  }
});

// exports.L.map.astroMap = function(mapDiv, target, options) {
//   return new L.map.astroMap(mapDiv, target, options);
// };
