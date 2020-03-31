import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
import { makeStyles, withStyles, fade } from "@material-ui/core/styles";
import "../../js/autocomplete/customIndex.js";
import "../../js/autocomplete/getServer.js";
import "../../js/autocomplete/render.js";

const useStyles = makeStyles(theme => ({
  root: {
    textAlign: "center",
    maxHeight: 80,
    height: 80,
    width: 500
    //overflow: "hidden"
  },
  container: {
    padding: "1rem",
    height: 50,
    width: "90%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    margin: "auto"
  },
  textbox: {
    flex: "3 1 auto",
    backgroundColor: "#e9ecef",
    "&:focus": {
      borderColor: "#1971c2"
    }
  },
  button: {
    height: 40,
    color: "#fff",
    backgroundColor: "#1971c2",
    width: "6rem",
    marginLeft: "1rem",
    alignSelf: "center",
    "&:hover": {
      backgroundColor: fade("#1971c2", 0.7)
    }
  }
}));

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

export default function AutoCompleteInput() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyledTooltip
        title={
          <Typography variant="subtitle1">
            Enter the name of a surface feature and select it to open a web page
            with information about that feature.
          </Typography>
        }
        enterDelay={800}
        leaveDelay={250}
        arrow
        TransitionComponent={Zoom}
      >
        <div className={classes.container}>
          <Input
            className={classes.textbox}
            variant="outlined"
            label="Enter Surface Feature Name"
            InputLabelProps={{
              shrink: true
            }}
            id="autoComplete"
            tabIndex="1"
            onBlur="unrenderBox()"
            onFocus="renderBox()"
          />
          <Button variant="contained" className={classes.button} id="wktButton">
            Search
          </Button>
        </div>
      </StyledTooltip>
    </div>
  );
}
