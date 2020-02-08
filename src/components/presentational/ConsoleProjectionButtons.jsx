import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
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
      border: "3px orange solid",
      borderRadius: "15%",
      borderStyle: "outset"
    }
  },
  activeBtn: {
    width: 32,
    height: 32,
    border: "2px orange solid",
    borderRadius: "15%",
    borderStyle: "outset"
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

  const [active, setActive] = React.useState("cylindrical");

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
          id="projectionNorthPole"
          focusRipple
          className={active == "north" ? classes.activeBtn : classes.button}
          focusVisibleClassName={classes.focusVisible}
          onClick={() => setActive("north")}
        >
          <img className={classes.img} src={northPolar} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          id="projectionCylindrical"
          focusRipple
          className={
            active == "cylindrical" ? classes.activeBtn : classes.button
          }
          focusVisibleClassName={classes.focusVisible}
          onClick={() => setActive("cylindrical")}
        >
          <img className={classes.img} src={simpleCylindrical} />
        </ButtonBase>
      </Grid>
      <Grid item>
        <ButtonBase
          id="projectionSouthPole"
          focusRipple
          className={active == "south" ? classes.activeBtn : classes.button}
          focusVisibleClassName={classes.focusVisible}
          onClick={() => setActive("south")}
        >
          <img className={classes.img} src={southPolar} />
        </ButtonBase>
      </Grid>
    </Grid>
  );
}
