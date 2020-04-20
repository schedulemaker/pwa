import React, {useState} from "react";
import {AppBar, Toolbar, Avatar, IconButton, SwipeableDrawer, Typography, Button} from "@material-ui/core"
import {Menu} from "@material-ui/icons";

export default function TopNav(props){
const [open, setOpen] = useState(false);

return(
<AppBar position="static">
<Toolbar>
  <IconButton color="inherit" onClick={() => setOpen(!open)}>
    <Menu />
  </IconButton>
  <Typography variant="h6">
 <Button color="inherit" onClick={() => props.updateFormState('base')}>
   ScheduleMaker
  </Button>
  </Typography>
  <SwipeableDrawer
    open ={open}
    onClose ={() => setOpen(false)}
    onOpen ={() => setOpen(true)}
    disableSwipeToOpen={false}
    PaperProps ={{ style: { minWidth: "50vw"}}}
    >
        <span>Hello</span>
    </SwipeableDrawer>
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