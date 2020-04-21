import React, {useState, useEffect, useReducer} from 'react';
import {
  AppBar,
  Typography,
  Button,
  Grid,
  CssBaseline,
  Toolbar,
  IconButton,
  ButtonBase
} from '@material-ui/core';
import {
  Menu as MenuIcon, PermDataSettingRounded
} from '@material-ui/icons';
import Routes from "../../Routes";
import { AppContext } from "../../libs/contextLib";
import Amplify, { Auth, Hub, API, graphqlOperation} from "aws-amplify";
import {useHistory} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { onError } from "../../libs/errorLib";
import BotNav from '../bottom-nav';
import ScheduleView from '../schedule-view';
import Filters from '../filters';
import Form from '../form'
import FixedTags from '../labs';
import {
  createSchedules
} from '../../graphql/mutations';
import {getUserSchedules} from '../../graphql/queries';
import TopNav from '../topnav';
import awsconfig from '../../aws-exports';
import Buttons from '../buttons';
import {getTimeBoundries, getInstructors, getDays, getScheduleTimes} from '../utils';
import { getTime } from 'date-fns';
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

const containerStyles = {
  height: "calc(100vh - 112px)",
  overflow: "auto",
  textAlign: "center"
};

function getProfs(schedules){
  return Array.from(new Set(schedules.map(s => s.instructors).flat()));
}


const times = [800, 1700], school = 'temple', term = 202036
const courses = ['CIS-1051', 'CIS-1001', 'MATH-1041'];
const campuses = ['MN'];
const initialUserState = { user: null, loading: true };


function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState)
  const [formState, updateFormState] = useState('base')
  const [tab, setTab] = useState(0);
  const [schedules, setSchedules] = useState([]);
  const [filters, setFilters] = useState({
    times: null,
    days: null,
    instructors: schedules.length > 0 ? getProfs(schedules) : null,
    commute: null
  });

  const loadSchedules = async function(){
    try {
      const result = await API.graphql(graphqlOperation(getUserSchedules, {username: 'test'}));
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  const filterSchedule = function(s){
    let result = true;
      if (filters.times){
        result = result && s.times[0] >= filters.times[0] && s.times[1] <= filters.times[1];
      }

      if (filters.days){
        result = result && Object.keys(filters.days).every(k => filters.days[k] === s.days[k]);
      }

      if(filters.instructors){
        result = result && s.instructors.every(i => filters.instructors.includes(i));
      }

      if (filters.commute){
        result = result && s.commute
      }
      return result;
  }

  const changeFilters = function(key, value){
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  useEffect(() => {
    console.log(filters);
  }, [filters])
 

  const apiCall = () => {
    makeSchedules(school, term, courses, campuses).then(result => {
      const data = result.map(schedule => {
        return {
          sections: schedule,
          commute: false,
          totalDistance: -1,
          times: getTimeBoundries(schedule),
          instructors: getInstructors(schedule),
          days: getDays(schedule)
        }
      });
      setSchedules(data);
      console.log('Success');
      console.log(data);
    });
  };

  function renderView(){
    switch(tab){
      case 0:
        return (<div>
          <Button color="inherit" onClick={apiCall}>
        API Call
      </Button>
      <Button color='inherit' onClick={loadSchedules}>
        Load Schedules
      </Button>
        </div>);
      case 1:
        return (<ScheduleView data={schedules.filter(filterSchedule)} />);
      case 2:
        return (<Filters 
          times={getScheduleTimes(schedules.map(s => s.sections))} 
          school={school} 
          term={term} 
          count={schedules.filter(filterSchedule).length} 
          instructors={getProfs(schedules)}
          changeFilters={changeFilters}
          />);
      default:
        return new Error("this view doesnot exist");
    }
  }
  

  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setImmediate(() => dispatch({ type: 'setUser', user: payload.data }))
        setImmediate(() => window.history.pushState({}, null, 'http://localhost:3000/'))
        updateFormState('base')
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setTimeout(() => dispatch({ type: 'setUser', user: null }), 350)
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true 
    if (!window.location.search.includes('?signedin=true')) {
      checkUser(dispatch)
    }
  }, [])

   if (formState === 'email') {
    return (
      <div>
      <TopNav updateFormState={updateFormState} />
      <Form />
      </div>
      )
  } 

  return (
    <div>
      <Grid container direction = "column">
        <TopNav updateFormState = {updateFormState} />

        
        </Grid>
      <CssBaseline />
    
        
        {
          userState.loading && (
            <p>Loading</p>
          )
        }

        {
        !userState.user && !userState.loading && (
          <Buttons updateFormState={updateFormState} />
        ) 
        }
       
        { userState.user && userState.user.signInUserSession && (
          <div>
           <h4>
             Welcome {userState.user.signInUserSession.idToken.payload.email}
           </h4>
           <Button
             onClick={signOut}
           >Sign Out</Button>
           </div>
        )
        }
        <div style = {containerStyles}>{renderView()}</div>

      <BotNav value ={tab} onChange={setTab} />
      </div>
    
  )
}

function reducer (state, action) {
  switch(action.type) {
    case 'setUser':  
      return { ...state, user: action.user, loading: false }
    case 'loaded':
      return { ...state, loading: false }
    default:
      return state
  }
}

async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user: ', user)
    dispatch({ type: 'setUser', user })
  } catch (err) {
    console.log('err: ', err)
    dispatch({ type: 'loaded' })
  }
}

function signOut() {
  Auth.signOut()
    .then(data => {
      console.log('signed out: ', data)
    })
    .catch(err => console.log(err));
}

export default App;
