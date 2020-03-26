import { MY_JSON_MAPS } from "./layers";
import "./MousePosition";

/**
 * @class AstroMath
 * @classdesc A helper class that can be used by any mapping application, not just Leaflet, to calculate different
 *              longitude and latitude domains and ranges for a specific target.
 *              It uses a JSON file in the background to store the targets and their associated radii.
 * @param  {String} targetName - the name of the specific target.
 */
export default class AstroMath {
  constructor(targetName) {
    this.targetName = targetName;

    let targets = MY_JSON_MAPS["targets"];
    for (let i = 0; i < targets.length; i++) {
      let currentTarget = targets[i];

      if (
        currentTarget["name"].toLowerCase() == this.targetName.toLowerCase()
      ) {
        this.dMajorRadius = parseFloat(currentTarget["aaxisradius"] * 1000);
        this.dMinorRadius = parseFloat(currentTarget["caxisradius"] * 1000);
        break;
      }
    }
  }

  /**
   * @function AstroMath.prototype.getMajorRadius
   * @description Returns the Major radius for the specific target.
   *
   * @return {double} The Major radius value.
   */
  getMajorRadius() {
    return this.dMajorRadius;
  }

  /**
   * @function AstroMath.prototype.getMinorRadius
   * @description Returns the Minor radius for the specific target.
   *
   * @return {double} The Minor radius value.
   */
  getMinorRadius() {
    return this.dMinorRadius;
  }

  /**
   * @function AstroMath.prototype.toRadians
   * @description Converts degrees to radians.
   *
   * @param  {double} degrees - The degree value that is going to be converted.
   *
   * @return {double} The converted value in radians.
   */
  toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  /**
   * @function AstroMath.prototype.toDegrees
   * @description Converts radians to degrees
   *
   * @param  {double} radians - The radian value that is going to be converted.
   *
   * @return {double} The converted value in degrees.
   */
  toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
  /**
   * @function AstroMath.prototype.latToPlanetOgraphic
   * @description Converts from planetOcentric latitude to planetOgrpahic Latitude
   *              based on a target's radii.
   *
   * @param  {double} lat - The latitude value that is going to be converted
   *
   * @return {double} The latitude converted into planetOgrpahic
   */
  latToPlanetOgraphic(lat) {
    let convertedLatitude = 0;
    convertedLatitude = this.toRadians(lat);
    convertedLatitude = Math.atan(
      (this.dMajorRadius / this.dMinorRadius) ** 2 * Math.tan(convertedLatitude)
    );
    convertedLatitude = this.toDegrees(convertedLatitude);

    return convertedLatitude;
  }
  /**
   * @function AstroMath.prototype.lonTo360
   * @description Converts from -180 to 180 longitude range to 0 to 360 longtitude range.
   *
   * @param  {double} lng - The longitude value that is going to be converted
   *
   * @param  {boolean} projection - The current projection of the map
   *
   * @return {double} The converted longitude range.
   */
  lonTo360(lon, projection) {
    let convertedLon = lon;

    if (projection === "EPSG:4326") {
      convertedLon -= 180;
    }
    if (convertedLon < 0) {
      convertedLon += 180;
    }
    else
    {
      convertedLon += 180;
    }

    return convertedLon;
  }

  /**
   * @function AstroMath.prototype.domainToPositiveWest
   * @description Converts the longitude domain from positive east to positive west.
   *
   * @param  {double} lng - The longitude value that is going to be converted.
   *
   * @param  {boolean} normalRange - True if the current range is -180 to 180, false otherwise.
   *
   * @return {double} The longitude value converted to postive west.
   */
  domainToPositiveWest(lng, normalRange) {
    let convertedLng = lng;
    if (normalRange) {
      convertedLng *= -1;
    } else {
      convertedLng = Math.abs(convertedLng - 360);
    }

    return convertedLng;
  }
  /**
   * @function AstroMath.prototype.wrapLongitude
   * @description Wraps the longitude of the map.
   *
   * @param  {double} lng - The longitude that needs to be wrapped.
   *
   * @return {double} The longitude value thats wrapped.
   */
  wrapLongitude(lng) {
    let convertedLng = lng;

    if (convertedLng < 0) {
      if (Math.floor(convertedLng / 180) % 2 == 0) {
        convertedLng = 180 - (abs(convertedLng) % 180);
      } else {
        convertedLng = (convertedLng % 180) - 180;
      }
    } else {
      if (Math.floor(convertedLng / 180) % 2 == 0) {
        convertedLng = convertedLng % 180;
      } else {
        convertedLng = -180 + (abs(convertedLng) % 180);
      }
    }
    return convertedLng;
  }
}
