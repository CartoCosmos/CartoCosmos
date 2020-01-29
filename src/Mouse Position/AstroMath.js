class AstroMath
{
  constructor()
  {}

  toRadians(degrees)
  {
    return degrees * Math.PI / 180;
  }

  toDegrees(radians)
  {
    return radians * 180 / Math.PI;
  }

  latLonSwitcher(lat, lng, lonTo180, planetocentric, postiveEast, dMajorRadius, dMinorRadius)
  {
    var convertedLatitude = 0;
    var proj = "cylindrical";

    if (!lonTo180)
    {
      if(proj == "cylindrical") {
        lng -= 180;
      }
      if(lng < 0) {
        lng += 360;
      }
    }

    if(!postiveEast)
    {
      if(lonTo180)
      {
        lng *= -1;
      }
      else
      {
        lng = Math.abs(lng - 360);
      }
    }

    if(!planetocentric)
    {
      convertedLatitude = this.toRadians(lat);
      convertedLatitude = Math.atan(((dMajorRadius / dMinorRadius)**2) * 
                                          (Math.tan(convertedLatitude)));
      convertedLatitude = this.toDegrees(convertedLatitude);

      lat = convertedLatitude;
    }
    return [lat,lng]
  }
}


