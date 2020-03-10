import React from "react";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import northPolar from "../../assets/img/NorthPolar.png";
import simpleCylindrical from "../../assets/img/SimpleCylindrical.png";
import southPolar from "../../assets/img/SouthPolar.png";
import Zoom from "@material-ui/core/Zoom";

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
      "&:hover": {
        border: "none"
      }
    },
    "&:active": {
      background: "yellow"
    },
    "&:hover, &$focusVisible": {
      border: "2px orange solid",
      borderRadius: "15%",
      borderStyle: "outset"
    }
  },
  activeBtn: {
    width: 31,
    height: 31,
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

/**
 * Custom Component that uses Tooltip with modified css styling
 */
const StyledTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: 12,
    border: "1px solid #dadde9"
  }
}))(Tooltip);

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

  const handleClick = (event, newValue) => {
    if (!event.currentTarget.classList.contains("disabled")) {
      setActive(newValue);
    } else {
      setActive(active);
      event.stopPropagation();
    }
  };

  return (
    <Grid
      className={classes.grid}
      container
      item
      direction="column"
      justify="center"
      alignItems="center"
      xs
    >
      <Grid item>
        <StyledTooltip
          title={<NorthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="right"
          arrow
          TransitionComponent={Zoom}
        >
          <ButtonBase
            id="projectionNorthPole"
            focusRipple
            className={active == "north" ? classes.activeBtn : classes.button}
            focusVisibleClassName={classes.focusVisible}
            value="north"
            onClick={handleClick}
          >
            <img className={classes.img} src={northPolar} />
          </ButtonBase>
        </StyledTooltip>
      </Grid>
      <Grid item>
        <StyledTooltip
          title={
            <Typography variant="subtitle1">
              Switch to a cylindrical polar projection for the target body.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          placement="right"
          arrow
          TransitionComponent={Zoom}
        >
          <ButtonBase
            id="projectionCylindrical"
            focusRipple
            className={
              active == "cylindrical" ? classes.activeBtn : classes.button
            }
            focusVisibleClassName={classes.focusVisible}
            value="cylyndrical"
            onClick={handleClick}
          >
            <img className={classes.img} src={simpleCylindrical} />
          </ButtonBase>
        </StyledTooltip>
      </Grid>
      <Grid item>
        <StyledTooltip
          title={<SouthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="right"
          arrow
          TransitionComponent={Zoom}
        >
          <ButtonBase
            id="projectionSouthPole"
            focusRipple
            className={active == "south" ? classes.activeBtn : classes.button}
            focusVisibleClassName={classes.focusVisible}
            value="south"
            onClick={handleClick}
          >
            <img className={classes.img} src={southPolar} />
          </ButtonBase>
        </StyledTooltip>
      </Grid>
    </Grid>
  );
}
