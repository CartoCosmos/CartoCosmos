import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    maxHeight: 60
  },
  title: {}
});

/**
 * Custom Component that uses Tooltip with modified css styling
 */
const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

/**
 * Main component that displays the container for the coordinate display
 * and controls styling.
 *
 * @component
 */
export default function ConsoleCoordinates() {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.grid}
      justify="flex-end"
      alignItems="center"
      item
      xs={2}
    >
      <Grid item xs>
        <StyledTooltip
          title={
            <Typography variant="subtitle1">
              Displays coordinates in the form: (Lon, Lat).
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          arrow
          TransitionComponent={Zoom}
        >
          <Typography
            noWrap
            className={classes.title}
            id="coordinateDisplay"
            variant="subtitle1"
          />
        </StyledTooltip>
      </Grid>
    </Grid>
  );
}
