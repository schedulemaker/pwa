import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
  SwipeableDrawer,
  Typography,
  Button,
  Backdrop,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { Hub, Auth } from "aws-amplify";
import Form from '../form';
import {makeStyles} from '@material-ui/core/styles';

function signOut() {
  Auth.signOut()
    .then((data) => {
      console.log("signed out: ", data);
    })
    .catch((err) => console.log(err));
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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  close: {
    position: "fixed",
    top: 20,
    right: 20,
  }
}));

export default function TopNav(props) {
  const classes = useStyles();
  const [signedIn, setSignedIn] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    // set listener for auth events
    Hub.listen("auth", (data) => {
      const { payload } = data;
      if (payload.event === "signIn") {
        setBackdrop(false);
        setSignedIn(true);
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === "signOut") {
        setSignedIn(false);
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
  }, []);

  const handleBackdrop = function(){
    setBackdrop(false);
  }

  const loadSchedules = function(){
    setOpen(!open);
    props.loadSchedules();
  }

  return (
    <div>
      <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
        <Typography variant="h6">
          <Button color="inherit">
            ScheduleMaker
          </Button>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            disableSwipeToOpen={false}
            PaperProps={{ style: { minWidth: "50vw" } }}
          >
            {signedIn ? (
              <Button
                onClick={() => {
                  setOpen(!open);
                  signOut();
                }}
              >
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setOpen(!open);
                  setBackdrop(true);
                }}
              >
                Sign In
              </Button>
            )}
            {signedIn && (
              <Button onClick={loadSchedules}>Load Schedules</Button>
            )}
            
            {/* <Button>Save Schedule</Button> */}
          </SwipeableDrawer>
        </Typography>
      </Toolbar>
    </AppBar>
    <Backdrop className={classes.backdrop} open={backdrop}>
      <Button className={classes.close} onClick={handleBackdrop} color='inherit'>
        <Close />
      </Button>
        <Form/>
      </Backdrop>
    </div>
  );
}
