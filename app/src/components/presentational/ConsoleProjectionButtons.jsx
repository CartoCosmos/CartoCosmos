import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles, alpha } from "@material-ui/core/styles";
import northPolar from "../../assets/img/NorthPolar.png";
import simpleCylindrical from "../../assets/img/SimpleCylindrical.png";
import southPolar from "../../assets/img/SouthPolar.png";
import Zoom from "@material-ui/core/Zoom";
import StyledTooltip from "./StyledTooltip.jsx";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  img: {
    width: "100%",
    height: "100%"
  },
  button: {
    width: 31,
    height: 31,
    "&.disabled": {
      border: "none",
      cursor: "not-allowed",
      pointerEvents: "none",
      "&:hover": {
        border: "none"
      }
    },
    "&:active": {
      background: alpha("#1971c2", 0.5)
    },
    "&:hover, &$focusVisible": {
      border: "2px #1971c2 solid",
      borderRadius: "15%",
      borderStyle: "outset"
    }
  },
  activeBtn: {
    width: 31,
    height: 31,
    border: "2px #1971c2 solid",
    background: alpha("#ffa500", 0.2),
    borderRadius: "15%",
    borderStyle: "outset"
  },
  grid: {
    width: 120,
    height: "100%"
  },
  focusVisible: {}
});

/**
 * Component used only in this file, passed in to the Tooltip to
 * determine which tooltip to use if north polar projection is disabled
 *
 * @component
 *
 */
function NorthDisabled() {
  let north = document.getElementById("projectionNorthPole");
  if (north != null && north.classList.contains("disabled")) {
    return (
      <Typography variant="subtitle1">
        The north polar projection for this body is unavailable.
      </Typography>
    );
  } else {
    return (
      <Typography variant="subtitle1">
        Switch to a north polar projection for the target body.
      </Typography>
    );
  }
}

/**
 * Component used only in this file, passed in to the Tooltip to
 * determine which tooltip to use if south polar projection is disabled
 *
 * @component
 *
 */
function SouthDisabled() {
  let south = document.getElementById("projectionSouthPole");
  if (south != null && south.classList.contains("disabled")) {
    return (
      <Typography variant="subtitle1">
        The south polar projection for this body is unavailable.
      </Typography>
    );
  } else {
    return (
      <Typography variant="subtitle1">
        Switch to a south polar projection for the target body.
      </Typography>
    );
  }
}

/**
 * Main component that displays the console's projection buttons and handles
 * user click events.
 *
 * @component
 */
export default function ConsoleProjectionButtons() {
  const classes = useStyles();

  const [active, setActive] = React.useState("cylindrical");

  const handleNorthClick = event => {
    if (!event.currentTarget.classList.contains("disabled")) {
      setActive("north");
    } else {
      event.stopPropagation();
    }
  };

  const handleSouthClick = event => {
    if (!event.currentTarget.classList.contains("disabled")) {
      setActive("south");
    } else {
      event.stopPropagation();
    }
  };

  return (
    <Grid
      className={classes.grid}
      id="projContainer"
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs
    >
      <Grid item>
        <StyledTooltip
          title={<NorthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          arrow
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionNorthPole"
              focusRipple
              className={active == "north" ? classes.activeBtn : classes.button}
              focusVisibleClassName={classes.focusVisible}
              onClick={handleNorthClick}
            >
              <img className={classes.img} src={northPolar} />
            </ButtonBase>
          </div>
        </StyledTooltip>
      </Grid>
      <Grid item>
        <StyledTooltip
          title={
            <Typography variant="subtitle1">
              Switch to a cylindrical projection for the target body.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          arrow
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionCylindrical"
              focusRipple
              className={
                active == "cylindrical" ? classes.activeBtn : classes.button
              }
              focusVisibleClassName={classes.focusVisible}
              value="cylindrical"
              onClick={() => setActive("cylindrical")}
            >
              <img className={classes.img} src={simpleCylindrical} />
            </ButtonBase>
          </div>
        </StyledTooltip>
      </Grid>
      <Grid item>
        <StyledTooltip
          title={<SouthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          arrow
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionSouthPole"
              focusRipple
              className={active == "south" ? classes.activeBtn : classes.button}
              focusVisibleClassName={classes.focusVisible}
              onClick={handleSouthClick}
            >
              <img className={classes.img} src={southPolar} />
            </ButtonBase>
          </div>
        </StyledTooltip>
      </Grid>
    </Grid>
  );
}
