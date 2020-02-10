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
L.Control.AstroMousePosition = L.Control.extend({
  options: {
    separator: " : ",
    numDigits: 5,
    prefix: "",
    targetPlanet: ""
  },

   /**
    * Grabs the lat/lon buttons from the GUI and adds on-change events to them. 
    * It also adds an on mouse-over event to the AstroMap to grab the current 
    * mouse position of the user's mouse pointer.
    * @param  {AstroMap} map - The AstroMap to add the control to.
    * @return {Object} The div-container the control is in. 
    */
   onAdd(map) {
    this.container = L.DomUtil.create("div", "leaflet-control-mouseposition");
    L.DomEvent.disableClickPropagation(this.container);
    map.on("mousemove", this.onMouseMove, this);

    this.map = map;

    this.lonTo180 = false;
    this.planetocentric = true;
    this.postiveEast = true;

    this.astroMath = new AstroMath(this.options.targetPlanet);
    this.htmlDiv = L.DomUtil.get("latLng");

    this.lonDomain = L.DomUtil.get("consoleLonDomSelect");
    L.DomEvent.on(this.lonDomain, "change", this.changeLonDomain, this);
    this.lonDirection = L.DomUtil.get("consoleLonDirSelect");
    L.DomEvent.on(this.lonDirection, "change", this.changeLonDirection, this);
    this.latitudeType = L.DomUtil.get("consoleLatTypeSelect");
    L.DomEvent.on(this.latitudeType, "change", this.changeLatType, this);

    return this.container;
  },

  /**
   * Is called when a user changes the longitude domain selector. 
   * Changes the longitude domain class variable to false if 0 to 
   * 360 is selected and true if -180 to 180 is selected. 
   * @param  {DomEvent} e  - On change of consoleLonDomSelect.
   */
  changeLonDomain(e) {
    const lonDomain = this.lonDomain.value;
    if (lonDomain === "180") {
      this.lonTo180 = true;
    } else if (lonDomain === "360") {
      this.lonTo180 = false;
    }
  },
  /**
   * Is called when a user changes the latitude type selector. 
   * Changes the latitude type class variable to false if planetographic is 
   * selected and true if planetocentric is selected. 
   * @param  {DomEvent} e - On change of consoleLatTypeSelect.
   */
  changeLatType(e) {
    const latitudeType = this.latitudeType.value;
    if (latitudeType === "Planetographic") {
      this.planetocentric = false;
    } else if (latitudeType === "Planetocentric") {
      this.planetocentric = true;
    }
  },
  /**
   * Is called when a user changes the longitude direction selector. 
   * Changes the longitude direction class variable to false if positive west 
   * is selected and true if positive east is selected.
   * @param  {DomEvent} e - On change of consoleLonDirSelect.
   */
  changeLonDirection(e) {
    const lonDirection = this.lonDirection.value;
    if (lonDirection === "PositiveWest") {
      this.postiveEast = false;
    } else if (lonDirection === "PositiveEast") {
      this.postiveEast = true;
    }
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
    let {lng} = e.latlng;
    let {lat} = e.latlng;
    
    lat = L.Util.wrapNum(lat, [-180.0, 180.0]);
    lng = L.Util.wrapNum(lng, [-180.0, 180.0]);
    
    if (!this.planetocentric) {
      lat = this.astroMath.latoPLanetOgraphic(lat);
    }

    if (!this.lonTo180){
      lng = this.astroMath.lngTo360(lng, this.map.options.crs.code);
    }

    if (!this.postiveEast){
      lng = this.astroMath.domainToPositiveWest(lng, this.lonTo180);
    }

    lng = L.Util.formatNum(lng, this.options.numDigits);
    lat = L.Util.formatNum(lat, this.options.numDigits);

    const value = this.options.lngFirst
      ? lng + this.options.separator + lat
      : lat + this.options.separator + lng;

    const prefixAndValue = `${this.options.prefix} ${value}`;
    this.htmlDiv.innerHTML = prefixAndValue;
  }
});

L.Map.mergeOptions({
  positionControl: false
});

L.Map.addInitHook(function() {
  if (this.options.positionControl) {
    this.positionControl = new L.Control.AstroMousePosition();
    this.addControl(this.positionControl);
  }
});

L.astroMousePosition = function(options) {
  return new L.Control.AstroMousePosition(options);
};
