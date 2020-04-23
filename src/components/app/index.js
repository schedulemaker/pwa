import React, { useState, useEffect, useReducer } from "react";
import {
  AppBar,
  Typography,
  Button,
  Grid,
  CssBaseline,
  Toolbar,
  IconButton,
  ButtonBase,
  SwipeableDrawer,
  Backdrop,
} from "@material-ui/core";
import { Menu as MenuIcon, PermDataSettingRounded } from "@material-ui/icons";
import Routes from "../../Routes";
import { AppContext } from "../../libs/contextLib";
import Amplify, { Auth, Hub, API, graphqlOperation } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { onError } from "../../libs/errorLib";
import BotNav from "../bottom-nav";
import ScheduleView from "../schedule-view";
import Filters from "../filters";
import Form from "../form";
// import Labs from '../labs';
import { createSchedules } from "../../graphql/mutations";
import { getUserSchedules } from "../../graphql/queries";
import TopNav from "../topnav";
import awsconfig from "../../aws-exports";
import Buttons from "../buttons";
import {
  getTimeBoundries,
  getInstructors,
  getDays,
  getScheduleTimes,
  getDensity,
} from "../utils";
Amplify.configure(awsconfig);

async function makeSchedules(school, term, courses, campuses) {
  const queryParams = {
    courses: courses,
    campuses: campuses,
    school: school,
    term: term,
  };
  const query = createSchedules.replace("isOpen", "").replace("weeks", "");
  const result = await API.graphql(graphqlOperation(query, queryParams));
  return result.data.createSchedules;
}

const containerStyles = {

  // height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center",
};

function getProfs(schedules) {
  return Array.from(new Set(schedules.map((s) => s.instructors).flat()));
}

const school = "temple",
  term = 202036;
const courses = ["CIS-1051", "CIS-1001", "MATH-1041"];
const campuses = ["MN"];
const initialUserState = { user: null, loading: true };

function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState);
  const [formState, updateFormState] = useState("base");
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [index, setIndex] = useState(0);
  const [filters, setFilters] = useState({
    start: 0,
    end: 2400,
    days: null,
    instructors: null,
    commute: false,
    distance: "Default",
    density: "Default",
  });

  const loadSchedules = async function () {
    try {
      const result = await API.graphql(
        graphqlOperation(getUserSchedules, { username: "test" })
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const filterSchedule = function (s) {
    let result = true;
    if (filters.start) {
      result = result && s.times[0] >= filters.start;
    }

    if (filters.end) {
      result = result && s.times[1] <= filters.end;
    }

    if (filters.days) {
      result =
        result &&
        Object.keys(filters.days).every((k) => filters.days[k] === s.days[k]);
    }

    if (filters.instructors) {
      result =
        result && filters.instructors.every((i) => s.instructors.includes(i));
    }

    if (filters.commute) {
      result = result && s.commute;
    }

    return result;
  };

  const sortDistance = function (a, b) {
    switch (filters.distance) {
      case "Shortest":
        return a.totalDistance - b.totalDistance;
      case "Longest":
        return b.totalDistance - a.totalDistance;
      default:
        return 0;
    }
  };

  const sortDensity = function (a, b) {
    switch (filters.density) {
      case "Compact":
        return a.density - b.density;
      case "Spread out":
        return b.density - a.density;
      default:
        return 0;
    }
  };

  const changeFilters = function (key, value) {
    setFilters({
      ...filters,
      [key]: value,
    });
  };

  // useEffect(() => {
  //   console.log(filters);
  // }, [filters])

  useEffect(() => {
    const [start, end] = getScheduleTimes(schedules.map((s) => s.sections));
    setFilters({
      ...filters,
      start: start,
      end: end,
    });
  }, [schedules]);

  const apiCall = () => {
    makeSchedules(school, term, courses, campuses).then((result) => {
      const data = result.map((schedule) => {
        return {
          ...schedule,
          times: getTimeBoundries(schedule.sections),
          instructors: getInstructors(schedule.sections),
          days: getDays(schedule.sections),
          density: getDensity(schedule.sections),
        };
      });
      setSchedules(data);
      console.log("Success");
      console.log(data);
      setTab(1);
    });
  };

  function renderView() {
    switch (tab) {
      case 0:
        return (
          <div>
            {/* <Labs></Labs> */}
            <Button color="inherit" onClick={apiCall}>
              API Call
            </Button>
            <Button color="inherit" onClick={loadSchedules}>
              Load Schedules
            </Button>
          </div>
        );
      case 1:
        return (
          <ScheduleView
            data={schedules
              .filter(filterSchedule)
              .sort(sortDistance)
              .sort(sortDensity)}
            index={index}
            setIndex={setIndex}
          />
        );
      case 2:
        return (
          <Filters
            times={[filters.start, filters.end]}
            school={school}
            term={term}
            count={schedules.filter(filterSchedule).length}
            instructors={getProfs(schedules)}
            instructorFilter={filters.instructors}
            changeFilters={changeFilters}
            days={filters.days}
            rankings={[filters.density, filters.distance, filters.commute]}
          />
        );
      default:
        return new Error("this view doesnot exist");
    }
  }

  useEffect(() => {
    // set listener for auth events
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        setImmediate(() => dispatch({ type: "setUser", user: payload.data }));
        setImmediate(() =>
          window.history.pushState({}, null, "http://localhost:3000/")
        );
        updateFormState("base");
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === "signOut") {
        setTimeout(() => dispatch({ type: "setUser", user: null }), 350);
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes("?signedin=true")) {
      checkUser(dispatch);
    }
  }, []);

  if (formState === "email") {
    return (
      <div>
        <Grid container direction="column">
          <TopNav updateFormState={updateFormState} />
          <div style={containerStyles}>
            <Form />
          </div>
          <BotNav
            value={tab}
            onChange={setTab}
            disableCalendarView={schedules.length === 0}
          />
        </Grid>
      </div>
    );
  }

  return (
    <div>
      <Grid container direction="column">
        <TopNav updateFormState={updateFormState}></TopNav>
      </Grid>

      {userState.loading && <p>Loading</p>}

      {!userState.user && !userState.loading && (
        <Buttons updateFormState={updateFormState} />
      )}

      {userState.user && userState.user.signInUserSession && (
        <SwipeableDrawer
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          disableSwipeToOpen={false}
          PaperProps={{ style: { minWidth: "50vw" } }}
        >
          <span>
            Welcome {userState.user.signInUserSession.idToken.payload.email}
          </span>
          <Button onClick={signOut}>Sign Out</Button>
          <Button onClick={loadSchedules}>Load Schedule</Button>
          <Button onClick={apiCall}>Save Schedule</Button>
        </SwipeableDrawer>
      )}

      <div style={containerStyles}>{renderView()}</div>

      <BotNav value={tab} onChange={setTab} />
    </div>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return { ...state, user: action.user, loading: false };
    case "loaded":
      return { ...state, loading: false };
    default:
      return state;
  }
}

async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    dispatch({ type: "setUser", user });
  } catch (err) {
    console.log("err: ", err);
    dispatch({ type: "loaded" });
  }
}

function signOut() {
  Auth.signOut()
    .then((data) => {
      console.log("signed out: ", data);
    })
    .catch((err) => console.log(err));
}

export default App;
