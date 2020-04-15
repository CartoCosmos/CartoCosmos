import { expect } from "chai";
import "jsdom-global/register";
import L from "leaflet";

import AstroMap from "../src/js/AstroMap";
import LayerCollection from "../src/js/LayerCollection";

describe("LayerCollection", function() {
  it("should instantiate an object and create 1 base layer", function() {
    let layerInfo = {
      base: [
        {
          displayname: "test layer",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name",
          primary: "true"
        }
      ],
      overlays: []
    };

    let testLayerCol = new LayerCollection("cylindrical", layerInfo);
    expect(testLayerCol).to.be.an("Object");
    expect(testLayerCol.isEmpty()).to.equal(false);

    let wmsLayer = testLayerCol.baseLayers()["test layer"];

    expect(wmsLayer["options"]["layers"]).to.equal("layer name");
    expect(wmsLayer["_url"]).to.equal(
      "https://planetarymaps.usgs.gov/cgi-bin/mapserv?map=/path/to/map.map"
    );
    expect(wmsLayer["wmsParams"]["layers"]).to.equal("layer name");
  });

  it("should instantiate an object and create 1 base layer and overlay", function() {
    let layerInfo = {
      base: [
        {
          displayname: "test base layer",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name",
          primary: "true"
        }
      ],
      overlays: [
        {
          displayname: "test overlay",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name"
        }
      ]
    };

    let testLayerCol = new LayerCollection("cylindrical", layerInfo);
    expect(testLayerCol).to.be.an("Object");
    expect(testLayerCol.isEmpty()).to.equal(false);

    let wmsBaseLayer = testLayerCol.baseLayers()["test base layer"];
    expect(wmsBaseLayer["options"]["layers"]).to.equal("layer name");
    expect(wmsBaseLayer["_url"]).to.equal(
      "https://planetarymaps.usgs.gov/cgi-bin/mapserv?map=/path/to/map.map"
    );
    expect(wmsBaseLayer["wmsParams"]["layers"]).to.equal("layer name");

    let wmsOverlay = testLayerCol.overlays()["test overlay"];
    expect(wmsOverlay["options"]["layers"]).to.equal("layer name");
    expect(wmsOverlay["_url"]).to.equal(
      "https://planetarymaps.usgs.gov/cgi-bin/mapserv?map=/path/to/map.map"
    );
    expect(wmsOverlay["wmsParams"]["layers"]).to.equal("layer name");
  });

  it("should throw an exception with no base layers.", function() {
    let layerInfo = {
      base: [],
      overlays: [
        {
          displayname: "test overlay",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name"
        }
      ]
    };

    expect(function() {
      new LayerCollection("cylindrical", layerInfo);
    }).to.throw("No base layers created. At least one base layer is needed.");
  });

  it("should add test layers to an AstroMap", function() {
    let layerInfo = {
      base: [
        {
          displayname: "default layer",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "default layer name",
          primary: "true"
        },
        {
          displayname: "test layer",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name",
          primary: "false"
        }
      ],
      overlays: [
        {
          displayname: "test overlay",
          url: "https://planetarymaps.usgs.gov/cgi-bin/mapserv",
          map: "/path/to/map.map",
          layer: "layer name"
        }
      ]
    };

    let testLayerCol = new LayerCollection("cylindrical", layerInfo);
    let testMap = new AstroMap(document.createElement("div"), "Mars", {});
    testLayerCol.addTo(testMap);

    // Only 1 layer, the currentLayer, is added to the map at a time
    expect(testMap.currentLayer()).to.equal(
      testLayerCol.baseLayers()["default layer"]
    );
    testMap.eachLayer(function(layer) {
      expect(layer).to.equal(testLayerCol.baseLayers()["default layer"]);
    });

    // The rest of the layers get added to a static LayerControl,
    // so make sure they got added to it.
    expect(L.LayerCollection.layerControl["_layers"][0]["name"]).to.equal(
      "default layer"
    );
    expect(L.LayerCollection.layerControl["_layers"][1]["name"]).to.equal(
      "test layer"
    );
    expect(L.LayerCollection.layerControl["_layers"][2]["name"]).to.equal(
      "test overlay"
    );

    testMap.remove();
  });
});
