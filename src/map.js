// var L.Map.PlanetaryMap = L.Map.extend({

//     initialize: function(target, projCode) {
//         this.target = target;
//         this.projCode = projCode;
//         this.projection = null;
//     },

// });

// require("leaflet");
// require("proj4leaflet");

class PlanetaryMap {
  constructor(target, projCode) {
    this.target = target;
    this.projCode = projection;
    this.projection = null;
    this.map = null;
    var layers = {
      base: [],
      overlays: [],
      wfs: []
    };
    // this.parseWebAtlas();
    this.createMap();
  }

  createMap(projName) {
    document.getElementById("MarsMap").innerHTML = "<div id='map'></div>";

    // var projection;
    // var center;
    // if(projName == "north-polar stereographic")
    // {
    //     projection = northStere;
    //     center = [90, 0];
    // }
    // else if(projName == "south-polar stereographic")
    // {
    //     projection = southStere;
    //     center = [-90, 0];
    // }
    // else
    // {
    //     projection = L.CRS.EPSG4326;
    //     // projection = geodesic;
    //     center = [0, 0];
    // }

    this.map = L.map("map", {
      center: [0, 0], // Leaflet uses lat lon order
      zoom: 1,
      maxZoom: 8,
      crs: L.CRS.EPSG4326
    });

    // console.log(map);
    // parseJSON(projName);

    // proj = projName;

    scaleControl = L.control.scale({
      imperial: false
    });
    scaleControl.addTo(this.map);

    // // By default, EPSG:4326 does -180 to 180
    // if(proj == "cylindrical") {
    // lonTo180 = false;
    // }
    // // By default, polar projections do 0 to 360
    // else {
    //     lonTo180 = false;
    // }

    // map.addEventListener('mousemove', function(event)
    // {
    //     return latLonSwitcher(event);
    // });
  }
}
