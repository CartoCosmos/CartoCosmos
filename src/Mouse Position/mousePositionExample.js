mouseControl = L.astroMousePosition({
  numDigits: 2,
  prefix: "Lat Lon: ",
  targetPlanet: "mars"
  });
mouseControl.addTo(map);