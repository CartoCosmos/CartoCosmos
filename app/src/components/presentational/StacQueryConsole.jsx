import React from "react";
import { makeStyles, alpha } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
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
export default function StacQueryConsole() {
  const classes = useStyles();

  const [consoleFunctionVal, setConsoleFunctionVal] = React.useState(false);

  const handleConsoleFunctionChange = (event) => {
    setConsoleFunctionVal(event.target.checked);
  }

  return (
    <details id="query-console-container">
      <summary id="query-console-collapsed">
        <span id="query-console-title">
          <ArrowDropDownCircleIcon sx={{marginRight:1}}/> STAC Query Console
        </span>
        <span id="query-function">
          <Checkbox />
          Auto-populate with: 
          {consoleFunctionVal ? " WKT String" : " STAC Query"}
          <Checkbox id="grabWktCheckBox" checked={consoleFunctionVal} onChange={handleConsoleFunctionChange}
                icon={<SwitchLeftIcon/>} checkedIcon={<SwitchRightIcon/>} color="default"/>
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
                <Button className={classes.button} startIcon={<PolylineIcon />}>Draw WKT String</Button>
                <Button className={classes.button} startIcon={<PlayArrowIcon />}>Run STAC Query</Button>
              </ButtonGroup>
            </div>
          </div>
      </div>
    </details>
  );
}
