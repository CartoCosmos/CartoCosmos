import { expect } from "chai";
import "jsdom-global/register";
import L from "leaflet";

import ProjectionControl from "../src/js/ProjectionControl";
import AstroMap from "../src/js/AstroMap";

describe("ProjectionControl", function() {
  let testMap;
  let northPoleButton;
  let southPoleButton;
  let cylindricalButton;
  let testControl;

  beforeEach(function() {
    testMap = new AstroMap(document.createElement("div"), "Mars", {});
    northPoleButton = document.createElement("div");
    northPoleButton.id = "projectionNorthPole";
    document.body.appendChild(northPoleButton);

    southPoleButton = document.createElement("div");
    southPoleButton.id = "projectionSouthPole";
    document.body.appendChild(southPoleButton);

    cylindricalButton = document.createElement("div");
    cylindricalButton.id = "projectionCylindrical";
    document.body.appendChild(cylindricalButton);

    testControl = new ProjectionControl();
  });

  afterEach(function() {
    northPoleButton.remove();
    southPoleButton.remove();
    cylindricalButton.remove();
    testControl.remove();
    testMap.remove();
  });

  it("should add the control to the map", function() {
    let returnMap = testMap.addControl(testControl);
    // Since we do not add the projection buttons to a container and return that container,
    // the only way to test if a control was added to a map correctly is if the map is returned.
    expect(returnMap).to.equal(testMap);
  });

  it("should change the projection of the map to north polar and back to cylindrical", function() {
    testMap.addControl(testControl);
    testControl.loadNorthPolar();
    expect(testMap.projection()).to.equal("EPSG:32661");

    testControl.loadCylindrical();
    expect(testMap.projection()).to.equal("EPSG:4326");
  });

  it("should change the projection of the map to south polar", function() {
    testMap.addControl(testControl);
    testControl.loadSouthPolar();
    expect(testMap.projection()).to.equal("EPSG:32761");

    testControl.loadCylindrical();
    expect(testMap.projection()).to.equal("EPSG:4326");
  });

  it("should change the projection of the map to north polar, then so south polar", function() {
    testMap.addControl(testControl);

    testControl.loadNorthPolar();
    expect(testMap.projection()).to.equal("EPSG:32661");

    testControl.loadSouthPolar();
    expect(testMap.projection()).to.equal("EPSG:32761");
  });

  it("should change the projection of the map to south polar, then so north polar", function() {
    testMap.addControl(testControl);

    testControl.loadSouthPolar();
    expect(testMap.projection()).to.equal("EPSG:32761");

    testControl.loadNorthPolar();
    expect(testMap.projection()).to.equal("EPSG:32661");
  });
});
