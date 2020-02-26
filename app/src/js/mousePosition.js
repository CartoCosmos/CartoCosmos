import AstroMath from "./AstroMath";
import "leaflet";
/**
 * @class AstroMap
 * @aka L.Control.AstroMousePosition
 * @extends L.Control
 * Class that inherits from the class L.Control and handles the back-end when a user clicks on the lat/lon buttons.
 * Since this class inherits L.Control, it is added to the AstroMap in the same way as other controls, like the zoom control.
 *
 * * @example
 *
 * ```js
 * // initialize the control with an options object.
 * mouseControl = L.astroMousePosition({numDigits: 2, prefix: "Lat Lon: ",targetPlanet: "mars"});
 * // add control to map
 * mouseControl.addTo(map);
 * ```
 */
export default L.Control.MousePosition = L.Control.extend({
  options: {
    separator: ", ",
    numDigits: 5,
    prefix: "",
    targetPlanet: "",
    lngFirst: true
  },

  /**
   * Grabs the lat/lon buttons from the GUI and adds on-change events to them.
   * It also adds an on mouse-over event to the AstroMap to grab the current
   * mouse position of the user's mouse pointer.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    this.container = L.DomUtil.create("div", "leaflet-control-mouseposition");
    L.DomEvent.disableClickPropagation(this.container);
    map.on("mousemove", this.onMouseMove, this);
    map.on("mouseout", this.onMouseOut, this);

    this.map = map;

    this.isLonDom180 = true;
    this.isLatTypeOcentric = true;
    this.isLonDirEast = true;

    this.astroMath = new AstroMath(this.options.targetPlanet);
    this.coordDisplayElement = L.DomUtil.get("coordinateDisplay");
    this.coordDisplayElement.innerHTML = "lon, lat";

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

    return this.container;
  },

  /**
   * Is called when a user changes the longitude domain selector.
   * Changes the longitude domain class variable to false if 0 to
   * 360 is selected and true if -180 to 180 is selected.
   * @param  {DomEvent} e  - On change of consoleLonDomSelect.
   */
  changeLonDomain(e) {
    this.isLonDom180 = !this.isLonDom180;
  },
  /**
   * Is called when a user changes the latitude type selector.
   * Changes the latitude type class variable to false if planetographic is
   * selected and true if isLatTypeOcentric is selected.
   * @param  {DomEvent} e - On change of consoleLatTypeSelect.
   */
  changeLatType(e) {
    this.isLatTypeOcentric = !this.isLatTypeOcentric;
  },
  /**
   * Is called when a user changes the longitude direction selector.
   * Changes the longitude direction class variable to false if positive west
   * is selected and true if positive east is selected.
   * @param  {DomEvent} e - On change of consoleLonDirSelect.
   */
  changeLonDirection(e) {
    this.isLonDirEast = !this.isLonDirEast;
  },
  /**
   * @param  {AstroMap} map - The AstroMap to remove the control from.
   */
  onRemove(map) {
    map.off("mousemove", this.onMouseMove);
  },

  /**
   *  Is called when a user moves their mouse over the AstroMap.
   *  The function uses the class latitude and longitude class variables combined with the AstroMath class
   *  to calculate the correct coordinate mouse position of the users mouse pointer.
   * @param  {DomEvent} e - On mouse move over the AstroMap.
   */
  onMouseMove(e) {
    let { lng } = e.latlng;
    let { lat } = e.latlng;

    lat = L.Util.wrapNum(lat, [-180.0, 180.0]);
    lng = L.Util.wrapNum(lng, [-180.0, 180.0]);

    if (!this.isLatTypeOcentric) {
      lat = this.astroMath.latToPlanetOgraphic(lat);
    }

    if (!this.isLonDom180) {
      lng = this.astroMath.lonTo360(lng, this.map.options.crs.code);
    }

    if (!this.isLonDirEast) {
      lng = this.astroMath.domainToPositiveWest(lng, this.isLonDom180);
    }

    lng = L.Util.formatNum(lng, this.options.numDigits);
    lat = L.Util.formatNum(lat, this.options.numDigits);

    const value = this.options.lngFirst
      ? lng + this.options.separator + lat
      : lat + this.options.separator + lng;

    const prefixAndValue = `${this.options.prefix}${value}`;
    this.coordDisplayElement.innerHTML = prefixAndValue;
  },
  onMouseOut(e) {
    if (this.options.lngFirst) {
      this.coordDisplayElement.innerHTML = "lon, lat";
    } else {
      this.coordDisplayElement.innerHTML = "lat, lon";
    }
  }
});

L.Map.mergeOptions({
  positionControl: false
});

L.Map.addInitHook(function() {
  if (this.options.positionControl) {
    this.positionControl = new L.Control.MousePosition();
    this.addControl(this.positionControl);
  }
});

L.mousePosition = function(options) {
  return new L.Control.MousePosition(options);
};
