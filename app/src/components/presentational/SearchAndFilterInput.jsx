import React from "react";
// Apply and Clear Buttons
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
// Keyword Filter
import TextField from "@material-ui/core/TextField";
// CSS
import { makeStyles, withStyles, alpha } from "@material-ui/core/styles";
// Date Range
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
// Filter By "This" checkboxes
import Checkbox from '@mui/material/Checkbox';
// Sort By Drop Down
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';


/**
 * Controls css styling for this component using js to css
 */
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f8f9fa",
    overflow: "hidden",
    padding: 0
  },
  container: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column", 
    justifyContent: "space-between",
    alignItems: "left",
    margin: "auto",
    padding: 0
  },
  textbox: {
    backgroundColor: "#e9ecef",
    "&:focus": {
      borderColor: "#1971c2"
    }
  },
  button: {
    width: "auto",
    color: "#fff",
    backgroundColor: "#1971c2",
    "&:hover": {
      backgroundColor: alpha("#1971c2", 0.7)
    }
  },
  buttonRemove: {
    width: "auto",
    color: "#fff",
    backgroundColor: "#64748B",
    "&:hover": {
      backgroundColor: alpha("#64748B", 0.7)
    }
  },
  title: {
    padding: "0.2rem",
    color: "#343a40",
    fontSize: 18,
    fontWeight: 600
  }
}));

/**
 * Component that lets user search and filter
 *
 * @component
 * @example
 * <SearchAndFilterInput />
 *
 */
export default function SearchAndFilterInput() {

  // import stylesheet from above
  const classes = useStyles();

  const keywordDetails = React.useRef(null);
  const dateDetails = React.useRef(null);

  // React States
  const [sortVal, setSortVal] = React.useState('');
  const [sortAscCheckVal, setSortAscCheckVal] = React.useState(false);
  const [areaCheckVal, setAreaCheckVal] = React.useState(false);

  const [keywordCheckVal, setKeywordCheckVal] = React.useState(false);
  const [keywordTextVal, setKeywordTextVal] = React.useState('');

  const [dateCheckVal, setDateCheckVal] = React.useState(false);
  const [dateFromVal, setDateFromVal] = React.useState(null);
  const [dateToVal, setDateToVal] = React.useState(null);

  // Clear all values
  const handleClear = (event) => {
    setSortVal('');
    setSortAscCheckVal(false);
    setAreaCheckVal(false);
    setKeywordCheckVal(false);
    setKeywordTextVal('');
    setDateCheckVal(false);
    setDateFromVal(null);
    setDateToVal(null);
    //// Uncomment to close details on clear
    // keywordDetails.current.open = false;
    // dateDetails.current.open = false;
  }

  // Sorting
  const handleSortChange = (event) => {
    setSortVal(event.target.value);
  }
  const handleSortAscCheckChange = (event) => {
    setSortAscCheckVal(event.target.checked);
  }

  // Polygon
  const handleAreaCheckChange = (event) => {
    setAreaCheckVal(event.target.checked);
  }

  // Keyword
  const handleKeywordCheckChange = (event) => {
    setKeywordCheckVal(event.target.checked);
    if (event.target.checked === true && keywordDetails.current.open === false) {
      keywordDetails.current.open = true;
    }
  }
  const handleKeywordChange = (event) => {
    setKeywordTextVal(event.target.value)
    setKeywordCheckVal(true);
  }

  // Date
  const handleDateCheckChange = (event) => {
    setDateCheckVal(event.target.checked);
    if (event.target.checked === true && dateDetails.current.open === false) {
      dateDetails.current.open = true;
    }
  }
  const handleDateFromChange = (event) => {
    setDateFromVal(event);
    setDateCheckVal(true);
  }
  const handleDateToChange = (event) => {
    setDateToVal(event);
    setDateCheckVal(true);
  }

  /* Control IDs for reference:
  applyButton
  clearButton
  sortBySelect
  sortAscCheckBox
  areaCheckBox
  keywordCheckBox
  keywordTextBox
  dateCheckBox
  dateFromPicker
  dateToPicker
  */


  return (
    <div className={classes.root}>
        <div className={classes.container}>
          <div className="panelSection panelHeader">
            Sort and Filter
          </div>
          
          <div className="panelSection">
            <ButtonGroup>
              <Button id="applyButton" variant="contained" startIcon={<FilterAltIcon />} className={classes.button}>
                Apply
              </Button>
              <Button id="clearButton" variant="contained" endIcon={<DeleteForeverIcon />} onClick={handleClear} className={classes.buttonRemove}>
                Clear
              </Button>
            </ButtonGroup>
          </div>

          <div className="panelSection">
            <FormControl sx={{minWidth: 170}}>
              <InputLabel id="sortByLabel" size="small">Sort By</InputLabel>
              <Select
                labelId="sortByLabel"
                label="Sort By"
                id="sortBySelect"
                value={sortVal}
                onChange={handleSortChange}
                size="small"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"date"}>Date</MenuItem>
                <MenuItem value={"location"}>Location</MenuItem>
              </Select>
            </FormControl>
            <div className="panelSortAscCheck">
              <Checkbox id="sortAscCheckBox" checked={sortAscCheckVal} onChange={handleSortAscCheckChange}
                icon={<ArrowDownwardIcon/>} checkedIcon={<ArrowUpwardIcon/>}
                sx={{
                  color: "#64748B",
                  '&.Mui-checked': {
                    color: "#64748B",
                  },
                }}
              />
            </div>
            
          </div>

          <div className="panelSection panelHeader">
            Filter By...
          </div>

          <div className="panelSection">
            <div className="panelSectionHeader">
              <div className="panelSectionTitle">Selected Area</div>
              <div className="panelSectionCheck">
                <Checkbox id="areaCheckBox" checked={areaCheckVal} onChange={handleAreaCheckChange}/>
              </div>
            </div>
          </div>

          <div className="panelSection">
            <details ref={keywordDetails}>
              <summary>
                <div className="panelSectionHeader">
                  <div className="panelSectionTitle">Keyword</div>
                  <div className="panelSectionCheck">
                    <Checkbox checked={keywordCheckVal} onChange={handleKeywordCheckChange} id="keywordCheckBox"/>
                  </div>
                </div>
              </summary>
              <div className="panelItem">
                <TextField
                  className={classes.textbox}
                  value={keywordTextVal}
                  variant="outlined"
                  InputLabelProps={{
                    shrink: true
                  }}
                  id="keywordTextBox"
                  name="fname"
                  type="text"
                  autoComplete="off"
                  size="small"
                  onChange={handleKeywordChange}
                />
              </div>
            </details>
          </div>
          
          <div className="panelSection">
            <details ref={dateDetails}>
              <summary>
                <div className="panelSectionHeader">
                  <div className="panelSectionTitle">Date Range</div>
                  <div className="panelSectionCheck"><Checkbox id="dateCheckBox" checked={dateCheckVal} onChange={handleDateCheckChange}/></div>
                </div>
              </summary>
              <div className="panelItem">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    id="dateFromPicker"
                    label="From"
                    value={dateFromVal}
                    onChange={handleDateFromChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="panelItem">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    id="dateToPicker"
                    label="To"
                    value={dateToVal}
                    onChange={handleDateToChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
            </details>
          </div>
        </div>
    </div>
  );
}
