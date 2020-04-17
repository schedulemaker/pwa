import React, {useState} from "react";
import { 
  Grid, 
  MobileStepper, 
  Button,
  Fab,
  Tooltip,
  ClickAwayListener,
  Snackbar,
  Alert,
  IconButton 
} from "@material-ui/core";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Save,
  Close
} from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";
import {
  withStyles,
  ThemeProvider,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";
import Calendar from "../calendar";
import {getCalendarHours} from '../utils';

const useStyles = makeStyles((theme) => ({
  carouselButton: {
    background: ["rgba(255,255,255,0.1)"],
    // transform: ["translate(0, 1000%)"],
    "z-index": 10,
  },
}));


export default function ScheduleView(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const showNext = function showNext() {
    setIndex(index + 1);
  };

  const showPrev = function showPrev() {
    setIndex(index - 1);
  };

  const handleTooltipClose = () => {
    setTooltipOpen(false);
  };

  const handleTooltipOpen = () => {
    setTooltipOpen(true);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Grid container justify="center">
      <SwipeableViews axis={"x"} enableMouseEvents>
        <Calendar
          data={props.data[index]}
          hours={getCalendarHours(props.data)}
        />
      </SwipeableViews>
      <MobileStepper
        steps={props.data.length}
        position="static"
        variant="text"
        activeStep={index}
        nextButton={
          <Button
            // className={classes.carouselButton}
            variant="contained"
            size="large"
            onClick={showNext}
            disabled={index === props.data.length - 1}
          >
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button
            // className={classes.carouselButton}
            variant="contained"
            size="large"
            onClick={showPrev}
            disabled={index === 0}
          >
            <KeyboardArrowLeft />
          </Button>
        }
      />
      {props.auth && (
        <div>
          <Tooltip disableFocusListener title="Save schedule">
            <Fab aria-label="save" onClick={handleSnackbarOpen}>
              <Save />
            </Fab>
          </Tooltip>
          <Snackbar
            anchorOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={snackbarOpen}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            message="Schedule saved"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleSnackbarClose}
                >
                  <Close fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </div>
      )}
    </Grid>
  );
}
