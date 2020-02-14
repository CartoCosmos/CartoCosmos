import { MY_JSON_MAPS } from "./layers";

/*
 * @class AstroProj
 *
 * Helper class that stores projections for each target supported
 * by the USGS.
 */
export default class AstroProj {
  getRadii(target) {
    var targets = MY_JSON_MAPS["targets"];

    let radii = {};
    for (let i = 0; i < targets.length; i++) {
      let currentTarget = targets[i];
      if (currentTarget["name"].toLowerCase() == target.toLowerCase()) {
        radii["a"] = parseFloat(currentTarget["aaxisradius"] * 1000);
        radii["c"] = parseFloat(currentTarget["caxisradius"] * 1000);
        break;
      }
    }
    return radii;
  }

  // @method getStringAndCode(target: String, name: String): [String, String]
  // Returns the proj-string for a requested target and projection name.
  getStringAndCode(target, name) {
    let radii = this.getRadii(target);

    if (name == "northPolar") {
      return {
        code: "EPSG:32661",
        string:
          "+proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=${radii['a']} +b=${radii['c']} +units=m +no_defs"
      };
    } else if (name == "southPolar") {
      return {
        code: "EPSG:32761",
        string:
          "+proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=${radii['a']} +b=${radii['c']} +units=m +no_defs"
      };
    } else if (name == "cylindrical") {
      return {
        code: "EPSG:4326",
        string: "+proj=longlat +a=${radii['a']} +b=${radii['c']} +no_defs"
      };
    } else {
      console.log("No projection found for the target and name given.");
    }
  }
}
