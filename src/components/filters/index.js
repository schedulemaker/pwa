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
  Typography
} from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import {
  withStyles,
  ThemeProvider,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

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

export default function Filters(props){
    const [value, setValue] = React.useState([props.minTime, props.maxTime])
    const [checked, setChecked] = React.useState(false);

    const handleSlider = (event, newValue) => {
        setValue(newValue);
      };

      const handleCheckbox = (event) => {
        setChecked(event.target.checked);
      };

    return (
      <Grid container justify='center'>
          <FormGroup row>
        <FormLabel component='legend'>Set start and end times</FormLabel>
      <Slider
        value={value}
        onChange={handleSlider}
        max={props.maxTime}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        // getAriaValueText={valuetext}
      />
      </FormGroup>
      <FormGroup row>
          <FormLabel component='legend'>Select desired days</FormLabel>
            {days.map(day => (
                <FormControl>
                    <FormControlLabel
                    value={day}
                    control={<Checkbox 
                        checked={checked}
                        onChange={handleCheckbox}
                    />}
                    label={day}
                    labelPlacement='top'
                   /> 
                </FormControl>
            ))}
      </FormGroup>
      <FormGroup row>
          <FormLabel>Choose how to rank schedules</FormLabel>
      <FormControlLabel
                    control={<Switch />}
                    label='Compact'
                    labelPlacement='start'
                   /> 
    <FormControlLabel
                    control={<Switch />}
                    label='Distance'
                    labelPlacement='end'
                   /> 
      </FormGroup>
      </Grid>
    );
}