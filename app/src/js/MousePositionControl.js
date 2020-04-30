import L from "leaflet";

import AstroMath from "./AstroMath";

/**
 * @class MousePositionControl
 * @aka L.Control.MousePositionControl
 * @extends L.Control
 *
 * @classdesc Class that inherits from the class L.Control and handles the back-end when a user
 *            clicks on the lat/lon buttons.
 * Since this class inherits L.Control, it is added to the AstroMap in the same way as other controls,
 *             like the zoom control.
 *
 * @example
 * // initialize the control with an options object.
 * mouseControl = L.MousePositionControl({numDigits: 2, prefix: "Lat Lon: ",targetPlanet: "mars"});
 * // add control to map
 * mouseControl.addTo(map);
 */
export default L.Control.MousePositionControl = L.Control.extend({
  options: {
    separator: ", ",
    numDigits: 5,
    prefix: "",
    lngFirst: true
  },

  /**
   * @function MousePositionControl.prototype.onAdd
   * @description Grabs the lat/lon buttons from the GUI and adds on-change events to them. It also
   *              adds an on mouse-over event to the AstroMap to grab the current mouse position of
   *              the user's mouse pointer.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    map.on("mousemove", this.onMouseMove, this);
    map.on("mouseout", this.onMouseOut, this);

    this.map = map;

    this.isLonDom180 = true;
    this.isLatTypeOcentric = true;
    this.isLonDirEast = true;

    this.astroMath = new AstroMath(map.target(), map.radii());
    this.lonDisplayElement = L.DomUtil.get("lonCoordinateDisplay");
    this.latDisplayElement = L.DomUtil.get("latCoordinateDisplay");
    this.lonDisplayElement.innerHTML = "---.---";
    this.latDisplayElement.innerHTML = "---.---";

    this.lonDomain180 = L.DomUtil.get("consoleLon180Btn");
    L.DomEvent.on(this.lonDomain180, "click", this.changeLonDomain, this);
    this.lonDomain360 = L.DomUtil.get("consoleLon360Btn");
    L.DomEvent.on(this.lonDomain360, "click", this.changeLonDomain, this);

    this.lonDirectionEast = L.DomUtil.get("consoleLonEastBtn");
    L.DomEvent.on(
      this.lonDirectionEast,
      "click",
      this.changeLonDirection,
      this
    );
    this.lonDirectionWest = L.DomUtil.get("consoleLonWestBtn");
    L.DomEvent.on(
      this.lonDirectionWest,
      "click",
      this.changeLonDirection,
      this
    );

    this.latitudeTypeOcentric = L.DomUtil.get("consoleLatTypeOcentric");
    L.DomEvent.on(this.latitudeTypeOcentric, "click", this.changeLatType, this);
    this.latitudeTypeOgraphic = L.DomUtil.get("consoleLatTypeOgraphic");
    L.DomEvent.on(this.latitudeTypeOgraphic, "click", this.changeLatType, this);

    // We don't want to add the buttons to a div on the map, so just return a blank one.
    return L.DomUtil.create("div");
  },

  /**
   * @function MousePositionControl.prototype.changeLonDomain
   * @description Is called when a user changes the longitude domain selector. Changes the longitude domain class variable to false if 0 to 360 is selected and true if -180 to 180 is selected.
   * @param  {DomEvent} e  - On change of consoleLonDomSelect.
   */
  changeLonDomain(e) {
    this.isLonDom180 = !this.isLonDom180;
  },

  /**
   * @function MousePositionControl.prototype.changeLatType
   * @description Is called when a user changes the latitude type selector. Changes the latitude type class variable to false if planetographic is selected and true if isLatTypeOcentric is selected.
   * @param  {DomEvent} e - On change of consoleLatTypeSelect.
   */
  changeLatType(e) {
    this.isLatTypeOcentric = !this.isLatTypeOcentric;
  },

  /**
   * @function MousePositionControl.prototype.changeLonDirection
   * @description Is called when a user changes the longitude direction selector. Changes the longitude direction class variable to false if positive west is selected and true if positive east is selected.
   * @param  {DomEvent} e - On change of consoleLonDirSelect.
   */
  changeLonDirection(e) {
    this.isLonDirEast = !this.isLonDirEast;
  },

  /**
   * @function MousePositionControl.prototype.onRemove
   * @description Is called when a user unselects a map.
   * @param  {AstroMap} map - The AstroMap to remove the control from.
   */
  onRemove(map) {
    map.off("mousemove", this.onMouseMove);
  },

  /**
   * @function MousePositionControl.prototype.onMouseMove
   * @description Is called when a user moves their mouse over the AstroMap. The function uses the class latitude and longitude class variables combined with the AstroMath class to calculate the correct coordinate mouse position of the users mouse pointer.
   * @param  {DomEvent} e - On mouse move over the AstroMap.
   */
  onMouseMove(e) {
    let { lng } = e.latlng;
    let { lat } = e.latlng;

    if (lat <= 90 && lat >= -90) {
      lng = L.Util.wrapNum(lng, [-180.0, 180.0]);

      if (!this.isLatTypeOcentric) {
        lat = this.astroMath.latToPlanetOgraphic(lat);
      }

      if (!this.isLonDom180) {
        lng = this.astroMath.lonTo360(lng, this.map.options.crs.code);
      } else {
        if (this.map.options.crs.code != "EPSG:4326") {
          if (lng < 0) {
            lng += 180;
          } else {
            lng -= 180;
          }
        }
      }

      if (!this.isLonDirEast) {
        lng = this.astroMath.domainToPositiveWest(lng, this.isLonDom180);
      }

      lng = lng.toFixed(this.options.numDigits);
      lat = lat.toFixed(this.options.numDigits);

      this.lonDisplayElement.innerHTML = lng;
      this.latDisplayElement.innerHTML = lat;
    } else {
      this.lonDisplayElement.innerHTML = "---.---";
      this.latDisplayElement.innerHTML = "---.---";
    }
  },
  /**
   * @function MousePositionControl.prototype.onMouseOut
   * @description Displays lat lon on mouse.
   * @param  {DomEvent} e - On mouse out.
   */
  onMouseOut(e) {
    this.lonDisplayElement.innerHTML = "---.---";
    this.latDisplayElement.innerHTML = "---.---";
  }
});

/**
 * @function MousePositionControl.prototype.mergeOptions
 * @aka L.Map.mergeOptions
 * @description Turns position control false.
 */
L.Map.mergeOptions({
  positionControl: false
});

/**
 * @function MousePositionControl.prototype.addInitHook
 * @aka L.Map.addInitHook
 * @description Adds position control.
 */
L.Map.addInitHook(function() {
  if (this.options.positionControl) {
    this.positionControl = new L.Control.MousePosition();
    this.addControl(this.positionControl);
  }
});

/**
 * @function MousePositionControl.prototype.mousePosition
 * @aka L.mousePosition
 * @description Gets mouse position.
 * @return {Object} Mouse position.
 */
L.mousePosition = function(options) {
  return new L.Control.MousePosition(options);
};
