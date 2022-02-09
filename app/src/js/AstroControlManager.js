import L from "leaflet";
import "leaflet-fullscreen";

import ProjectionControl from "./ProjectionControl";
import MousePositionControl from "./MousePositionControl";
import AstroDrawControl from "./AstroDrawControl";
import AstroSidebarControl from "./SidebarControl";
import ViewCenterControl from "./ViewCenterControl";

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
   * @function AstroControlManager.prototype.initialize
   * @description Creates all of the required controls.
   * @param {AstroMap} map - The AstroMap to add the controls to. We need to pass in the map here
   *                         because the drawnItems FeatureGroup needs it when initialized.
   */
  initialize: function(map) {
    this._controls = [];
    this._projControl = new ProjectionControl();
    this._controls.push(this._projControl);

    this._mouseControl = new MousePositionControl({
      numDigits: 3
    });
    this._controls.push(this._mouseControl);

    this._zoomControl = new L.Control.Zoom();
    this._controls.push(this._zoomControl);

    // Leaflet built-in fullscreen doesn't work for outside controls
    // this._fullscreenControl = new L.Control.Fullscreen();
    // this._controls.push(this._fullscreenControl);

    this._viewCenterControl = new ViewCenterControl();
    this._controls.push(this._viewCenterControl);

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    this._drawControl = new AstroDrawControl({
      edit: {
        featureGroup: drawnItems
      }
    });
    this._controls.push(this._drawControl);

    this._sidebarControl = new AstroSidebarControl(
      L.DomUtil.get("consoleToolbar"),
      L.DomUtil.get("coordContianer")
    );
  },

  /**
   * @function AstroControlManager.prototype.addTo
   * @description Adds all of the controls to the AstroMap.
   * @param {AstroMap} map - The AstroMap to add the controls to.
   */
  addTo: function(map) {
    this._controls.forEach(function(control, index) {
      map.addControl(control);
    });
    map.addControl(new L.Control.Scale({ imperial: false }));

    let that = this;
    map.on("fullscreenchange", function() {
      if (map.isFullscreen()) {
        that.reorderControls(map);
      } else {
        map.removeControl(that._sidebarControl);
      }
    });
  },

  /**
   * @function AstroControlManager.prototype.reorderControls
   * @description Removes/adds the existing controls to the map so that the
   *              sidebar control is at the top.
   * @param {AstroMap} map - The AstroMap to add the controls to.
   */
  reorderControls: function(map) {
    this._controls.forEach(function(control, index) {
      map.removeControl(control);
    });

    map.addControl(this._sidebarControl);

    this._controls.forEach(function(control, index) {
      map.addControl(control);
    });
  }
});
