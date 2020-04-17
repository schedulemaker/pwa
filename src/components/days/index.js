import React, { useState } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Grid,
} from "@material-ui/core";

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

export default function DayFilters(props) {
  const [state, setState] = useState(
    Object.fromEntries(days.map((day) => [day, false]))
  );

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
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
                key={day}
                value={day}
                control={
                  <Checkbox
                    checked={state[day]}
                    onChange={handleChange}
                    name={day}
                  />
                }
                label={day}
                labelPlacement="top"
              />
            ))}
          </FormGroup>
        </Grid>
      </Grid>
    </FormControl>
  );
}
