import React from "react";
import { 
  Paper,
  LinearProgress,
} from '@material-ui/core';
import {
  Scheduler,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';
import mapSchedules from '../calendar/maps';

export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    // this.loadData();
  }

  loadData(){
    const appointments = this.props.data.map(mapSchedules); //Replace with API call
    this.setState({
      data: appointments,
      loading: false
    });
  }

  render() {
    const { data } = this.state;
    return (
      <Paper>
        <Scheduler
          data={data[this.props.index]}
          // height={660}
        >
          <WeekView
            startDayHour={7}
            endDayHour={20}
          />
          <Appointments />
        </Scheduler>
      </Paper>
    );
  }
}

