import React, {useState} from "react";
import {AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, Button} from "@material-ui/core"
import {Menu} from "@material-ui/icons";

export default function TopNav(props){


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
);
}


       /*   <Button color="inherit" onClick={() => props.updateFormState('email')}>
           Signup
          </Button>

          <Button color="inherit" onClick={() => props.updateFormState('email')}>
           Login
          </Button> */