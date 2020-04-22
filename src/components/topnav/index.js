import React, {useState} from "react";
import {AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, Button} from "@material-ui/core"
import {Menu} from "@material-ui/icons";
import {Auth} from "aws-amplify"; 

async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser()
    console.log('user: ', user)
    dispatch({ type: 'setUser', user })
  } catch (err) {
    console.log('err: ', err)
    dispatch({ type: 'loaded' })
  }

  
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


export default function TopNav(props){
  const [signedIn, setSignedIn] = useState(false)


  return(
    if(!signedIn &&
<AppBar position="static">
<Toolbar>
  <IconButton color="inherit">
    <Menu />
  </IconButton>
  <Typography variant="h6">
 <Button color="inherit" onClick={() => props.updateFormState('base')}>
   ScheduleMaker
  </Button>

  <Button color="inherit" onClick={() => props.updateFormState('base')}>
   Sign In
  </Button>
  </Typography>
  </Toolbar>
      </AppBar>
}
      )



       /*   <Button color="inherit" onClick={() => props.updateFormState('email')}>
           Signup
          </Button>

          <Button color="inherit" onClick={() => props.updateFormState('email')}>
           Login
          </Button> */