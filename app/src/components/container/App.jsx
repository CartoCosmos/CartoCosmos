import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ConsoleContainer from "./ConsoleContainer.jsx";
import MapContainer from "./MapContainer.jsx";
import ListSubheader from "@material-ui/core/ListSubheader";
import WellKnownTextInput from "../presentational/WellKnownTextInput.jsx";
import CreditsDisplay from "../presentational/CreditsDisplay.jsx";
//import AutoCompleteInput from "../presentational/AutoCompleteInput.jsx";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignContent: "center",
    justifyContent: "space-between"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 125
  },
  autoComplete: {}
}));

/**
 * App is the parent component for all of the other components in the project. It
 * imports and creates all of the map and console components and contains the
 * target selector.
 *
 * @component
 */
export default function App() {
  const classes = useStyles();
  const [targetPlanet, setTargetPlanet] = React.useState("Mercury");

  /**
   * Handles target selection
   *
   * @param {*} event selection event
   */
  const handleChange = event => {
    setTargetPlanet(event.target.value);
  };

  return (
    <div>
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Target Body</InputLabel>
          <Select
            defaultValue={1}
            onChange={handleChange}
            value={targetPlanet}
            input={<Input id="grouped-select" />}
          >
            <ListSubheader value="Mercury">Planets</ListSubheader>
            <MenuItem value="Mercury">Mercury</MenuItem>
            <MenuItem value="Venus">Venus</MenuItem>
            <MenuItem value="Earth">Earth</MenuItem>
            <MenuItem value="Mars">Mars</MenuItem>
            <MenuItem value="Jupiter">Jupiter</MenuItem>
            <MenuItem value="Saturn">Saturn</MenuItem>
            <MenuItem value="Uranus">Uranus</MenuItem>
            <MenuItem value="Neptune">Neptune</MenuItem>
            <MenuItem value="Pluto">Pluto (yeah, a planet)</MenuItem>
            <ListSubheader value="Moon">Moons and Other Bodies</ListSubheader>
            <MenuItem value="Moon">Moon</MenuItem>
            <MenuItem value="Ceres">Ceres</MenuItem>
            <MenuItem value="Mimas">Mimas</MenuItem>
            <MenuItem value="Titan">Titan</MenuItem>
            <MenuItem value="Deimos">Deimos</MenuItem>
            <MenuItem value="Tethys">Tethys</MenuItem>
            <MenuItem value="Phoebe">Phoebe</MenuItem>
            <MenuItem value="Iapetus">Iapetus</MenuItem>
            <MenuItem value="Dione">Dione</MenuItem>
            <MenuItem value="Enceladus">Enceladus</MenuItem>
            <MenuItem value="Hyperion">Hyperion</MenuItem>
            <MenuItem value="Io">Io</MenuItem>
            <MenuItem value="Callisto">Callisto</MenuItem>
            <MenuItem value="Europa">Europa</MenuItem>
            <MenuItem value="Ganymede">Ganymede</MenuItem>
            <MenuItem value="Rhea">Rhea</MenuItem>
            <MenuItem value="Phobos">Phobos</MenuItem>
            <MenuItem value="Vesta">Vesta</MenuItem>
            <MenuItem value="Charon">Charon</MenuItem>
          </Select>
        </FormControl>
        {/* <AutoCompleteInput className={classes.autoComplete} /> */}
      </div>
      <Paper elevation={10}>
        <ConsoleContainer target={targetPlanet} />
        <MapContainer target={targetPlanet} />
        <WellKnownTextInput />
        <CreditsDisplay />
      </Paper>
    </div>
  );
}
