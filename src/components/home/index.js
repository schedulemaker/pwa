import React from "react";
import { 
    AppBar, 
    Menu, 
    Icon, 
    IconButton, 
    Toolbar, 
    Typography, 
    Button,
    MenuItem,
    SwipeableDrawer,
    List,
    ListItem,
    Divider,
    ListItemText,
    ListItemIcon
} from "@material-ui/core";
import { createStyles, makeStyles, createMuiTheme } from "@material-ui/core/styles";
import orange from '@material-ui/core/colors/orange';
import indigo from '@material-ui/core/colors/indigo';
import clsx from 'clsx';

import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Save from "@material-ui/icons/Save";
import Load from "@material-ui/icons/GetApp";
import Info from "@material-ui/icons/Info";

/**
 * DEFINE STYLES
 */

const theme = createMuiTheme({
    palette: {
        primary: orange,
        secondary: indigo
    },
});

const drawerWidth = 250;
const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    appbar: {
      zIndex: theme.zIndex.drawer + 1
    },
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerPaper: {
      width: drawerWidth
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-end"
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    hide: {
      display: "none"
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  })
);

const Home = props => {

  const classes = useStyles();
  /**
   * SET STATE
   */
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [drawer, setDrawer] = React.useState(false);

  /**
   * EVENT HANDLERS
   */
  const login = () => {
      setAuth(true);
      closeAccountMenu();
  };

  const logout = () => {
      setAuth(false);
  }

  const openAccountMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const closeAccountMenu = () => {
    setAnchorEl(null);
  };

  const openDrawer = () => {
      setDrawer(true);
  }

  const closeDrawer = () => {
      setDrawer(false);
  }

  return (
    <div>
        <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={openDrawer}>
         <MenuIcon />
        </IconButton>
        <Typography varient="h6" className={classes.title}>
            ScheduleMaker
        </Typography>
        {/* This will only show if user is not logged in */}
        {!auth && (
            <Button color="inherit" onClick={login}>Login</Button>
        )}
        {/* This will only show if the user is logged in */}
        {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={openAccountMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={closeAccountMenu}
              >
                <MenuItem onClick={closeAccountMenu}>My account</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
      </Toolbar>
    </AppBar>
    <SwipeableDrawer className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper,
        }}>
        <IconButton onClick={closeDrawer}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
          <Divider />
          <List>
              {['Load Schedules', 'Save Schedules'].map((text, index) => (
                  <ListItem button key={text}>
                      <ListItemIcon>{index % 2 === 0 ? <Load /> : <Save />}</ListItemIcon>
                      <ListItemText primary={text} />
                  </ListItem>
              ))}
          </List>
          <Divider />
          <ListItem button key={'About'}>
              <ListItemIcon><Info/></ListItemIcon>
              <ListItemText primary={'About'} />
          </ListItem>
    </SwipeableDrawer>
    </div>
  );
};

export default Home;
