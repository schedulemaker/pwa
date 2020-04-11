import React from "react";
import { 
  Paper,
  Grid,
  LinearProgress,
  MobileStepper,
  Button
} from '@material-ui/core';
import {
  KeyboardArrowLeft,
  KeyboardArrowRight
} from '@material-ui/icons';
import SwipeableViews from 'react-swipeable-views';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
} from '@devexpress/dx-react-scheduler-material-ui';
import { 
  withStyles,
  ThemeProvider,
  makeStyles,
  useTheme
} from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import json from './schedules.json';
import mapSchedules from './maps';

const styles = {
  toolbarRoot: {
    position: 'relative',
  },
  progress: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
    left: 0,
  },
};

const ToolbarWithLoading = withStyles(styles, { name: 'Toolbar' })(
  ({ children, classes, ...restProps }) => (
    <div className={classes.toolbarRoot}>
      <Toolbar.Root {...restProps}>
        {children}
      </Toolbar.Root>
      <LinearProgress className={classes.progress} />
    </div>
  ),
);

export default class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: [],
      index: 0
    };
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    // this.loadData();
  }

  loadData(){
    const appointments = json.data.createSchedules.map(mapSchedules); //Replace with API call
    this.setState({
      data: appointments,
      loading: false
    });
  }

  showNext(){
    this.setState({
      index: this.state.index + 1
    });
  }

  showPrev(){
    this.setState({
      index: this.state.index - 1
    });
  }

  handleIndexChange(index){
    this.setState({
      index: index
    });
  }

  render() {
    const { data, index, loading } = this.state;
    return (
      <Grid container>
        <SwipeableViews 
        axis={'x'}
        enableMouseEvents
        >
          <Paper>
        <Scheduler
          data={data[index]}
          // height={660}
        >
          <WeekView
            startDayHour={7}
            endDayHour={20}
          />
          <Toolbar {...loading ? { rootComponent: ToolbarWithLoading } : null}/>
          <Appointments />
        </Scheduler>
      </Paper>
      </SwipeableViews>
      <MobileStepper
        steps={data.length}
        position='static'
        variant='dots'
        activeStep={index}
        nextButton={
          <Button size="small" onClick={this.showNext.bind(this)} disabled={index === data.length - 1}>
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={this.showPrev.bind(this)} disabled={index === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
      </Grid>
    );
  }
}

