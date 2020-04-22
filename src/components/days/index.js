import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";

const days = [["Sun", "sunday"], ["Mon", 'monday'], ["Tues", 'tuesday'], ["Wed", 'wednesday'], ["Thurs", 'thursday'], ["Fri", 'friday'], ["Sat", 'saturday']];

export default function DayFilters(props) {
  const [state, setState] = useState(
    props.days ? props.days : Object.fromEntries(days.map((day) => [day[1], false]))
  );

  const handleChange = (event) => {
    const newState = { ...state, [event.target.name]: event.target.checked };
    setState(newState);
    if (Object.keys(newState).some(k => newState[k])){
      props.changeFilters('days', newState);
    } else {
      props.changeFilters('days', null);
    }
  };

  return (
    <FormControl>
      <Grid container direction="column" spacing={2}>
        <Grid container item justify="center">
          <FormLabel>Desired days</FormLabel>
        </Grid>
        <Grid container item justify="center">
          <FormGroup row>
            {days.map((day) => (
              <FormControlLabel
                key={day[0]}
                value={day[1]}
                control={
                  <Checkbox
                    checked={state[day[1]]}
                    onChange={handleChange}
                    name={day[1]}
                  />
                }
                label={day[0]}
                labelPlacement="top"
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}
