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
    position: "topleft"
  },

  /**
   * @function AstroSidebarControl.prototype.initialize
   * @description Constructs a sidebar control.
   * @param {Array} controls - List of controls to pull onto the sidebar.
   */
  initialize: function(console, consoleParent) {
    this._console = console;
    this._consoleParent = consoleParent;
  },

  /**
   * @function AstroSidebarControl.prototype.onAdd
   * @description Moves the controls onto the sidebar.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    let container = L.DomUtil.create("div", "sidebar");
    container.appendChild(this._console);
    return container;
  },

  /**
   * @function AstroSidebarControl.prototype.onRemove
   * @description Puts the controls back onto the console.
   * @param  {AstroMap} map - The AstroMap to remove the control from.
   */
  onRemove: function(map) {
    this._consoleParent.appendChild(this._console);
  }
});
