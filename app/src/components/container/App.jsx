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
import "proj4leaflet";
import "proj4";
import { ListSubheader } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function App() {
  const classes = useStyles();
  const [targetPlanet, setTargetPlanet] = React.useState("Mercury");

  const handleChange = event => {
    setTargetPlanet(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Target Body</InputLabel>
        <Select
          defaultValue={1}
          onChange={handleChange}
          value={targetPlanet}
          input={<Input id="grouped-select" />}
        >
          <ListSubheader>Planets</ListSubheader>
          <MenuItem value="Mercury">Mercury</MenuItem>
          <MenuItem value="Venus">Venus</MenuItem>
          <MenuItem value="Earth">Earth</MenuItem>
          <MenuItem value="Mars">Mars</MenuItem>
          <MenuItem value="Jupiter">Jupiter</MenuItem>
          <MenuItem value="Saturn">Saturn</MenuItem>
          <MenuItem value="Uranus">Uranus</MenuItem>
          <MenuItem value="Neptune">Neptune</MenuItem>
          <MenuItem value="Pluto">Pluto (yeah, a planet)</MenuItem>
          <ListSubheader>Moons and Other Bodies</ListSubheader>
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
      <Paper elevation={10}>
        <ConsoleContainer target={targetPlanet} />
        <MapContainer target={targetPlanet} />
      </Paper>
    </div>
  );
}
