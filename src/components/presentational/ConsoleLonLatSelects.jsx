import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  grid: {
    maxHeight: "100%",
    width: "inherit",
    margin: "auto"
  },
  buttons: {
    backgroundColor: "#afafef",
    width: 120
  }
});

export default function ConsoleLonLatSelects(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid className={classes.grid} item xs>
        <FormControl>
          <Select id="console-ocentric-ographic-select" defaultValue="ocentric">
            <MenuItem value="ocentric">Planetocentric</MenuItem>
            <MenuItem value="ographic">Planetographic</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid className={classes.grid} item xs>
        <FormControl>
          <Select id="console-latititude-select" defaultValue="180">
            <MenuItem value={180}>-180&deg; to 180&deg;</MenuItem>
            <MenuItem value={360}>0&deg; to 360&deg;</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid className={classes.grid} item xs>
        <FormControl>
          <Select id="console-ocentric-ographic-select" defaultValue="east">
            <MenuItem value="east">Positive East</MenuItem>
            <MenuItem value="west">Positive West</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
