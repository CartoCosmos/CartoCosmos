class AstroMath {
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
        console.log("target not supported");
    }
  }

  toRadians(degrees) {
    return (degrees * Math.PI) / 180;
  }

  toDegrees(radians) {
    return (radians * 180) / Math.PI;
  }

  latLonSwitcher(lat, lng, lonTo180, planetocentric, postiveEast, projection) {
    let convertedLatitude = 0;
    let convertedLng = lng;
    let convertedLat = lat;
    let proj = "";

    if (projection === "EPSG:4326") {
      proj = "cylindrical";
    } else {
      proj = "";
    }

    if (!lonTo180) {
      if (proj === "cylindrical") {
        convertedLng -= 180;
      }
      if (convertedLng < 0) {
        convertedLng += 360;
      }
    }

    if (!postiveEast) {
      if (lonTo180) {
        convertedLng *= -1;
      } else {
        convertedLng = Math.abs(convertedLng - 360);
      }
    }

    if (!planetocentric) {
      convertedLatitude = this.toRadians(convertedLat);
      convertedLatitude = Math.atan(
        (this.dMajorRadius / this.dMinorRadius) ** 2 *
          Math.tan(convertedLatitude)
      );
      convertedLatitude = this.toDegrees(convertedLatitude);

      convertedLat = convertedLatitude;
    }
    return [convertedLat, convertedLng];
  }
}
