import React, { 
  useEffect,
  useState 
} from "react";
import {
    Chip,
    TextField,
} from '@material-ui/core';
import {
  Autocomplete,
  Skeleton
} from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import {
    getBannerMetadata
} from '../../graphql/queries';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
Amplify.configure(awsconfig);

  async function fetchInstructors(school, term) {
    const queryParams = {
      school: school,
      term: term,
      method: "getInstructors",
      params: {
        term: term,
      },
    };
    const result = await API.graphql(
      graphqlOperation(getBannerMetadata, queryParams)
    );
    return result.data.getBannerMetadata;
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      "& > * + *": {
        marginTop: theme.spacing(3),
      },
    },
  }));

  export default function IntructorSearch(props) {
    const classes = useStyles();
    const [data, setData] = useState([]);

    const handleInputChange = function(event, value){
      value.length === 0 ?
        props.changeFilters('instructors', null) :
        props.changeFilters('instructors', value.map(v => Number.parseInt(v.code)));
    }

    useEffect(() => {
      fetchInstructors(props.school, props.term).then((data) => {
        setData(data);
      });
    }, [props.school, props.term]);

    return (
      <div className={classes.root}>
        {data.length === 0 ? (
          <Skeleton animation="wave" />
        ) : (
          <Autocomplete
          onChange={handleInputChange}
            multiple
            limitTags={2}
            // autoComplete
            id="instructor-search"
            options={data.filter(x => props.instructors.includes(Number.parseInt(x.code)))}
            getOptionLabel={(option) => option.description}
            filterSelectedOptions
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Preferred instructors"
                placeholder="Instructors"
              />
            )}
          />
        )}
      </div>
    );
  }