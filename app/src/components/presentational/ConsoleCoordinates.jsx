import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  grid: {
    width: "100%",
    height: "100%",
    maxHeight: 60
  },
  title: {}
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
