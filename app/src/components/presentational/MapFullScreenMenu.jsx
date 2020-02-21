import React, { Component } from "react";
import "react-leaflet";
import { Sidebar, Tab } from "react-leaflet-sidebarv2";

export default class MapFullScreenMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      selected: "home"
    };
  }

  onClose() {
    this.setState({ collapsed: true });
  }

  onOpen(id) {
    this.setState({
      collapsed: false,
      selected: id
    });
  }

  render() {
    return (
      <div>
        <Sidebar
          id="sidebar"
          collapsed={this.state.collapsed}
          selected={this.state.selected}
          onOpen={this.onOpen.bind(this)}
          onClose={this.onClose.bind(this)}
        >
          <Tab id="home" header="Home" icon="fa fa-home">
            <p>No place like home!</p>
          </Tab>
          <Tab id="settings" header="Settings" icon="fa fa-cog" anchor="bottom">
            <p>Settings dialogue.</p>
          </Tab>
        </Sidebar>
      </div>
    );
  }
}
