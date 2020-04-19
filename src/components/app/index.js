import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Typography,
  Button,
  Grid,
  CssBaseline,
  Toolbar,
  IconButton
} from '@material-ui/core';
import {
  Menu as MenuIcon
} from '@material-ui/icons';
import Routes from "../../Routes";
import { AppContext } from "../../libs/contextLib";
import { Auth, Hub } from "aws-amplify";
import {useHistory} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { onError } from "../../libs/errorLib";
import BotNav from '../bottom-nav';
import ScheduleView from '../schedule-view';
import Filters from '../filters';
import FixedTags from '../labs';
import {
  createSchedules
} from '../../graphql/mutations';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

async function makeSchedules(school, term, courses, campuses){
  const queryParams = {
    courses: courses,
    campuses: campuses,
    school: school,
    term: term
  };
  const result = await API.graphql(
    graphqlOperation(createSchedules, queryParams)
  );
  return result.data.createSchedules;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const times = [800, 1700], school = 'temple', term = 202036
const courses = ['CIS-1051', 'CIS-1001', 'MATH-1041'];
const campuses = ['MN'];

function App() {
  const classes = useStyles();
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [tab, setTab] = useState(0);
  const [schedules, setSchedules] = useState([]);



  const containerStyles = {
    height: "calc(100vh - 112px)",
    overflow: "auto",
    textAlign: "center"
  };

  const apiCall = () => {
    makeSchedules(school, term, courses, campuses).then(result => {
      setSchedules(result);
      console.log('Success');
    });
  };

  function renderView(){
    switch(tab){
      case 0:
        return (<div></div>);
      case 1:
        return (<ScheduleView data={schedules} auth={isAuthenticated}/>);
      case 2:
        return (<Filters times={times} school={school} term={term}/>);
      default:
        return new Error("this view doesnot exist");
    }
  }
  useEffect(() => {
    onLoad();
  }, []);

  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has happened: ', data)
       if (payload.event === 'signIn') {
         console.log('a user has signed in!')
       }
       if (payload.event === 'signOut') {
         console.log('a user has signed out!')
       }
    })
  }, [])

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        onError(e);
      }
    }

    setIsAuthenticating(false);
  }

  async function handleLogout() {
    await Auth.signOut();

    userHasAuthenticated(false);

    history.push("/login");
  }

  return (
    !isAuthenticating &&
    <Grid container spacing={2}>
      <Grid container direction = "column">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <Button color="inherit" component={RouterLink} to= "/">
           ScheduleMaker
          </Button>
          </Typography>
          <Button color='inherit' onClick={apiCall}>
            API Call
          </Button>

         {isAuthenticated ?
          <Button onClick={handleLogout} color="inherit">Logout</Button>
          :<>
          <Button color="inherit" component={RouterLink} to= "/signup">
           Signup
          </Button>

          <Button color="inherit" component={RouterLink} to= "/login">
           Login
          </Button>
          </>
          }

        </Toolbar>
      </AppBar>
      <div style = {containerStyles}>
        {renderView()}
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
      </AppContext.Provider>
      </div>
      <BotNav value ={tab} onChange={setTab} disableCalendarView={schedules.length === 0} />
      </Grid>
      <CssBaseline />
    </Grid>
  );
}

export default App;
