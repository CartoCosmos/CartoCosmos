import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import ConsoleContainer from "./ConsoleContainer.jsx";
import MapContainer from "./MapContainer.jsx";
import "proj4leaflet";
import "proj4";

export default function App() {
  return (
    <Paper elevation={10}>
      <ConsoleContainer />
      <MapContainer />
    </Paper>
  );
}
