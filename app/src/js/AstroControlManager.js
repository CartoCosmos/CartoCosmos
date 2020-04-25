import L from "leaflet";
import ProjectionControl from "./ProjectionControl";
import MousePositionControl from "./MousePositionControl";
import AstroDrawControl from "./AstroDrawControl";
import AstroSidebarControl from "./SidebarControl";

/**
 * @class LayerCollection
 * @aka L.Class.LayerCollection
 * @inherits L.Class
 *
 * @classdesc
 * Holds the base layers and overlays of a particular projection
 * for quick and easy use in the AstroMap class.
 */
export default L.AstroControlManager = L.Class.extend({
  initialize: function(map) {
    this._projControl = new ProjectionControl();
    map.addControl(this._projControl);

    this._mouseControl = new MousePositionControl({
      numDigits: 3
    });
    map.addControl(this._mouseControl);

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    this._drawControl = new AstroDrawControl({
      edit: {
        featureGroup: drawnItems
      }
    });
    map.addControl(this._drawControl);

    this._sidebarControl = new AstroSidebarControl(map, [
      this._projControl,
      this._mouseControl
    ]);

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
