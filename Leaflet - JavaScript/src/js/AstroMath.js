/** 
 * 
 * @class AstroMap 
 * 
 * 
 * A helper class that can be used by any mapping application, not just Leaflet, to calculate different 
 *  longitude and latitude domains and ranges for a specific target. 
 * It uses a JSON file in the background to store the targets and their associated radii.
 * 
 * 
 * @example
 * ```js
 * // initialize an instance of AstroMath with a target name string.
 * astroMath = new AstroMath("mars");
 * ```
 * */
class AstroMath {
  /**
   * Creates an instance of of AstroMath by taking in a target name and finds the 
   * dMajorRadius and dMinorRadius that corresponds to that specific target.
   * @param  { String } targetName - the name of the specific target.
   */
  constructor(targetName) {
    this.targetName = targetName;

    switch (this.targetName) {
      case "mars":
        this.dMajorRadius = 3396190.0;
        this.dMinorRadius = 3376200.0;
        break;
      case "moon":
        this.dMajorRadius = 1737400.0;
        this.dMinorRadius = 1737400.0;
        break;
      case "mercury":
        this.dMajorRadius = 2439400.0;
        this.dMinorRadius = 2439400.0;
        break;
      default:
        this.dMajorRadius = 0;
        this.dMinorRadius = 0;
        console.log("target not supported");
    }
  }
  /**
   * Converts degrees to radians.
   * @param  {double} degrees - The degree value that is going to be converted.
   * @return {double} The converted value in radians.
   */
  toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }
  /**
   * Converts radians to degrees
   * @param  {double} radians - The radian value that is going to be converted.
   * @return {double} The converted value in degrees.
   */
  toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }
  /**
   * Converts from planetOcentric latitude to planetOgrpahic Latitude based on a target's radii.
   * @param  {double} lat - The latitude value that is going to be converted
   * @return {double} The latitude converted into planetOgrpahic
   */
  latoPLanetOgraphic(lat) {
    let convertedLatitude = 0;
    convertedLatitude = this.toRadians(lat);
    convertedLatitude = Math.atan(
      (this.dMajorRadius / this.dMinorRadius) ** 2 * Math.tan(convertedLatitude)
    );
    convertedLatitude = this.toDegrees(convertedLatitude);

    return convertedLatitude;
  }
  /**
   * Converts from -180 to 180 longitude range to 0 to 360 longtitude range.
   * @param  {double} lng - The longitude value that is going to be converted
   * @param  {boolean} projection - The current projection of the map
   * @return {double} The converted longitude range.
   */
  lngTo360(lng, projection) {
    let convertedLng = lng;

    if (!lonTo180) {
      if (projection === "EPSG:4326") {
        convertedLng -= 180;
      }
      if (convertedLng < 0) {
        convertedLng += 360;
      }
    }
    return convertedLng;
  }

  /**
   * Converts the longitude domain from positive east to positive west.
   * @param  {double} lng - The longitude value that is going to be converted.
   * @param  {boolean} normalRange - True if the current range is -180 to 180, false otherwise.
   * @return {double} The longitude value converted to postive west.
   */
  domainToPositiveWest(lng, normalRange) {
    let convertedLng = lng;
    if(normalRange)
    {
      convertedLng *= -1;
    } else {
      convertedLng = Math.abs(convertedLng - 360);
    }

    return convertedLng;
  }
  /**
   * Wraps the longitude of the map.
   * @param  {double} lng - The longitude that needs to be wrapped.
   * @return {double} The longitude value thats wrapped. 
   */
  wrapLongitude (lng) {
    let convertedLng = lng;

    if (convertedLng < 0) {
      if (Math.floor(convertedLng/180)%2 == 0){
        convertedLng = 180 - (abs(convertedLng) % 180);
      } else {
        convertedLng = (convertedLng % 180) - 180;
      }
    } else {
      if (Math.floor(convertedLng/180)%2 == 0)
      {
        convertedLng = convertedLng % 180;
      } else {
        convertedLng = -180 + (abs(convertedLng) % 180);
      }
    }
    return convertedLng;
  }
}
