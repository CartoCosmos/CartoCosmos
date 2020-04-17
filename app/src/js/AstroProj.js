/**
 * @class AstroProj
 * @classdesc Helper class that stores projections for each target supported
 *              by the USGS.
 */
export default class AstroProj {
  /**
   * @function AstroProj.prototype.getStringAndCode
   * @description Returns the proj-string for a requested target and projection name.
   *
   * @param {String} name - Name of the projection.
   *
   * @return {Object} Object storing the proj-string and code
   *                  in the form: {'code': , 'string'}.
   */
  getStringAndCode(name, radii) {
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
      throw "No projection found for the projection [" + name + "] given.";
    }
  }
}
