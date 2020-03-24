import React from "react";
import ReactDOM from "react-dom";
import App from "./components/container/App.jsx";
import "proj4";
import "proj4leaflet";
import "./styles.css";
import "leaflet";

ReactDOM.render(<App />, document.getElementById("map"));
