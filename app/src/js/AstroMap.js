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

  /**
   * @details Initializes the map by loading the LayerCollection for
   *          each supported projection and setting default options.
   *
   * @param {String} mapDiv - ID of the div for the map.
   *
   * @param {String} target - Name of target to display layers for.
   *
   * @param {Object} options - Options for the map.
   */
  initialize: function(mapDiv, target, options) {
    this._mapDiv = mapDiv;
    this._target = target;
    this._astroProj = new AstroProj();
    this._radii = this._astroProj.getRadii(this._target);
    // Could not work with _
    this.layers = {
      northPolar: new LayerCollection(
        this._target,
        "north-polar stereographic"
      ),
      southPolar: new LayerCollection(
        this._target,
        "south-polar stereographic"
      ),
      cylindrical: new LayerCollection(this._target, "cylindrical")
    };

    this._hasNorthPolar = !this.layers["northPolar"].isEmpty();
    this._hasSouthPolar = !this.layers["southPolar"].isEmpty();

    this._defaultProj = L.extend({}, L.CRS.EPSG4326, { R: this._radii["a"] });
    this.options["crs"] = this._defaultProj;

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this._mapDiv, this.options);
    this.loadLayerCollection("cylindrical");
  },

  /**
   * @details Adds the LayerCollection with the requrested projection name.
   *
   * @param {String} name - Name of the projection.
   */
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  /**
   * @details Changes the projection of the map and resets the center and view.
   *
   * @param {String} name - Name of Projection.
   *
   * @param {List} center - Center of map based off of projection.
]   */
  changeProjection: function(name, center) {
    let newCRS = null;
    if (name == "cylindrical") {
      newCRS = this._defaultProj;
    } else {
      let proj = this._astroProj.getStringAndCode(this._target, name);
      newCRS = new L.Proj.CRS(proj["code"], proj["string"], {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128],
        origin: [0, 0]
      });
    }

    this.options.crs = newCRS;
    this.setView(center, 1, true);
    this.loadLayerCollection(name);
  },

  /**
   * @details Checks if the map has a layer collection for northPolar.
   *
   * @return {Boolean} Returns true if there is a northPolar collection.
   */
  hasNorthPolar: function() {
    return this._hasNorthPolar;
  },

  /**
   * @details Checks if the map has a layer collection for southPolar.
   *
   * @return {Boolean} Returns true if there is a southPolar collection.
   */
  hasSouthPolar: function() {
    return this._hasSouthPolar;
  },

  /**
   * @details Returns the name of the target.
   * @return {String} Name of target.
   */
  target: function() {
    return this._target;
  }
});
