import "leaflet";
/*
 * @class Projection
 * @aka L.Control.Projection
 * @inherits L.Control
 *
 * Control that allows users to change the projection of the map.
 * Uses predefined GUI elements.
 */
export default L.Control.Projection = L.Control.extend({
 
  /**
   * Grabs the button GUI elements and adds onclick events to them.
   * @param  {AstroMap} map - The map to add the control to.
   * @return {Div} Container containing the projection buttons.
   */
  onAdd: function(map) {
    let container = L.DomUtil.create("div");

    this.northPolar = L.DomUtil.get("projectionNorthPole");
    L.DomEvent.on(this.northPolar, "click", this.loadNorthPolar, this);
    if(!map.hasNorthPolar()) {
      this.northPolar.disabled = true;
      L.DomUtil.addClass(this.northPolar, "disabled");
    }

    this.southPolar = L.DomUtil.get("projectionSouthPole");
    L.DomEvent.on(this.southPolar, "click", this.loadSouthPolar, this);
    if(!map.hasSouthPolar()) {
      this.southPolar.disabled = true;
      L.DomUtil.addClass(this.southPolar, "disabled");
    }
  
    this.cylindrical = L.DomUtil.get("projectionCylindrical");
    L.DomEvent.on(this.cylindrical, "click", this.loadCylindrical, this);

    return container;
  },

  /**
   * Sets the map's projection to north-polar stereographic.
   * @param  {Event} e - Onclick event.
   */
  loadNorthPolar: function(e) {
    let center = [90, 0];
    this._map.changeProjection("northPolar", center);
  },

  /**
   * Sets the map's projection to south-polar stereographic.
   * @param  {Event} e - Onclick event.
   */
  loadSouthPolar: function(e) {
    let center = [-90, 0];
    this._map.changeProjection("southPolar", center);
  },

  /**
   * Sets the map's projection to cylindrical.
   * @param  {Event} e - Onclick event.
   */
  loadCylindrical: function(e) {
    let center = [0, 0];
    this._map.changeProjection("cylindrical", center);
  }
});
