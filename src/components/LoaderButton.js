import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    paddingLeft: theme.spacing.unit
  },

  input: {
    display: 'none',
  },

  circularProgress: {
    marginLeft: 0,
    marginRight: theme.spacing.unit,
  },

});

function LoaderButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button} disabled>
        <CircularProgress className={classes.circularProgress} size={20}/>
        Loading
      </Button>
    </div>
  );
}

LoaderButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoaderButton);
