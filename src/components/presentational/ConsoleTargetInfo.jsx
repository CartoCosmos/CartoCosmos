import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import marsLogo from "../../assets/img/marsLogo.png";

const useStyles = makeStyles({
  img: {
    width: 30,
    height: 30,
    float: "left"
  },
  title: {
    float: "right"
  },
  container: {
    paddingTop: 5
  },
  grid: {
    height: 100,
    width: "100%",
    margin: "auto"
  },
  h6: {
    paddingTop: 5
  }
});

export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.grid} item xs={6}>
        <div className={classes.container}>
          <img className={classes.img} src={marsLogo} />
          <Typography className={classes.title} variant="h5">
            {props.targetName}
          </Typography>
        </div>
      </Grid>
      <Grid className={classes.grid} item xs={6}>
        <Typography className={classes.h6} variant="subtitle1">
          Lon, Lat:{" "}
        </Typography>
      </Grid>
    </React.Fragment>
  );
}
