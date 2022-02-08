import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import ListSubheader from "@material-ui/core/ListSubheader";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  img: {
    width: 36,
    height: 36,
    margin: "auto"
  },
  grid: {
    width: "100%",
    maxHeight: 45
  },
  title: {
    color: "#343a40",
    fontWeight: 900,
    fontSize: 42,
    letterSpacing: "0rem",
    paddingRight: 55
  }
});

/**
 * Component that displays target body name in console.
 * Retrieves target name from target selector
 *
 * @component
 * @example
 * const target = Mars
 * return (
 *   <ConsoleTargetInfo target={target}/>
 * )
 */
export default function ConsoleTargetInfo(props) {
  const classes = useStyles();
  const [targetPlanet, setTargetPlanet] = React.useState("Mars");

  /**
   * Handles target selection
   *
   * @param {*} event selection event
   */
  const handleChange = event => {
    setTargetPlanet(event.target.value);
  };

  return (
    <Grid
      container
      item
      justifyContent="center"
      alignItems="center"
      className={classes.grid}
      xs
    >
      <Grid item>
        <Typography id="targetName" className={classes.title} variant="h4">
          {props.target.toUpperCase()}
        </Typography>
      </Grid>
      <Grid item>
        <FormControl className={classes.formControl}>
          <Select
            defaultValue={1}
            onChange={props.bodyChange}
            value={props.target}
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
      </Grid>
    </Grid>
  );
}
