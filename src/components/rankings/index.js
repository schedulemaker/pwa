import React, { useState } from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  Switch,
  RadioGroup,
} from "@material-ui/core";

const densityOptions = ["Compact", "Default", "Spread out"];

const distanceOptions = ["Shortest", "Default", "Longest"];

export default function Rankings(props) {
  const [density, setDensity] = useState('Default');
  const [distance, setDistance] = useState('Default');
  const [commute, setCommute] = useState(false);

  const handleDensity = (event) => {
    setDensity(event.target.value);
  };

  const handleDistance = (event) => {
    setDistance(event.target.value);
  };

  const handleSwitch = (event) => {
    setCommute(event.target.checked);
  };

  return (
    <Grid container item justify="space-evenly">
      <Grid item>
        <FormControl>
          <FormLabel>Schedule density</FormLabel>
          <RadioGroup
            aria-label="density"
            name="density"
            value={density}
            onChange={handleDensity}
          >
            {densityOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormLabel>Distance ranking</FormLabel>
          <RadioGroup
            aria-label="distance"
            name="distance"
            value={distance}
            onChange={handleDistance}
          >
            {distanceOptions.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <FormControlLabel
            control={
              <Switch
                checked={commute}
                onChange={handleSwitch}
                name="trip-planner"
                color="primary"
              />
            }
            label="Account for commute time"
          />
        </FormControl>
      </Grid>
    </Grid>
  );
}
