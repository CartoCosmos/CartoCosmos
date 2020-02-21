import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import marsLogo from "../../assets/img/marsLogo.png";

const useStyles = makeStyles({
  img: {
    width: 36,
    height: 36,
    margin: "auto"
  },
  grid: {
    width: "100%",
    maxHeight: 45
  },
  title: {
    color: "#000",
    fontWeight: 900,
    letterSpacing: "1.2rem"
  }
});

export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      justify="center"
      alignItems="center"
      className={classes.grid}
      xs
    >
      <Grid item>
        <Typography className={classes.title} variant="h4">{props.targetName}</Typography>
      </Grid>
    </Grid>
  );
}
