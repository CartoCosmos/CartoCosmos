import AstroProj from "./AstroProj";
import LayerCollection from "./LayerCollection";
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
   * @param {String} mapDiv ID of the div for the map.
   * @param {String} target Name of target to display layers for.
   * @param {Object} options Options for the map.
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

    this.defaultProj = L.extend({}, L.CRS.EPSG4326, { R: this.radii["a"] });
    this.options["crs"] = this.defaultProj;

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this.mapDiv, this.options);
    this.loadLayerCollection("cylindrical");
  },

  /**
   * @details Adds the LayerCollection with the requrested projection name.
   *
   * @param {String} name Name of the projection.
   */
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  /**
   * @details Changes the projection of the map and resets the center and view.
   * 
   * @param {String} name Name of Projection.
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
  }
});
