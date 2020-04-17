import React, { useState } from "react";
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from '@material-ui/pickers';
import {
  getHoursMinutes,
} from '../utils';


export default function TimeFilters(props){
    const [startDate, setStartDate] = useState(
        new Date().setHours(...getHoursMinutes(props.minTime))
      );
      const [endDate, setEndDate] = useState(
        new Date().setHours(...getHoursMinutes(props.maxTime))
      );

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Desired start time"
            value={startDate}
            onChange={setStartDate}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Desired end time"
            value={endDate}
            onChange={setEndDate}
            KeyboardButtonProps={{
              "aria-label": "change time",
            }}
          />
        </MuiPickersUtilsProvider>
    );
}