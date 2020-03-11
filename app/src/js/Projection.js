import "leaflet";
/** 
 * @class Projection
 * @aka L.Control.Projection
 * @inherits L.Control
 * 
 * @classdesc Control that allows users to change the projection of the map. Uses predefined GUI elements.
 */
export default L.Control.Projection = L.Control.extend({

  /**
   * @function Projection.prototype.onAdd
   * @description Grabs the button GUI elements and adds onclick events to them.
   * @param  {AstroMap} map - The map to add the control to.
   * @return {Div} Container containing the projection buttons.
   */
  onAdd: function(map) {
    let container = L.DomUtil.create("div");

    this._northPolar = L.DomUtil.get("projectionNorthPole");
    L.DomEvent.on(this._northPolar, "click", this.loadNorthPolar, this);
    if (!map.hasNorthPolar()) {
      L.DomUtil.addClass(this._northPolar, "disabled");
    }

    this._southPolar = L.DomUtil.get("projectionSouthPole");
    L.DomEvent.on(this._southPolar, "click", this.loadSouthPolar, this);
    if (!map.hasSouthPolar()) {
      L.DomUtil.addClass(this._southPolar, "disabled");
    }

    this._cylindrical = L.DomUtil.get("projectionCylindrical");
    L.DomEvent.on(this._cylindrical, "click", this.loadCylindrical, this);

    return container;
  },


  /**
   * @function Projection.prototype.loadNorthPolar
   * @description Sets the map's projection to north-polar stereographic.
   * @param  {Event} e - Onclick event.
   */
  loadNorthPolar: function(e) {
    let center = [90, 0];
    this._map.changeProjection("northPolar", center);
  },

  /**
   * @function Projection.prototype.loadSouthPolar
   * @description Sets the map's projection to south-polar stereographic.
   * @param  {Event} e - Onclick event.
   */
  loadSouthPolar: function(e) {
    let center = [-90, 0];
    this._map.changeProjection("southPolar", center);
  },

  /**
   * @function Projection.prototype.loadCylindrical
   * @description Sets the map's projection to cylindrical.
   * @param  {Event} e - Onclick event.
   */
  loadCylindrical: function(e) {
    let center = [0, 0];
    this._map.changeProjection("cylindrical", center);
  }
});
