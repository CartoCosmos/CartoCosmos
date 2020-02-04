import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import { makeStyles } from "@material-ui/core/styles";
import northPolar from "../../assets/img/NorthPolar.png";
import simpleCylindrical from "../../assets/img/SimpleCylindrical.png";
import southPolar from "../../assets/img/SouthPolar.png";

const useStyles = makeStyles({
  img: {
    maxWidth: "100%",
    maxHeight: "auto",
    margin: "auto",
    display: "block"
  },
  image: {
    width: 28,
    height: 28
  }
});

export default function ConsoleProjectionButtons(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid item xs>
        <div className={classes.image}>
          <ButtonBase>
            <img className={classes.img} src={northPolar} />
          </ButtonBase>
        </div>
      </Grid>
      <Grid item xs>
        <div className={classes.image}>
          <ButtonBase>
            <img className={classes.img} src={simpleCylindrical} />
          </ButtonBase>
        </div>
      </Grid>
      <Grid item xs>
        <div className={classes.image}>
          <ButtonBase>
            <img className={classes.img} src={southPolar} />
          </ButtonBase>
        </div>
      </Grid>
    </React.Fragment>
  );
}
