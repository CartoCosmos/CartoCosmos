import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AstroMap from "./js/AstroMap.js";
import Projection from "./js/Projection.js";
import ConsoleContainer from "./components/container/ConsoleContainer.jsx";
import "leaflet";
import "proj4leaflet";
import "proj4";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let map = new AstroMap("map-container", "mars", {});
    let projectionControl = new Projection();
    projectionControl.addTo(map);

    let scaleControl = new L.Control.Scale({ imperial: false });
    scaleControl.addTo(map);
  }

  render() {
    return (
      <Paper elevation={10}>
        <ConsoleContainer />
        <div id="map-container" />
      </Paper>
    );
  }
}
