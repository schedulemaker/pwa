<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, Button } from "@material-ui/core"
import { Menu } from "@material-ui/icons";
import { Hub, Auth } from "aws-amplify";
import { signOut } from "../app";

=======
import React, {useState, useEffect} from "react";
import {AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, Button} from "@material-ui/core"
import {Menu} from "@material-ui/icons";
import {Auth, Hub} from "aws-amplify"; 
>>>>>>> 091d16abea1c80aad31e09db8e19833e5efbe0ed

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
<<<<<<< HEAD





export default function TopNav(props) {
  const [signedIn, setSignedIn] = useState(false)
  const [open, setOpen] = useState(false)
=======


export default function TopNav(props){
  const [signedIn, setSignedIn] = useState(false)
>>>>>>> 091d16abea1c80aad31e09db8e19833e5efbe0ed
  useEffect(() => {
    // set listener for auth events
    Hub.listen('auth', (data) => {
      const { payload } = data
      if (payload.event === 'signIn') {
        setSignedIn(true)
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === 'signOut') {
        setSignedIn(false)
      }
    })
    // we check for the current user unless there is a redirect to ?signedIn=true 

  }, [])

<<<<<<< HEAD

  return (

    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit" onClick={() => setOpen(!open)}>
          <Menu />
        </IconButton>
        <Typography variant="h6">
          <Button color="inherit" onClick={() => props.updateFormState('base')}>
            ScheduleMaker
  </Button>
          <SwipeableDrawer
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            disableSwipeToOpen={false}
            PaperProps={{ style: { minWidth: "50vw" } }}>           
            {signedIn && (
            <Button onClick={() =>  {
              props.updateFormState('base') 
               setOpen(!open)
         }}>
              Sign Out
              </Button>
            )
        }
            {!signedIn && (
            <Button onClick={() =>  {
                 props.updateFormState('email') 
                  setOpen(!open)
            }}>
              Sign In
              </Button>
            )
        }
             <Button >Load Schedule</Button>
             <Button >Save Schedule</Button> 
          </SwipeableDrawer>

        

        </Typography>
      </Toolbar>
    </AppBar>
  )
}



=======
  return(
<AppBar position="static">
<Toolbar>
  <IconButton color="inherit">
    <Menu />
  </IconButton>
  <Typography variant="h6">
 <Button color="inherit" onClick={() => props.updateFormState('base')}>
   ScheduleMaker
  </Button>
  
  </Typography>
  </Toolbar>
      </AppBar>
      )
  }
>>>>>>> 091d16abea1c80aad31e09db8e19833e5efbe0ed
