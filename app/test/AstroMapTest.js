import { expect } from "chai";
import "jsdom-global/register";
import L from "leaflet";

import AstroMap from "../src/js/AstroMap";

describe("AstroMap", function() {
  beforeEach(function() {
    // Setup map div
    document.body.innerHTML = '<div id="map"></div>';
  });

  afterEach(function() {
    // Clear map div
    document.body.innerHTML = "";
  });

  describe("#instantiate", function() {
    it("should instantiate an object and set defaults", function() {
      let target = "Mars";
      let testMap = new AstroMap("map", target, {});
      expect(testMap).to.be.an("Object");
      expect(testMap.target()).to.equal(target);

      let mapOptions = testMap.options;
      expect(testMap.options.center[0]).to.equal(0);
      expect(testMap.options.center[1]).to.equal(0);
      expect(testMap.options.zoom).to.equal(1);
      expect(testMap.options.maxZoom).to.equal(8);
      expect(testMap.options.attributionControl).to.equal(false);

      // Map should only have one layer at a time.
      let numLayers = 0;
      testMap.eachLayer(function() {
        numLayers++;
      });
      expect(numLayers).to.equal(1);
    });

    it("should instantiate a map with all caps target", function() {
      let target = "MARS";
      let testMap = new AstroMap("map", target);
      expect(testMap).to.be.an("Object");
      expect(testMap.target()).to.equal(target);
    });

    it("should instantiate a map with all lowercase target", function() {
      let target = "mars";
      let testMap = new AstroMap("map", target);
      expect(testMap).to.be.an("Object");
      expect(testMap.target()).to.equal(target);
    });

    it("should throw an exception with an invalid target", function() {
      expect(function() {
        new AstroMap("map", "invalidTarget");
      }).to.throw(
        "No entry in the JSON for [invalidTarget]. Cannot instantiate a map"
      );
    });
  });

  describe("#hasPolarProjections", function() {
    it("should have both north and south polar projections", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(testMap.hasNorthPolar()).to.equal(true);
      expect(testMap.hasSouthPolar()).to.equal(true);
    });

    it("should not have polar projections", function() {
      let testMap = new AstroMap("map", "Dione");
      expect(testMap.hasNorthPolar()).to.equal(false);
      expect(testMap.hasSouthPolar()).to.equal(false);
    });
  });

  describe("#changeProjection", function() {
    it("should change to a north polar projection and back", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(testMap.projection()).to.equal("EPSG:4326");

      testMap.changeProjection("northPolar", [90, 0]);
      expect(testMap.projection()).to.equal("EPSG:32661");

      testMap.changeProjection("cylindrical", [0, 0]);
      expect(testMap.projection()).to.equal("EPSG:4326");
    });

    it("should change to a south polar projection and back", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(testMap.projection()).to.equal("EPSG:4326");

      testMap.changeProjection("southPolar", [-90, 0]);
      expect(testMap.projection()).to.equal("EPSG:32761");

      testMap.changeProjection("cylindrical", [0, 0]);
      expect(testMap.projection()).to.equal("EPSG:4326");
    });

    it("should throw an error when trying to change to a projection not supported", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(function() {
        testMap.changeProjection("invalidProjection", [90, 0]);
      }).to.throw(
        "No projection found for the projection [invalidProjection] given."
      );
    });
  });

  describe("#target", function() {
    it("should return the name of the target", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(testMap.target()).to.equal("Mars");
    });
  });

  describe("#radii", function() {
    it("should return the radii of Mars", function() {
      let testMap = new AstroMap("map", "Mars");
      expect(testMap.radii()["a"]).to.equal(3396190);
      expect(testMap.radii()["c"]).to.equal(3376200);
    });

    it("should return the radii of Dione", function() {
      let testMap = new AstroMap("map", "Dione");
      expect(testMap.radii()["a"]).to.equal(562500);
      expect(testMap.radii()["c"]).to.equal(562500);
    });
  });

  describe("#layer", function() {
    it("should set the current layer of the map", function() {
      let testMap = new AstroMap("map", "Mars");
      let testLayer = L.tileLayer.wms("", {
        layers: "testLayer"
      });
      testMap.setCurrentLayer(testLayer);
      expect(testMap.currentLayer()["options"]["layers"]).to.equal("testLayer");
    });

    it("should set the current layer of the map to a north polar map", function() {
      let testMap = new AstroMap("map", "Mars");
      testMap.loadLayerCollection("northPolar");

      // Only 1 layer is added to the map at a time
      testMap.eachLayer(function(layer) {
        expect(layer["options"]["layers"]).to.equal("MDIM21_north");
      });
    });
  });

  describe("#parseJSON", function() {
    it("should return the number of base layers stored in the JSON", function() {
      let testMap = new AstroMap("map", "Mars");
      let layers = testMap.parseJSON("north-polar stereographic");
      expect(Object.keys(layers["base"]).length).to.equal(3);
    });
  });
});
