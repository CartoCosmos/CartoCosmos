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

		for (var toolbarId in this._toolbars) {
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

     this.myLayer = L.geoJSON().addTo(map);

    this.wktButton = L.DomUtil.get("wktButton");
    L.DomEvent.on(this.wktButton, "click", this.mapWKTString, this);


    map.on("draw:created", this.shapesToWKT, this);

    return container;
  },

  shapesToWKT: function(e){
    this.myLayer.clearLayers();
    this.options.edit['featureGroup'].clearLayers();
    let wktTextBox = L.DomUtil.get("wktTextBox");
    let wkt = new Wkt.Wkt();

    this.options.edit['featureGroup'].addLayer(e.layer);
    let geoJson = e.layer.toGeoJSON();
    geoJson = geoJson['geometry'];

    wkt.read(JSON.stringify(geoJson));
    wktTextBox.value = wkt.write();
  },

  mapWKTString: function(e){
    this.myLayer.clearLayers();
    this.options.edit['featureGroup'].clearLayers();

    let wkt = new Wkt.Wkt();
    let wktTextBox = L.DomUtil.get("wktTextBox");
    let wktValue = wktTextBox.value;

    wktTextBox.value = "";

    try {
      wkt.read(wktValue);
    }
    catch (err){
      alert("Invalid Well Known Text String");
      return;
    }

    let geoJson = wkt.toJson();

    let geojsonFeature = {
      "type": "Feature",
      "geometry": geoJson
    };

    this.myLayer.addData(geojsonFeature);
  }

});
  
