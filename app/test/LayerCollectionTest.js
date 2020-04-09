import "jsdom-global/register";
import jsdom from "mocha-jsdom";
import LayerCollection from "../src/js/LayerCollection";
import { expect } from "chai";

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
});
