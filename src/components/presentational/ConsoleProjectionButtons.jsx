import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import northPolar from "../../assets/img/NorthPolar.png";
import simpleCylindrical from "../../assets/img/SimpleCylindrical.png";
import southPolar from "../../assets/img/SouthPolar.png";

const useStyles = makeStyles({
  img: {
    width: 31,
    height: 31,
    paddingBottom: 3
  },
  button: {
    width: 32,
    height: 32,
    "&:active": {
      background: "yellow"
    },
    "&:hover, &$focusVisible": {
      border: "2px orange solid",
      borderRadius: "15%",
      borderStyle: "outset"
    }
  },
  grid: {
    maxWidth: 40,
    width: "100%",
    height: "100%"
  },
  focusVisible: {}
});

export default function ConsoleProjectionButtons(props) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.grid}
      container
      item
      direction="column"
      justify="center"
    >
      <Grid item>
        <ButtonBase
          focusRipple
          className={classes.button}
          focusVisibleClassName={classes.focusVisible}
        >
          <img className={classes.img} src={northPolar} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          className={classes.button}
          focusVisibleClassName={classes.focusVisible}
        >
          <img className={classes.img} src={simpleCylindrical} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          focusRipple
          className={classes.button}
          focusVisibleClassName={classes.focusVisible}
        >
          <img className={classes.img} src={southPolar} />
        </ButtonBase>
      </Grid>
    </Grid>
  );
}
