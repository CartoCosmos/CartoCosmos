import React from "react";
import ReactDOM from "react-dom";
import "leaflet";
import "./styles.css";
import ConsoleContainer from "./components/container/ConsoleContainer.jsx";
import "./js/AstroMap";

ReactDOM.render(<ConsoleContainer />, document.getElementById("console"));
//ReactDOM.render(<MapContainer />, document.getElementById("map"));
