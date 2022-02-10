import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Zoom from "@material-ui/core/Zoom";
import Link from "@material-ui/core/Link";
import StyledTooltip from "./StyledTooltip.jsx";

/**
 * Component lets user view and use stac queries
 *
 * @component
 * @example
 * <StacQueryConsole />
 *
 */
export default function StacQueryConsole() {
  return (
    <details id="query-console-container">
      <summary id="query-console-collapsed">
        STAC Query Console
      </summary>
      <div id="query-console-expanded">
        
          
          <div id="query-textarea-container">
            <textarea id="query-textarea" placeholder=">_"></textarea>
            <div id="query-command-bar">
              <ButtonGroup 
                orientation="vertical" 
                size="small" 
                variant="contained">
                <Button>Copy Code</Button>
                <Button>Draw WKT String</Button>
                <Button>Run STAC Query</Button>
              </ButtonGroup>
            </div>
          </div>
      </div>
    </details>
  );
}
