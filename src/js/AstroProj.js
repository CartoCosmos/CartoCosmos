let projectionDefs = {
  mars: [
    {
      name: "northpolar",
      code: "EPSG:32661",
      string:
        "+proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3396190 +units=m +no_defs"
    },
    {
      name: "southpolar",
      code: "EPSG:32761",
      string:
        "+proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=3396190 +b=3376200 +units=m +no_defs"
    },
    {
      name: "geodesic",
      code: "EPSG:4326",
      string: "+proj=longlat +a=3396190 +b=3396190 +no_defs"
    }
  ]
};

/*
 * @class AstroProj
 *
 * Helper class that stores projections for each target supported
 * by the USGS.
 */
class AstroProj {
  // @method getString(target: String, code: String): String
  // Returns the proj-string for a requested target given the proj-code.
  getString(target, code) {
    let projections = projectionDefs[target.toLowerCase()];
    for (let i = 0; i < projections.length; i++) {
      if (code == projections[i]["code"]) {
        return projections[i]["string"];
      }
    }
    console.log("No projection found for the target");
  }

  // @method getStringAndCode(target: String, name: String): [String, String]
  // Returns the proj-string for a requested target and projection name.
  getStringAndCode(target, name) {
    let projections = projectionDefs[target.toLowerCase()];
    for (let i = 0; i < projections.length; i++) {
      if (name.toLowerCase() == projections[i]["name"]) {
        return {
          code: projections[i]["code"],
          string: projections[i]["string"]
        };
      }
    }
    console.log("No projection found for the target");
  }
}
