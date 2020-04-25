import React, { Component } from "react";
import AstroMap from "../../js/AstroMap";
import AstroControlManager from "../../js/AstroControlManager";

/**
 * Component that uses back end JS files to invoke and display the
 * map. The container handles update events and is the root element
 * for the map.
 *
 *
 * @class MapContainer
 * @extends {Component}
 */
export default class MapContainer extends Component {
  /**
   *
   * @param {*} props target - target body name
   */
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Invoked when the component is successfully mounted to the DOM, then
   * handles all of the map intialization and creation.
   */
  componentDidMount() {
    let map = new AstroMap("map-container", this.props.target, {});
    let controlManager = new AstroControlManager(map);
    controlManager.addTo(map);
  }

  /**
   * Invoked after the component's state has changed when the
   * target selector passes down a new target name from props.
   */
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
    let controlManager = new AstroControlManager(map);
    controlManager.addTo(map);
  }

  render() {
    return (
      <div>
        <div id="map-container" />
      </div>
    );
  }
}
