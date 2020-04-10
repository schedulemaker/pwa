import React from "react";
import { 
  Paper,
  Grid,
  LinearProgress
} from '@material-ui/core';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import json from './schedules.json';
import mapSchedules from './maps';


const today = new Date();
export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: json.data.createSchedules.map(mapSchedules),
      index: 0
    };
  }

  render() {
    const { data, index } = this.state;
    return (
      <Paper>
        <Scheduler
          data={data[index]}
          // height={660}
        >
          <WeekView
            startDayHour={7}
            endDayHour={20}
          />
          <Toolbar />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}