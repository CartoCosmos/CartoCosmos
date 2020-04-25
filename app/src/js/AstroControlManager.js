import L from "leaflet";
import ProjectionControl from "./ProjectionControl";
import MousePositionControl from "./MousePositionControl";
import AstroDrawControl from "./AstroDrawControl";
import AstroSidebarControl from "./SidebarControl";

/**
 * @class AstroControlManager
 * @aka L.Class.AstroControlManager
 * @inherits L.Class
 *
 * @classdesc
 * Adds all of the needed controls to the AstroMap.
 */
export default L.AstroControlManager = L.Class.extend({
  /**
   * @function ProjectionControl.prototype.initialize
   * @description Creates all of the required controls.
   * @param {AstroMap} map - The AstroMap to add the controls to. We need to pass in the map here
   *                         because the drawnItems FeatureGroup needs it when initialized.
   */
  initialize: function(map) {
    this._projControl = new ProjectionControl();

    this._mouseControl = new MousePositionControl({
      numDigits: 3
    });

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    this._drawControl = new AstroDrawControl({
      edit: {
        featureGroup: drawnItems
      }
    });

    this._sidebarControl = new AstroSidebarControl([
      this._projControl,
      this._mouseControl
    ]);
  },

  /**
   * @function ProjectionControl.prototype.addTo
   * @description Adds all of the controls to the AstroMap.
   * @param {AstroMap} map - The AstroMap to add the controls to.
   */
  addTo: function(map) {
    map.addControl(this._projControl);
    map.addControl(this._mouseControl);
    map.addControl(this._drawControl);
    map.addControl(new L.Control.Scale({ imperial: false }));

    let that = this;
    map.on("fullscreenchange", function() {
      if (map.isFullscreen()) {
        map.addControl(that._sidebarControl);
      } else {
        map.removeControl(that._sidebarControl);
      }
    });
  }
});
