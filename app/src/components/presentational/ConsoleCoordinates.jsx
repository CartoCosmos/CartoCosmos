import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    maxHeight: 60
  }
});

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
        <Typography noWrap id="coordinateDisplay" variant="subtitle1">
          (-----, -----)
        </Typography>
      </Grid>
    </Grid>
  );
}
