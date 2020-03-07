import "leaflet";
import "leaflet-draw";
import Wkt from "wicket";
import { func } from "prop-types";


export default L.Control.AstroDraw = L.Control.Draw.extend({
	options: {
		position: 'topleft',
		draw: {},
    edit: false
  },

  onAdd: function (map) {
    let container = L.DomUtil.create('div', 'leaflet-draw'),
			addedTopClass = false,
			topClassName = 'leaflet-draw-toolbar-top',
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
    this.myLayer = L.geoJSON().addTo(map);

    this.wktButton = L.DomUtil.get("wktButton");
    L.DomEvent.on(this.wktButton, "click", this.mapWKTString, this);

    map.on("draw:created", this.shapesToWKT, this);

    return container;
  },

  shapesToWKT: function(e){
    this.myLayer.clearLayers();
    this.options.edit['featureGroup'].clearLayers();

    this.options.edit['featureGroup'].addLayer(e.layer);
    let geoJson = e.layer.toGeoJSON();
    geoJson = geoJson['geometry'];

    this.wkt.read(JSON.stringify(geoJson));
    this.wktTextBox.value = this.wkt.write();
  },

  mapWKTString: function(e){
    this.myLayer.clearLayers();
    this.options.edit['featureGroup'].clearLayers();

    let wktValue = this.wktTextBox.value;

    this.wktTextBox.value = "";

    try {
      this.wkt.read(wktValue);
    }
    catch (err){
      alert("Invalid Well Known Text String");
      return;
    }

    let geoJson = this.wkt.toJson();

    let geojsonFeature = {
      "type": "Feature",
      "geometry": geoJson
    };

    this.myLayer.addData(geojsonFeature);
  }

});
  
