import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    maxHeight: 60
  },
  title: {}
});

const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

export default function ConsoleCoordinates(props) {
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
        <Typography
          noWrap
          className={classes.title}
          id="coordinateDisplay"
          variant="subtitle1"
        />
      </Grid>
    </Grid>
  );
}
