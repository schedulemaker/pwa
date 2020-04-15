import React from "react";
import {
    List,
  ListItem,
  ListItemIcon,
  Divider,
  Card, 
  CardHeader,
  Grid,
  Checkbox,
  Button,
  ListItemText,
  Paper
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
    not,
    intersection
} from '../utils';
import {
    getBannerMetadata
} from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

  const useStyles = makeStyles((theme) => ({
    root: {
      margin: "auto",
    },
    paper: {
      width: 200,
      height: 230,
      overflow: "auto",
    },
    button: {
      margin: theme.spacing(0.5, 0),
    },
  }));

  async function fetchInstructors(school, term) {
    const queryParams = {
        school: school,
        term: term,
        method: 'getInstructors',
        params: {
            term: term
        }
    };
    const result = await API.graphql(graphqlOperation(getBannerMetadata, queryParams));
    return result.data.getBannerMetadata;
  };

  export default function TransferList(props) {
    const classes = useStyles();
    const [instructors, setInstructors] = React.useState([]);
    const [checked, setChecked] = React.useState([]);
    const [left, setLeft] = React.useState([]);
    const [right, setRight] = React.useState([]);
    if (instructors.length === 0){
        fetchInstructors(props.school, props.term)
            .then(data => {
                // setInstructors(data);
                // setLeft(data.map(i => i.description));
                console.log(data);
            });
    } 

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const handleAllRight = () => {
      setRight(right.concat(left));
      setLeft([]);
    };

    const handleCheckedRight = () => {
      setRight(right.concat(leftChecked));
      setLeft(not(left, leftChecked));
      setChecked(not(checked, leftChecked));
    };

    const handleCheckedLeft = () => {
      setLeft(left.concat(rightChecked));
      setRight(not(right, rightChecked));
      setChecked(not(checked, rightChecked));
    };

    const handleAllLeft = () => {
      setLeft(left.concat(right));
      setRight([]);
    };

    const customList = (items) => (
      <Paper className={classes.paper}>
        <List dense component="div" role="list">
          {items.map((value) => {
            const labelId = `transfer-list-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </Paper>
    );

    return (
      <Grid
        container
        spacing={2}
        justify="center"
        alignItems="center"
        className={classes.root}
      >
        <Grid item>{customList(left)}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              variant="outlined"
              size="small"
              className={classes.button}
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right)}</Grid>
      </Grid>
    );
  }