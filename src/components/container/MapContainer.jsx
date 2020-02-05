import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

export default function MapContainer(props) {
  return (
    <Container>
      <Paper>
        <div id="map-container" />
      </Paper>
    </Container>
  );
}
