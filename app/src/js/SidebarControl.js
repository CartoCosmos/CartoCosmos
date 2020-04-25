import L from "leaflet";

/**
 * @class AstroSidebarControl
 * @aka L.Control.AstroSidebarControl
 * @extends L.Control
 * @classdesc
 * Holds the projection and lat/lon buttons and lat/lon coordinate display when
 * the map goes fullscreen.
 */
export default L.Control.AstroSidebarControl = L.Control.extend({
  options: {
    position: "topright"
  },

  /**
   * @function AstroSidebarControl.prototype.initialize
   * @description Constructs a sidebar control.
   * @param {Array} controls - List of controls to pull onto the sidebar.
   */
  initialize: function(controls) {
    this._controls = controls;
  },

  /**
   * @function AstroSidebarControl.prototype.onAdd
   * @description Moves the controls onto the sidebar.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    let container = L.DomUtil.create("div", "sidebar");
    this._controls.forEach(function(control, index) {
      control.moveControl(container, true);
    });
    return container;
  },

  /**
   * @function AstroSidebarControl.prototype.onRemove
   * @description Puts the controls back onto the console.
   * @param  {AstroMap} map - The AstroMap to remove the control from.
   */
  onRemove: function(map) {
    this._controls.forEach(function(control, index) {
      control.moveControl(null, false);
    });
  }
});
