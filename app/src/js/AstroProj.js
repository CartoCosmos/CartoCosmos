import { MY_JSON_MAPS } from "./layers";

/**
 * @class AstroProj
 * @classdesc Helper class that stores projections for each target supported
 *              by the USGS.
 */
export default class AstroProj {
  /**
   * @function AstroProj.prototype.getRadii
   * @description Finds the a and c radii of a given target.
   *
   * @param {String} target - Name of the target.
   *
   * @return {Object} Radii Object in form: {'a': , 'c': }.
   */
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

  /**
   * @function AstroProj.prototype.getStringAndCode
   * @description Returns the proj-string for a requested target and projection name.
   *
   * @param {String} target - Name of the target.
   *
   * @param {String} name - Name of the projection.
   *
   * @return {Object} Object storing the proj-string and code
   *                  in the form: {'code': , 'string'}.
   */
  getStringAndCode(target, name) {
    let radii = this.getRadii(target);

    if (name == "northPolar") {
      return {
        code: "EPSG:32661",
        string:
          "+proj=stere +lat_0=90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=" +
          radii["a"] +
          " +b=" +
          radii["c"] +
          " +units=m +no_defs"
      };
    } else if (name == "southPolar") {
      return {
        code: "EPSG:32761",
        string:
          "+proj=stere +lat_0=-90 +lon_0=0 +k=1 +x_0=0 +y_0=0 +a=" +
          radii["a"] +
          " +b=" +
          radii["c"] +
          " +units=m +no_defs"
      };
    } else if (name == "cylindrical") {
      return {
        code: "EPSG:4326",
        string:
          "+proj=longlat +a=" + radii["a"] + " +b=" + radii["c"] + " +no_defs"
      };
    } else {
      console.log("No projection found for the target and name given.");
    }
  }
}
