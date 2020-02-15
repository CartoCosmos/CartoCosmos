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
  // @method onAdd(map: AstroMap)
  // Grabs the button GUI elements and adds onclick events to them.
  onAdd: function(map) {
    let container = L.DomUtil.create("div");

    this.northPolar = L.DomUtil.get("projectionNorthPole");
    L.DomEvent.on(this.northPolar, "click", this.loadNorthPolar, this);
    this.cylindrical = L.DomUtil.get("projectionCylindrical");
    L.DomEvent.on(this.cylindrical, "click", this.loadCylindrical, this);
    this.southPolar = L.DomUtil.get("projectionSouthPole");
    L.DomEvent.on(this.southPolar, "click", this.loadSouthPolar, this);

    return container;
  },

  // @method loadNorthPolar(e: DomEvent)
  // Sets the map's projection to north-polar stereographic.
  loadNorthPolar: function(e) {
    let center = [90, 0];
    this._map.changeProjection("northPolar", center);
  },

  // @method loadSouthPolar(e: DomEvent)
  // Sets the map's projection to south-polar stereographic.
  loadSouthPolar: function(e) {
    let center = [-90, 0];
    this._map.changeProjection("southPolar", center);
  },

  // @method loadGeodesic(e: DomEvent)
  // Sets the map's projection to geodesic.
  loadCylindrical: function(e) {
    let center = [0, 0];
    this._map.changeProjection("cylindrical", center);
  }
});
