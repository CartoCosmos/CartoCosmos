import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import marsLogo from "../../assets/img/marsLogo.png";

const useStyles = makeStyles({
  img: {
    width: 30,
    height: 30
  }
});

export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Typography variant="h5">{props.targetName}</Typography>
      </Grid>
      <Grid item xs={3}>
        <img className={classes.img} src={marsLogo} />
      </Grid>
      <Grid item xs={3}>
        <Typography varient="h6">Lon, Lat: </Typography>
      </Grid>
    </React.Fragment>
  );
}
