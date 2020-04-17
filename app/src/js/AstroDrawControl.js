import L from "leaflet";
import "leaflet-draw";
import Wkt from "wicket";

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
export default L.Control.AstroDrawControl = L.Control.Draw.extend({
  options: {
    position: "topleft",
    draw: { circle: false, marker: false, circlemarker: false },
    edit: false,
  },

  /**
   * @function AstroDrawControl.prototype.onAdd
   * @description Adds the draw control to the map provided. Creates an on-draw and on-click event
   *              that allows users to draw polygons onto the leaflet map.
   * @param  {AstroMap} map - The AstroMap to add the control to.
   * @return {Object} The div-container the control is in.
   */
  onAdd: function(map) {
    this._map = map;
    let container = L.DomUtil.create("div", "leaflet-draw"),
      addedTopClass = false,
      topClassName = "leaflet-draw-toolbar-top",
      toolbarContainer;

    for (let toolbarId in this._toolbars) {
      if (this._toolbars.hasOwnProperty(toolbarId)) {
        toolbarContainer = this._toolbars[toolbarId].addToolbar(map);

        if (toolbarContainer) {
          if (!addedTopClass) {
            if (!L.DomUtil.hasClass(toolbarContainer, topClassName)) {
              L.DomUtil.addClass(toolbarContainer.childNodes[0], topClassName);
            }
            addedTopClass = true;
          }

          container.appendChild(toolbarContainer);
        }
      }
    }

    this.wktTextBox = L.DomUtil.get("wktTextBox");
    this.wkt = new Wkt.Wkt();
    this.myLayer = L.Proj.geoJson().addTo(map);

    this.wktButton = L.DomUtil.get("wktButton");
    L.DomEvent.on(this.wktButton, "click", this.mapWKTString, this);

    map.on("draw:created", this.shapesToWKT, this);

    // map.on("projChange", this.reprojectFeature, this);

    return container;
  },

  /**
   * @function AstroDrawControl.prototype.shapesToWKT
   * @description Is called when a user draws a shape using the on map drawing features.
   *              Converts the shaped drawn into a Well-Known text string and inserts it into
   *              the Well-Known text box.
   * @param  {DomEvent} e  - On draw.
   */
  shapesToWKT: function(e) {
    this.myLayer.clearLayers();
    this.options.edit["featureGroup"].clearLayers();

    this.options.edit["featureGroup"].addLayer(e.layer);
    let geoJson = e.layer.toGeoJSON();
    geoJson = geoJson["geometry"];

    this.wkt.read(JSON.stringify(geoJson));
    this.wktTextBox.value = this.wkt.write();
  },

  /**
   * @function AstroDrawControl.prototype.mapWKTString
   * @description  Is called when a user clicks the draw button below the AstroMap.
   *               Will take the Well-Known text string and draw the shape onto the map.
   *               If the Well-Known text string is invalid an error will show in the text box.
   * @param  {DomEvent} e  - On Click of Well-Known text button.
   */
  mapWKTString: function(e) {
    this.myLayer.clearLayers();
    this.options.edit["featureGroup"].clearLayers();

    let wktValue = this.wktTextBox.value;

    this.wktTextBox.value = "";

    try {
      this.wkt.read(wktValue);
    } catch (err) {
      alert("Invalid Well Known Text String");
      return;
    }

    let geoJson = this.wkt.toJson();

    let geojsonFeature = {
      type: "Feature",
      geometry: geoJson,
    };

    this.myLayer.addData(geojsonFeature);
  },

  // reprojectFeature: function(e) {

  // }
});
