import { expect } from "chai";
import "jsdom-global/register";
import L from "leaflet";

import AstroDrawControl from "../src/js/AstroDrawControl";
import AstroMap from "../src/js/AstroMap";

describe("AstroDrawControl", function() {
  let testMap;
  let wktTextBox;
  let wktButton;
  let testControl;
  let drawnItems;

  beforeEach(function() {
    testMap = new AstroMap(document.createElement("div"), "Mars", {});
    wktTextBox = document.createElement("div");
    wktTextBox.id = "wktTextBox";
    document.body.appendChild(wktTextBox);

    wktButton = document.createElement("div");
    wktButton.id = "wktButton";
    document.body.appendChild(wktButton);

    drawnItems = new L.FeatureGroup();
    testMap.addLayer(drawnItems);

    testControl = new AstroDrawControl({
      edit: {
        featureGroup: drawnItems,
      },
    });
  });

  afterEach(function() {
    wktTextBox.remove();
    wktButton.remove();
    testControl.remove();
    testMap.remove();
  });

  it("should add the control to the map", function() {
    let returnMap = testMap.addControl(testControl);
    expect(returnMap).to.equal(testMap);
  });
});
