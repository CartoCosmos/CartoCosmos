L.Control.AstroMousePosition = L.Control.extend({
  options: {
    separator: " : ",
    numDigits: 5,
    prefix: "",
    targetPlanet: ""
  },

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

  changeLonDomain(e) {
    const lonDomain = this.lonDomain.value;
    if (lonDomain === "180") {
      this.lonTo180 = true;
    } else if (lonDomain === "360") {
      this.lonTo180 = false;
    }
  },

  changeLatType(e) {
    const latitudeType = this.latitudeType.value;
    if (latitudeType === "Planetographic") {
      this.planetocentric = false;
    } else if (latitudeType === "Planetocentric") {
      this.planetocentric = true;
    }
  },

  changeLonDirection(e) {
    const lonDirection = this.lonDirection.value;
    if (lonDirection === "PositiveWest") {
      this.postiveEast = false;
    } else if (lonDirection === "PositiveEast") {
      this.postiveEast = true;
    }
  },

  onRemove(map) {
    map.off("mousemove", this.onMouseMove);
  },

  onMouseMove(e) {
    let {lng} = e.latlng;
    let {lat} = e.latlng;
    
    lat = L.Util.wrapNum(lat, [-180.0, 180.0]);
    lng = L.Util.wrapNum(lng, [-180.0, 180.0]);

    
    cords = this.astroMath.latLonSwitcher(
      lat,
      lng,
      this.lonTo180,
      this.planetocentric,
      this.postiveEast,
      this.map.options.crs.code
    );

    lat = cords[0];
    lng = cords[1];

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
