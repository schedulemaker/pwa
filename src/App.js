import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import {useHistory} from "react-router-dom";
import { Link as RouterLink } from 'react-router-dom';
import { onError } from "./libs/errorLib";


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



function App() {
  const classes = useStyles();
  const history = useHistory();
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  
  useEffect(() => {
    onLoad();
  }, []);
  
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
    <div className={classes.root}>
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
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;