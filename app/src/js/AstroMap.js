import AstroProj from "./AstroProj";
import LayerCollection from "./LayerCollection";
import "leaflet-fullscreen";
/**
 * @class AstroMap
 * @aka L.Map.AstroMap
 * @extends L.Map
 *
 * @classdesc
 * The central class that creates an interactive map in the HTML.
 * Works with all target bodies supported by the USGS by loading the body's
 * base layers and overlays in a LayerCollection. Allows users to change
 * the projection of the map.
 *
 * @example
 * // initialize the map on the "map" div with the target Mars
 * L.Map.AstroMap("map", "Mars", {});
 *
 * @param {String} mapDiv - ID of the div for the map.
 *
 * @param {String} target - Name of target to display layers for.
 *
 * @param {Object} options - Options for the map.
 */
export default L.Map.AstroMap = L.Map.extend({
  options: {
    center: [0, 0],
    zoom: 1,
    maxZoom: 8,
    attributionControl: false,
    fullscreenControl: true
  },

  initialize: function(mapDiv, target, options) {
    this._mapDiv = mapDiv;
    this._target = target;
    this._astroProj = new AstroProj();
    this._radii = this._astroProj.getRadii(this._target);

    this._currentLayer = null;

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
    this._currentProj = "EPSG:4326";

    L.setOptions(this, options);
    L.Map.prototype.initialize.call(this, this._mapDiv, this.options);
    this.loadLayerCollection("cylindrical");

    // Listen to baselayerchange event so that we can set the current layer being
    // viewed by the map.
    this.on("baselayerchange", function(e) {
      this.setCurrentLayer(e["layer"]);
    });
  },

  /**
   * @function AstroMap.prototype.loadLayerCollection
   * @description Adds the LayerCollection with the requested name.
   *
   * @param {String} name - Name of the projection.
   */
  loadLayerCollection: function(name) {
    this.layers[name].addTo(this);
  },

  /**
   * @function AstroMap.prototype.changeProjection
   * @description Changes the projection of the map and resets the center and view.
   *
   * @param {String} name - Name of Projection.
   *
   * @param {List} center - Center of map based off of projection.
]   */
  changeProjection: function(name, center) {
    // Reset the view before changing the projection since
    // an exception may be thrown when swapping to a polar
    // projection and the zoom level is 7+.
    this.setView(center, 1, true);

    let newCRS = null;
    if (name == "cylindrical") {
      newCRS = this._defaultProj;
      this._currentProj = "EPSG:4326";
      this.setMaxZoom(8);
    } else {
      let proj = this._astroProj.getStringAndCode(this._target, name);
      newCRS = new L.Proj.CRS(proj["code"], proj["string"], {
        resolutions: [8192, 4096, 2048, 1024, 512, 256, 128]
      });
      this._currentProj = proj["code"];
      this.setMaxZoom(6);
    }
    this.options.crs = newCRS;

    // Reset the view again because the map refreshses after changing
    // the projection and you start to zoom in/out. This makes the map do a
    // weird flashing transition.
    this.setView(center, 1, true);
    this.loadLayerCollection(name);

    // this.fire("projChange", { proj: this._currentProj });
  },

  /**
   * @function AstroMap.prototype.hasNorthPolar
   * @description Checks if the map has a layer collection for northPolar.
   *
   * @return {Boolean} Returns true if there is a northPolar collection.
   */
  hasNorthPolar: function() {
    return this._hasNorthPolar;
  },

  /**
   * @function AstroMap.prototype.hasSouthPolar
   * @description Checks if the map has a layer collection for southPolar.
   *
   * @return {Boolean} Returns true if there is a southPolar collection.
   */
  hasSouthPolar: function() {
    return this._hasSouthPolar;
  },

  /**
   * @function AstroMap.prototype.target
   * @description Returns the name of the target.
   *
   * @return {String} Name of target.
   */
  target: function() {
    return this._target;
  },

  /**
   * @function AstroMap.prototype.projection
   * @description Returns the name of the current projection of the map.
   *
   * @return {String} Proj-code of the projection.
   */
  projection: function() {
    return this._currentProj;
  },

  /**
   * @function AstroMap.prototype.setCurrentLayer
   * @description Sets the value of the current layer of the map.
   *          Set by the LayerCollection in the onAdd method.
   */
  setCurrentLayer: function(layer) {
    this._currentLayer = layer;
  },

  /**
   * @function AstroMap.prototype.currentLayer
   * @description Returns the current layer of the map. Used by the LayerCollection
   *          so that it can remove the layer of the map without having to
   *          remove all layers, including drawn shapes.
   *
   * @return {L.Layer} Current layer of the map.
   */
  currentLayer: function() {
    return this._currentLayer;
  }
});
