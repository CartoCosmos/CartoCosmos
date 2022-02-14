import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Zoom from "@mui/material/Zoom";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import StyledTooltip from "./StyledTooltip.jsx";

/**
 * Controls css styling for this component using js to css
 */
let css = {
  grid: {
    height: "100%",
    maxHeight: 60,
    width: 200
  },
  title: {
    color: "#343a40",
    lineHeight: "1rem",
    paddingBottom: 1,
    fontWeight: 600
  },
  coords: {
    color: "#343a40",
    lineHeight: "1.4rem",
    fontSize: "13px"
  },
  container: {
    display: "flex",
    flexWrap: "noWrap",
    width: 170,
    height: 40,
    marginTop: 5,
    verticalAlign: "middle",
    "& > *": {
      margin: 0,
      padding: 0,
      width: "50%",
      height: "100%",
      maxHeight: "3rem",
      maxWidth: "50%",
      backgroundColor: "#f8f9fa",
      textAlign: "center"
    }
  }
};

/**
 * Main component that displays the container for the coordinate display
 * and controls styling.
 *
 * @component
 */
export default function ConsoleCoordinates() {

  return (
    <StyledTooltip
      title={
        <Typography variant="subtitle1">
          Displays the longitude and latitude of the area on the map
          underneath the cursor.
        </Typography>
      }
      enterDelay={800}
      leaveDelay={0}
      arrow
      TransitionComponent={Zoom}
    >
      <div id="coordContainer" style={css.container}>
        <Paper
          style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          variant="outlined"
        >
          <Typography variant="overline" sx={css.title}>
            Longitude
          </Typography>
          <Divider variant="fullWidth" />
          <Typography
            noWrap
            sx={css.coords}
            id="lonCoordinateDisplay"
            variant="subtitle2"
          />
        </Paper>
        <Paper
          style={{
            borderLeft: 0,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          }}
          variant="outlined"
        >
          <Typography variant="overline" sx={css.title}>
            Latitude
          </Typography>
          <Divider variant="fullWidth" />
          <Typography
            noWrap
            sx={css.coords}
            id="latCoordinateDisplay"
            variant="subtitle2"
          />
        </Paper>
      </div>
    </StyledTooltip>
  );
}
