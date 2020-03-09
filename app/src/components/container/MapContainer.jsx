import React, { Component } from "react";
import AstroMap from "../../js/AstroMap";
import Projection from "../../js/Projection";
import MousePosition from "../../js/MousePosition";
import Draw from "../../js/Draw";
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
      numDigits: 2
    }).addTo(map);

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    
    let drawControl = new Draw({
      draw: {
        circle: false,
        marker: false,
        circlemarker: false
    },
      edit: {
        featureGroup: drawnItems
      },
      targetMap: map
    }).addTo(map);

    new L.Control.Scale({ imperial: false }).addTo(map);
    map.on("fullscreenchange", this.handleFullScreenChange());
  }

  componentDidUpdate() {
    // remove old map container and append new container to its parent
    let oldContainer = document.getElementById("map-container");
    let parent = oldContainer.parentNode;
    let newContainer = document.createElement("div");
    parent.removeChild(oldContainer);
    newContainer.setAttribute("id", "map-container");
    parent.appendChild(newContainer);

    // remove disabled classes from projection buttons so that the css is reset to default
    document.getElementById("projectionNorthPole").classList.remove("disabled");
    document
      .getElementById("projectionCylindrical")
      .classList.remove("disabled");
    document.getElementById("projectionSouthPole").classList.remove("disabled");

    // create new map with updated target
    let map = new AstroMap("map-container", this.props.target, {});
    new Projection().addTo(map);
    new MousePosition({
      numDigits: 2,
      targetPlanet: this.props.target
    }).addTo(map);

    let drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    
    let drawControl = new Draw({
      draw: {
        circle: false,
        marker: false,
        circlemarker: false
    },
      edit: {
        featureGroup: drawnItems
      },
      targetMap: map
    }).addTo(map);

    new L.Control.Scale({ imperial: false }).addTo(map);
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
