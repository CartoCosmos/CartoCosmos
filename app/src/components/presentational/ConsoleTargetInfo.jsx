import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";


// Planet Selection Dialog
import PropTypes from 'prop-types';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { blue } from '@mui/material/colors';
import Link from "@material-ui/core/Link";

// Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
//import PublicIcon from '@mui/icons-material/Public';     // Generic Planet/moon, in case
//import DarkModeIcon from '@mui/icons-material/DarkMode'; // we don't want the colored icons

import MercuryIcon from "../../assets/img/planet-icons/001-mercury.png";
import VenusIcon from "../../assets/img/planet-icons/002-venus.png";
import EarthIcon from "../../assets/img/planet-icons/003-earth.png";
import MarsIcon from "../../assets/img/planet-icons/004-mars.png";
import JupiterIcon from "../../assets/img/planet-icons/005-jupiter.png";
import SaturnIcon from "../../assets/img/planet-icons/006-saturn.png";
import UranusIcon from "../../assets/img/planet-icons/007-uranus.png";
import NeptuneIcon from "../../assets/img/planet-icons/008-neptune.png";
import PlutoIcon from "../../assets/img/planet-icons/009-pluto.png";
import MoonIcon from "../../assets/img/planet-icons/010-moon.png";

/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles({
  img: {
    width: 32,
    height: 32,
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
    paddingLeft: 10,
    paddingRight: 10,
    cursor: "pointer",
    "&:hover": {
      background: "#efefef",
      textDecoration: "underline"
    }
  },
  attributionContainer: {
    alignContent: "center",
    paddingLeft: 20
  }
});


 const planets = [ 
   ['Mercury', MercuryIcon ],
   ['Venus', VenusIcon],
   ['Earth', EarthIcon],
   ['Mars', MarsIcon],
   ['Jupiter', JupiterIcon],
   ['Saturn', SaturnIcon],
   ['Uranus', UranusIcon],
   ['Neptune', NeptuneIcon],
   ['Pluto', PlutoIcon]
  ];
const moons = ['Moon', 'Ceres', 'Mimas', 'Titan', 'Deimos', 'Tethys', 'Phoebe', 'Iapetus', 'Dione', 'Enceladus', 	'Hyperion', 'Io', 'Callisto', 'Europa', 'Ganymede', 'Rhea', 'Phobos', 'Vesta', 'Charon' ];

/**
 * Dialog for selecting planets
 * @param {open, onClose, selectedValue} props 
 * @returns Planet Selection Dialog
 */
function PlanetDialog(props) {

  const classes = useStyles();

  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
 
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Target Body</DialogTitle>
      <List sx={{ pt: 0 }}>
        <ListSubheader value="Mars">Planets</ListSubheader>
        {planets.map((planet) => (
          <ListItem button onClick={() => handleListItemClick(planet[0])} key={planet[0]}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100] }}>
                <img className={classes.img} src={planet[1]} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={planet[0]} />
          </ListItem>
        ))}
        <ListSubheader value="Moon">Moons and Other Bodies</ListSubheader>
        {moons.map((moon) => (
          <ListItem button onClick={() => handleListItemClick(moon)} key={moon}>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: blue[100] }}>
              <img className={classes.img} src={MoonIcon} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={moon} />
          </ListItem>
        ))}
      </List>
      <div className={classes.attributionContainer}>
        <Link
          title="Space Icons"
          target="_blank"
          rel="noopener"
          color="inherit"
          style={{ fontWeight: 600 }}
          variant="caption"
          href="https://www.flaticon.com/packs/space-275"
        >
          Icons by Freepik on Flaticon
        </Link>
      </div>
    </Dialog>
  );
}
 
PlanetDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

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

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(planets[3][0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
    props.bodyChange(value);
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
        <Typography id="targetName" className={classes.title} variant="h4" onClick={handleClickOpen}>
          {props.target.toUpperCase()} <ArrowDropDownIcon fontSize="large" />
        </Typography>
      </Grid>
      <PlanetDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </Grid>
  );
}
