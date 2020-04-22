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
    const [current, setCurrent] = useState([]);
    // const [searchDefault, setSearchDefault] = useState([]);

    const handleInputChange = function(event, value){
      value.length === 0 ?
        props.changeFilters('instructors', null) :
        props.changeFilters('instructors', value.map(v => v.code));
        // setSearchDefault(value);
    }

    useEffect(() => {
      fetchInstructors(props.school, props.term).then((data) => {
        setData(data.map(d => {
          return {
            code: Number.parseInt(d.code),
            description: d.description
          }
        }));
      });
    }, [props.school, props.term]);

    useEffect(() => {
      setCurrent(data.filter(x => props.instructors.includes(x.code)));
    }, [data, props.instructors])

    return (
      <div className={classes.root}>
        {data.length === 0 ? (
          <Skeleton animation="wave" />
        ) : (
          <Autocomplete
            onChange={handleInputChange}
            multiple
            limitTags={2}
            value={props.instructorFilter ? current.filter(x => props.instructorFilter.includes(x.code)) : []}
            // autoComplete
            id="instructor-search"
            options={current}
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