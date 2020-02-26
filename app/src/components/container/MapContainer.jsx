import React, { Component } from "react";
import AstroMap from "../../js/AstroMap";
import Projection from "../../js/Projection";
import MousePosition from "../../js/MousePosition";
import "leaflet";

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFullScreenChange() {}

  componentDidMount() {
    let map = new AstroMap("map-container", this.props.target, {});
    new Projection().addTo(map);
    new MousePosition({
      numDigits: 2,
      targetPlanet: this.props.target
    }).addTo(map);

    map.on("fullscreenchange", this.handleFullScreenChange());
  }

  componentDidUpdate() {
    let oldContainer = document.getElementById("map-container");
    let parent = oldContainer.parentNode;
    let newContainer = document.createElement("div");
    parent.removeChild(oldContainer);
    newContainer.setAttribute("id", "map-container");
    parent.appendChild(newContainer);

    let map = new AstroMap("map-container", this.props.target, {});
    new Projection().addTo(map);
    new MousePosition({
      numDigits: 2,
      targetPlanet: this.props.target
    }).addTo(map);

    map.on("fullscreenchange", this.handleFullScreenChange());
  }

  render() {
    return (
      <div>
        <div id="map-container" />
      </div>
    );
  }
}
