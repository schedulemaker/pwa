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

const densityOptions = ["Default", "Compact", "Spread out"];

const distanceOptions = ["Default", "Shortest", "Longest"];

export default function Rankings(props) {
  const [density, setDensity] = useState(props.rankings[0]);
  const [distance, setDistance] = useState(props.rankings[1]);
  const [commute, setCommute] = useState(props.rankings[2]);

  const handleDensity = (event) => {
    setDensity(event.target.value);
    props.changeFilters('density', event.target.value);
  };

  const handleDistance = (event) => {
    setDistance(event.target.value);
    props.changeFilters('distance', event.target.value);
  };

  const handleSwitch = (event) => {
    setCommute(event.target.checked);
    props.changeFilters('commute', event.target.checked);
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
