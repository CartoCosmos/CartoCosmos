import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import marsLogo from "../../assets/img/marsLogo.png";

const useStyles = makeStyles({
  img: {
    width: 36,
    height: 36,
    margin: "auto",
    float: "left"
  },
  title: {
    float: "right"
  },
  subtitle: {
    fontSize: "1.05rem"
  },
  grid: {
    width: "inherit",
    height: "75%",
    margin: "auto"
  }
});

export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      justify="space-between"
      direction="column"
      className={classes.grid}
      xs={2}
    >
      <Grid item>
        <img className={classes.img} src={marsLogo} />
        <Typography className={classes.title} variant="h4">
          {props.targetName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.subtitle} variant="subtitle1">
          Lon, Lat:{" "}
        </Typography>
      </Grid>
    </Grid>
  );
}
