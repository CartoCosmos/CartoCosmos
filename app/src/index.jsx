import React from "react";
import ReactDOM from "react-dom";
import "leaflet";
import "proj4leaflet";
import "proj4";
import "./styles.css";
import "./js/AstroMath";
import App from "./components/App.jsx";

ReactDOM.render(<App />, document.getElementById("map"));
