import L from "leaflet";

/**
 * @class ProjectionControl
 * @aka L.Control.ProjectionControl
 * @inherits L.Control
 *
 * @classdesc Control that allows users to change the projection of the map. Uses predefined GUI elements.
 */
export default L.Control.ProjectionControl = L.Control.extend({
  /**
   * @function ProjectionControl.prototype.onAdd
   * @description Grabs the button GUI elements and adds onclick events to them.
   * @param  {AstroMap} map - The map to add the control to.
   * @return {Div} Container containing the projection buttons.
   */
  onAdd: function(map) {
    this._container = L.DomUtil.create("div");

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

    return this._container;
  },

  moveControl: function(container, isFullscreen) {
    if (isFullscreen) {
      container.appendChild(this._northPolar);
      container.appendChild(this._cylindrical);
      container.appendChild(this._southPolar);
    } else {
      let projContainer = L.DomUtil.get("projContainer");
      projContainer.appendChild(this._northPolar);
      projContainer.appendChild(this._cylindrical);
      projContainer.appendChild(this._southPolar);
    }
  },

  /**
   * @function ProjectionControl.prototype.loadNorthPolar
   * @description Sets the map's projection to north-polar stereographic.
   */
  loadNorthPolar: function() {
    let center = [90, 0];
    this._map.changeProjection("northPolar", center);
  },

  /**
   * @function ProjectionControl.prototype.loadSouthPolar
   * @description Sets the map's projection to south-polar stereographic.
   */
  loadSouthPolar: function() {
    let center = [-90, 0];
    this._map.changeProjection("southPolar", center);
  },

  /**
   * @function ProjectionControl.prototype.loadCylindrical
   * @description Sets the map's projection to cylindrical.
   */
  loadCylindrical: function() {
    let center = [0, 0];
    this._map.changeProjection("cylindrical", center);
  }
});
