import L from "leaflet";
import "leaflet-sidebar-v2";

/**
 * @class AstroDrawControl
 * @aka L.Control.AstroDrawControl
 * @extends L.Control
 * @classdesc
 * Class that extends from the class L.Control.Draw and handles the back-end when a user draws on the leaflet map.
 * Since this class inherits L.Control, it is added to the AstroMap in the same way as other controls, like the zoom control.
 *
 * @example
 *
 * // add a feature group to the map
 * let drawnItems = new L.FeatureGroup();
 * map.addLayer(drawnItems);
 *
 * // add draw control to map
 * let drawControl = new AstroDrawControl({
 *   edit: {
 *      featureGroup: drawnItems
 *   }
 * }).addTo(map);
 */
export default L.Control.AstroSidebarControl = L.Control.Sidebar.extend({
  initialize: function(map, controls) {
    this._controls = controls;
    L.Control.Sidebar.prototype.initialize.call(this, map, {
      position: "right",
      autopan: true,
      closeButton: true
    });
  },

  onAdd: function(map) {
    let container = L.Control.Sidebar.prototype.onAdd.call(this, map);
    this._controls.forEach(function(control, index) {
      control.moveControl(container, true);
    });
    return container;
  },

  onRemove: function(map) {
    L.Control.Sidebar.prototype.onRemove.call(this, map);
    this._controls.forEach(function(control, index) {
      control.moveControl(null, false);
    });
  }
});
