import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PolylineIcon from '@mui/icons-material/Polyline';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Checkbox, {checkboxClasses} from "@mui/material/Checkbox";


const useStyles = makeStyles(theme => ({
  button: {
    width: "auto",
    color: "#000",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: alpha("#eee", 0.9)
    }
  }
}));

/**
 * Component lets user view and use stac queries
 * @component
 * @example
 * <StacQueryConsole />
 */
export default function QueryConsole() {
  const classes = useStyles();

  const [consoleAuto, setConsoleAuto] = React.useState(true);
  const [consoleAutoWkt, setConsoleAutoWkt] = React.useState(false);

  const handleConsoleAutoChange = (event) => {
    setConsoleAuto(event.target.checked);
  }

  const handleConsoleAutoWktChange = (event) => {
    setConsoleAutoWkt(event.target.checked);
  }

  return (
    <details id="query-console-container">
      <summary id="query-console-collapsed">
        <span id="query-console-title">
          <ArrowDropDownCircleIcon sx={{marginRight:1}}/> Query Console
        </span>
        <span id="query-function">
          <Checkbox checked={consoleAuto} onChange={handleConsoleAutoChange} id="query-auto-checkbox"/>
          Auto-populate with: 
          {consoleAutoWkt ? " WKT String" : " STAC Query"}
          <Checkbox id="query-auto-wkt-checkbox" checked={consoleAutoWkt} onChange={handleConsoleAutoWktChange}
                icon={<SwitchRightIcon/>} checkedIcon={<SwitchLeftIcon/>} color="default"/>
        </span>
      </summary>
      <div id="query-console-expanded">
          <div id="query-textarea-container">
            <textarea id="query-textarea" placeholder="> Type Query Here"></textarea>
            <div id="query-command-bar">
              <ButtonGroup 
                orientation="vertical" 
                size="small" 
                variant="contained">
                <Button className={classes.button} startIcon={<ContentCopyIcon />}>Copy Code</Button>
                <Button id="wktButton" className={classes.button} startIcon={<PolylineIcon />}>Draw WKT String</Button>
                <Button className={classes.button} startIcon={<PlayArrowIcon />}>Run STAC Query</Button>
              </ButtonGroup>
            </div>
          </div>
      </div>
    </details>
  );
}
