var marsMap = new L.Map.AstroMap("map", "Mars", {});

var projectionControl = new L.Control.Projection();
projectionControl.addTo(marsMap);

var newContainer = document.getElementById("consoleProjectionButtons");
// newContainer.appendChild(projectionControl.getContainer()); // works

var northPoleProjection = document.getElementById("projectionNorthPole");
var southPoleProjection = document.getElementById("projectionSouthPole");
var cylindricalProjection = document.getElementById("projectionCylindrical");

northPoleProjection.onclick = function() {
  northPoleProjection.src = "./images/north-pole-hot.png";
  southPoleProjection.src = "./images/south-pole.png";
  cylindricalProjection.src = "./images/cylindrical.png";
};

southPoleProjection.onclick = function() {
  northPoleProjection.src = "./images/north-pole.png";
  southPoleProjection.src = "./images/south-pole-hot.png";
  cylindricalProjection.src = "./images/cylindrical.png";
};

cylindricalProjection.onclick = function() {
  northPoleProjection.src = "./images/north-pole.png";
  southPoleProjection.src = "./images/south-pole.png";
  cylindricalProjection.src = "./images/cylindrical-hot.png";
};
