import React, { useState } from "react";
import MomentUtils from '@date-io/moment';
import {
  MuiPickersUtilsProvider,
  TimePicker,
} from '@material-ui/pickers';
import {
  getHoursMinutes,
} from '../utils';
import moment from 'moment';


export default function TimeFilters(props){
    const [startDate, setStartDate] = useState(
        new Date().setHours(...getHoursMinutes(props.times[0]))
      );
      const [endDate, setEndDate] = useState(
        new Date().setHours(...getHoursMinutes(props.times[1]))
      );

      const convertTime = function(epoch){
        const m = moment(epoch);
        return m.hour() * 100 + m.minute();
      }

      const handleStartChange = function(value){
        setStartDate(value);
        props.changeFilters('start', convertTime(value));
      }

      const handleEndChange = function(value){
        setEndDate(value);
        props.changeFilters('end', convertTime(value));
      }

    return (
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker
            varient='inline'
            margin="normal"
            id="time-picker"
            label="Desired start time"
            value={startDate}
            onChange={handleStartChange}
          />
          <TimePicker
            varient='inline'
            margin="normal"
            id="time-picker"
            label="Desired end time"
            value={endDate}
            onChange={handleEndChange}
          />
        </MuiPickersUtilsProvider>
    );
}