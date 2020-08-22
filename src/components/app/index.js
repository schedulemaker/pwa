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
  FormHelperText,
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
import Labs from "../labs";
import { createSchedules } from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
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
import { makeStyles } from "@material-ui/core/styles";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  main: {
    overflow: "auto",
    marginBottom: "15%",
  },
}));

function getProfs(schedules) {
  return Array.from(new Set(schedules.map((s) => s.instructors).flat()));
}

async function fetchInstructors(school, term) {
    const queryParams = {
      school: school,
      term: term,
      method: "getInstructors",
      params: {
        term: term,
      },
    };
    const result = await API.graphql(
      graphqlOperation(queries.getBannerMetadata, queryParams)
    );
    return result.data.getBannerMetadata;
  }

function App() {
  const classes = useStyles();
  const [backdropContent, setBackdropContent] = useState(<div></div>);
  const [courses, setCourses] = useState([]);
  const [campuses, setCampuses] = useState(["MN", "AMB", "CC"]);
  const [school, setSchool] = useState("temple");
  const [term, setTerm] = useState(202036);
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [index, setIndex] = useState(0);
  const [signedIn, setSignedIn] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [user, setUser] = useState(null);
  const [courseList, setCourseList] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [scheduleInstructors, setScheduleInstructors] = useState([]);
  const [filters, setFilters] = useState({
    start: 0,
    end: 2400,
    days: null,
    instructors: null,
    commute: false,
    distance: "Default",
    density: "Default",
  });

  const reset = function(){
      setFilters({
        start: 0,
        end: 2400,
        days: null,
        instructors: null,
        commute: false,
        distance: "Default",
        density: "Default",
      });
    //   setCourseList([]);
      setScheduleInstructors([]);
      setSchedules([]);
  }

  const mapSchedules = function(result){
    return result.map((schedule) => {
        return {
          sections: schedule,
          times: getTimeBoundries(schedule),
          instructors: getInstructors(schedule),
          days: getDays(schedule),
          density: getDensity(schedule),
        };
      });
  }

  useEffect(() => {
    // set listener for auth events
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        setSignedIn(true);
        Auth.currentAuthenticatedUser()
          .then((user) => setUser(user))
          .catch((err) => console.log(err));
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === "signOut") {
        setSignedIn(false);
        setUser(null);
        reset();
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
  }, []);

  const makeSchedules = async function () {
    const queryParams = {
      courses: courses.map((c) => c.courseName),
      campuses: campuses,
      school: school,
      term: term,
    };
    const query = createSchedules.replace("isOpen", "").replace("weeks", "");
    const result = await API.graphql(graphqlOperation(query, queryParams));
    return result.data.createSchedules;
  };

  const loadSchedules = async function () {
    setBackdropContent(<CircularProgress color="inherit" />);
    setBackdrop(true);
    try {
      const query = queries.getUserSchedules; //.replace('scheduleId', '').replace('username', '');
    //   console.log(query);
      const result = await API.graphql(
        graphqlOperation(query, { username: user.username })
      );
    //   console.log(result);
      const data = result.data.getUserSchedules.map(s => s.schedule);
    //   console.log(data);
      setSchedules(data);
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
    const [start, end] = getScheduleTimes(schedules.map((s) => s.times));
    setFilters({
      ...filters,
      start: start,
      end: end,
    });
  }, [schedules]);

  useEffect(() => {
    setIndex(0);
  }, [filters]);

  useEffect(() => {
    setScheduleInstructors(getProfs(schedules));
  }, [schedules]);

  const getCourses = async function(school, term) {
    const result = await API.graphql(graphqlOperation(queries.getCourseList));
    var set = new Set();
    var unique = [];
    result.data.getCourseList.forEach((course) => {
      if (!set.has(course.courseName)) {
        set.add(course.courseName);
        unique.push(course);
      }
    });
    return unique;
  }

  useEffect(() => {
    getCourses(school, term).then((data) => {
        setCourseList(data);
    });
  }, [school, term]);

  useEffect(() => {
    fetchInstructors(school, term).then((data) => {
      setInstructors(data.map(d => {
        return {
          code: Number.parseInt(d.code),
          description: d.description
        }
      }));
    });
  }, [school, term]);

  const apiCall = () => {
    setBackdropContent(<CircularProgress color="inherit" />);
    setBackdrop(true);
    makeSchedules().then((result) => {
        console.log(result);
        const data = mapSchedules(result);
      setSchedules(data);
      console.log("Success");
      setBackdrop(false);
      setTab(1);
    });
  };

  function renderView() {
    switch (tab) {
      case 0:
        return (
          <div style = {{ padding: 20 }}>
            <Grid container justify="center">
            <Labs courses={courses} courseList={courseList} setCourses={setCourses} school={school} term={term}/>
            </Grid>
            <div style = {{ padding: 20 }}/>
            <Grid container justify="center">
            <Button onClick={apiCall}  
                    variant="contained"
                    color="primary" 
                    disabled={courses.length < 2}           
              >Create Schedules
              </Button>
              </Grid>
              {/* <div style = {{ padding: 10 }}/>
              <Grid container justify="center">
            <Button onClick={reset}  
                    variant="contained"
                    color="secondary"            
              >Clear
              </Button>
              <FormHelperText>This clears selected courses and resets the filters</FormHelperText>
              </Grid> */}
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
            instructors={instructors.filter(i => scheduleInstructors.includes(i.code))}
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
      <TopNav loadSchedules={loadSchedules}/>
      <div className={classes.main}> {renderView()} </div>
      <Backdrop className={classes.backdrop} open={backdrop}>
        {backdropContent}
      </Backdrop>
      <BotNav value={tab} onChange={setTab} />
    </div>
  );
}

export default App;
