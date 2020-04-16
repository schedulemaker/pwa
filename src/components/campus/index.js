import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function GroupOrientation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical outlined primary button group"
      >
        <Button>Mon</Button>
        <Button>Tue</Button>
        <Button>Wed</Button>
        <Button>Thur</Button>
        <Button>Fri</Button>
        <Button>Sat</Button>
        <Button>Sun</Button>
      </ButtonGroup>
      <ButtonGroup
        orientation="vertical"
        color="secondary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <Button>Main</Button>
        <Button>Ambler</Button>
        <Button>Center City</Button>
        <Button>Harrisburgh</Button>
        <Button>Health Sciences</Button>
        <Button>Temple Japan</Button>
        <Button>Temple Rome</Button>
      </ButtonGroup>

    </div>
  );
}
