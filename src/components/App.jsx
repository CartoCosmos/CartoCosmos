import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AstroMap from "../js/AstroMap.js";
import Projection from "../js/Projection.js";
import ConsoleContainer from "./container/ConsoleContainer.jsx";
import "leaflet";
import "proj4leaflet";
import "proj4";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let map = new AstroMap("map-container", "Mars", {});
    let projectionControl = new Projection();
    projectionControl.addTo(map);
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
