import "jsdom-global/register";
import jsdom from "mocha-jsdom";
import AstroMap from "../src/js/AstroMap";
import MousePosition from "../src/js/MousePositionControl";
import { assert, expect } from "chai";

 beforeEach(function() {
   // Setup map div and GUI buttons
   document.body.innerHTML = '<div id="map"></div>';
   document.body.innerHTML += '<button id = "consoleLon180Btn"></button>';
   document.body.innerHTML += '<button id = "consoleLon360Btn"></button>';
   document.body.innerHTML += '<button id = "consoleLonEastBtn"></button>';
   document.body.innerHTML += '<button id = "consoleLonWestBtn"></button>';
   document.body.innerHTML += '<button id = "consoleLatTypeOcentric"></button>';
   document.body.innerHTML += '<button id = "consoleLatTypeOgraphic"></button>';
   document.body.innerHTML +='<div id = "lonCoordinateDisplay"></div>'
   document.body.innerHTML +='<div id = "latCoordinateDisplay"></div>'

 });

 afterEach(function() {
   // Setup map div
   document.body.innerHTML = "";
 });
 /*
 In order for test to run correctly you must comment out html and event code from _add function in MousePosition.
 */
 describe("MousePosition Added to AstroMap", function() {
   it("testMousePosition._map returns the map object if attached with no errors", function() {
     let target = "Mars";
     let testMap = new AstroMap("map", target, {});
     let testMousePosition = new MousePosition({
         numDigits: 3
      }).addTo(testMap);
     
     expect(testMousePosition._map).to.be.an("Object");
   });
 });