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
  CircularProgress,
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
import Labs from '../labs';
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
import {makeStyles} from '@material-ui/core/styles';
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  main: {
    overflow: 'auto',
  marginBottom: '10%'
  }
}));


function getProfs(schedules) {
  return Array.from(new Set(schedules.map((s) => s.instructors).flat()));
}

function App() {
  const classes = useStyles();
  const [backdropContent, setBackdropContent] = useState((<div></div>));
  const [courses, setCourses] = useState(["CIS-1051", "CIS-1001", "MATH-1041"]);
  const [campuses, setCampuses] = useState(["MN"]);
  const [school, setSchool] = useState('temple');
  const [term, setTerm] = useState(202036);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [index, setIndex] = useState(0);
  const [signedIn, setSignedIn] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [user, setUser] = useState(null);
  const [filters, setFilters] = useState({
    start: 0,
    end: 2400,
    days: null,
    instructors: null,
    commute: false,
    distance: "Default",
    density: "Default",
  });

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setSignedIn(true)
        Auth.currentAuthenticatedUser()
          .then(user => setUser(user))
          .catch(err => console.log(err));
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setSignedIn(false)
        setUser(null);
        setSchedules([]);
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true 

  }, [])

  const makeSchedules = async function() {
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

  const loadSchedules = async function () {
    setBackdropContent((<CircularProgress color='inherit' />));
    setBackdrop(true);
    try {
      const query = getUserSchedules//.replace('scheduleId', '').replace('username', '');
      const result = await API.graphql(
        graphqlOperation(query, { username: user.username})
      );
      console.log(result);
      setSchedules(result.data.getUserSchedules.map(x => x.schedule));
      setTab(1);
      setBackdrop(false);
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
    setBackdropContent((<CircularProgress color='inherit' />));
    setBackdrop(true);
    makeSchedules().then((result) => {
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
      setBackdrop(false);
      setTab(1);
    });
  };

  function renderView() {
    switch (tab) {
      case 0:
        return (
          <div>
            { <Labs></Labs> }
            <Button color="inherit" onClick={apiCall}>
              API Call
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
            auth={user}
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
        return new Error("this view does not exist");
    }
  }

  return (
    <div>
        <TopNav/>
      <div style={containerStyles}>{renderView()}</div>
      <Backdrop className={classes.backdrop} open={backdrop}>
        {backdropContent}
      </Backdrop>
      <BotNav value={tab} onChange={setTab} />
      </div>
  );
}


export default App;
