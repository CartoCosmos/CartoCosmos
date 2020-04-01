import "jsdom-global/register";
import jsdom from "mocha-jsdom";
import AstroMap from "../src/js/AstroMap";
import { assert, expect } from "chai";

beforeEach(function() {
  // Setup map div
  document.body.innerHTML = '<div id="map"></div>';
});

afterEach(function() {
  // Setup map div
  document.body.innerHTML = "";
});

describe("AstroMap", function() {
  it("should instantiate an object and set defaults", function() {
    let target = "Mars";
    let testMap = new AstroMap("map", target, {});
    expect(testMap).to.be.an("Object");
    expect(testMap.target() == target);

    let mapOptions = testMap.options;
    expect(testMap.options.center == [0, 0]);
    expect(testMap.options.zoom == 1);
    expect(testMap.options.maxZoom == 8);
    expect(testMap.options.attributionControl == false);
    expect(testMap.options.fullScreenControl == true);
  });

  it("should instantiate a map with all caps target", function() {
    let target = "MARS";
    let testMap = new AstroMap("map", target);
    expect(testMap).to.be.an("Object");
    expect(testMap.target() == target);
  });

  it("should instantiate a map with all lowercase target", function() {
    let target = "mars";
    let testMap = new AstroMap("map", target);
    expect(testMap).to.be.an("Object");
    expect(testMap.target() == target);
  });

  // // Move JSON parsing to map
  // it("should throw an exception with an invalid target", function() {
  //   let testMap = new AstroMap("map", "invalidTarget");
  // });
});
