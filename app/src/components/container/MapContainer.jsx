import React, { Component } from "react";
import AstroMap from "../../js/AstroMap";
import Projection from "../../js/Projection";
import MousePosition from "../../js/MousePosition";
//import "leaflet-sidebar-v2";
//import "../assets/fontawesome/all.js";
import "leaflet";

export default class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFullScreenChange() {}

  componentDidMount() {
    let map = new AstroMap("map-container", "Mars", {});
    new Projection().addTo(map);
    new MousePosition({
      numDigits: 2,
      targetPlanet: "mars"
    }).addTo(map);
    /* new L.Control.sidebar({
      container: "fs-menu-container"
    }).addTo(map); */

    map.on("fullscreenchange", this.handleFullScreenChange());

    /* let panelContent = {
      id: "home",
      tab: '<i class="fa fa-home"></i>',
      title: "Your Profile",
      position: "bottom" //
    };

    let FullScreenMenu = L.control
      .sidebar({
        container: "fs-menu-container"
      })
      .addPanel(panelContent)
      .addTo(map);
      */
  }

  render() {
    return (
      <div>
        <div id="map-container" />
      </div>
    )
  }
}
