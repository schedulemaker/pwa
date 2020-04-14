import React from "react";
import { 
  Paper, 
  Grid, 
  Button,
  ButtonGroup,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Typography,
  RadioGroup,
  List,
  ListItem,
  ListItemIcon,
  Divider,
  Card, 
  CardHeader
} from "@material-ui/core";
import {
  withStyles,
  ThemeProvider,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import {
  getHoursMinutes,
  not,
  union,
  intersection
} from '../utils';

const days = [
    'Sun',
    'Mon',
    'Tues',
    'Wed',
    'Thurs',
    'Fri',
    'Sat',
    'Sun'
];



export default function Filters(props) {
  const [startDate, setStartDate] = React.useState(
    new Date().setHours(...getHoursMinutes(props.minTime))
  );
  const [endDate, setEndDate] = React.useState(
    new Date().setHours(...getHoursMinutes(props.maxTime))
  );
  const [density, setDensity] = React.useState("compact");
  const [distance, setDistance] = React.useState("shortest");
  const [checked, setChecked] = React.useState(false);

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleDensity = (event) => {
    setDensity(event.target.value);
  };

  const handleDistance = (event) => {
    setDistance(event.target.value);
  };

  return (
    <Grid container justify="center" spacing={3}>
      <Grid container item justify="space-around">
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Set desired start time"
            value={startDate}
            onChange={setStartDate}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Set desired end time"
            value={endDate}
            onChange={setEndDate}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid container item justify='center'>
        <FormControl>
          <FormLabel component="legend">Select desired days</FormLabel>
          <FormGroup row>
            {days.map((day) => (
              <FormControlLabel
                value={day}
                control={
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckbox}
                    name={day}
                  />
                }
                label={day}
                labelPlacement="top"
              />
            ))}
          </FormGroup>
        </FormControl>
      </Grid>
        <Grid container item justify='space-around'>
        <Grid item>
        <FormControl component="fieldset">
          <FormLabel component="legend">Select schedule density</FormLabel>
          <RadioGroup
            aria-label="density"
            name="density"
            value={density}
            onChange={handleDensity}
          >
            <FormControlLabel
              value="compact"
              control={<Radio />}
              label="Compact"
            />
            <FormControlLabel
              value="spread"
              control={<Radio />}
              label="Spread out"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
      <FormControl component="fieldset">
          <FormLabel component="legend">Select distance ranking</FormLabel>
          <RadioGroup
            aria-label="distance"
            name="distance"
            value={distance}
            onChange={handleDistance}
          >
            <FormControlLabel
              value="shortest"
              control={<Radio />}
              label="Shortest"
            />
            <FormControlLabel
              value="longest"
              control={<Radio />}
              label="Longest"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
        </Grid>
      
    </Grid>
  );
}