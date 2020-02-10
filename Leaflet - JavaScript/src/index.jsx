import React from "react";
import ReactDOM from "react-dom";
import "leaflet";
import "proj4leaflet";
import "proj4";
import "./styles.css";
import App from "./App.jsx";

ReactDOM.render(<App />, document.getElementById("map"));
//document.getElementById("projectionCylindrical").focus();
