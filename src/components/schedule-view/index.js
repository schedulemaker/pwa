import React, { useState, useEffect } from "react";
import {
  Grid,
  MobileStepper,
  Button,
  Fab,
  Tooltip,
  ClickAwayListener,
  Snackbar,
  IconButton,
  Card,
  CardContent,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import {
  KeyboardArrowLeft,
  KeyboardArrowRight,
  Save,
  Close,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views";
import Calendar from "../calendar";
import { getCalendarHours } from "../utils";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import awsconfig from "../../aws-exports";
import { saveUserSchedule } from "../../graphql/mutations";
Amplify.configure(awsconfig);

const useStyles = makeStyles(() => ({
  fab: {
    position: "fixed",
    bottom: 100,
    right: 40,
  },
  stepper: {
    maxWidth: 200,
    flexGrow: 1,
  },
}));

export default function ScheduleView(props) {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const saveSchedule = async function () {
    const params = {
      sections: props.data[index],
      username: "test",
    };
    try {
      await API.graphql(graphqlOperation(saveUserSchedule, params));
      setSnackbarMessage("Schedule saved!");
    } catch (error) {
      console.log(error);
      setSnackbarMessage("An error occurred");
    }
    handleSnackbarOpen();
  };

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

  useEffect(() => {
    setIndex(0);
  }, [props.data]);

  return (
    <Grid container justify="center">
      {props.data.length > 0 ? (
        <Calendar
          data={props.data.length > 0 ? props.data[index].sections : []}
          hours={getCalendarHours(props.data.map((i) => i.sections))}
        />
      ) : (
        <Card>
          <CardContent>
            <Alert severity="error">
              <AlertTitle>No schedules found</AlertTitle>
              Try making a request on the home screen or adjusting your
              filtering options
            </Alert>
          </CardContent>
        </Card>
      )}
      <MobileStepper
        className={classes.stepper}
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
            <Fab
              aria-label="save"
              onClick={saveSchedule}
              className={classes.fab}
            >
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
            message={snackbarMessage}
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
