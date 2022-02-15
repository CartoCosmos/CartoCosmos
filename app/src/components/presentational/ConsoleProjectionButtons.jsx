import React from "react";
import { alpha } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import northPolar from "../../assets/img/NorthPolar.png";
import simpleCylindrical from "../../assets/img/SimpleCylindrical.png";
import southPolar from "../../assets/img/SouthPolar.png";
import Zoom from "@mui/material/Zoom";
import Tooltip from "@mui/material/Tooltip";


/**
 * Controls css styling for this component using js to css
 */
let css = {
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
};


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
      sx={css.grid}
      id="projContainer"
      container
      item
      direction="row"
      justifyContent="center"
      alignItems="center"
      xs
    >
      <Grid item>
        <Tooltip
          title={<NorthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionNorthPole"
              focusRipple
              sx={active == "north" ? css.activeBtn : css.button}
              onClick={handleNorthClick}
            >
              <img style={css.img} src={northPolar} />
            </ButtonBase>
          </div>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip
          title={
            <Typography variant="subtitle1">
              Switch to a cylindrical projection for the target body.
            </Typography>
          }
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionCylindrical"
              focusRipple
              sx={
                active == "cylindrical" ? css.activeBtn : css.button
              }
              value="cylindrical"
              onClick={() => setActive("cylindrical")}
            >
              <img style={css.img} src={simpleCylindrical} />
            </ButtonBase>
          </div>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip
          title={<SouthDisabled />}
          enterDelay={800}
          leaveDelay={0}
          placement="bottom"
          TransitionComponent={Zoom}
        >
          <div>
            <ButtonBase
              id="projectionSouthPole"
              focusRipple
              sx={active == "south" ? css.activeBtn : css.button}
              onClick={handleSouthClick}
            >
              <img style={css.img} src={southPolar} />
            </ButtonBase>
          </div>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
