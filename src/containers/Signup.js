import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Amplify, { Auth } from "aws-amplify";
import awsconfig from '../aws-exports';
import { useAppContext } from "../libs/contextLib";
import { useHistory } from "react-router-dom";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
Amplify.configure(awsconfig);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Signup() {
const history = useHistory();
const [newUser, setNewUser] = useState(null);
  const classes = useStyles();
  const { userHasAuthenticated } = useAppContext();
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword:"",
    confirmationCode: "",
  });

  function validateForm() {
    return fields.email.length > 0 && 
    fields.password.length > 0 &&
    fields.password === fields.confirmPassword;
  }
  
  function validateConfirmationForm() {
    return fields.confirmationCode.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newUser = await Auth.signUp({
        username: fields.email,
        password: fields.password,
      });

      setNewUser(newUser);
    } catch (e) {
      onError(e);
    }
}
  
    async function handleConfirmationSubmit(event) {
        event.preventDefault();
      
       
      
          try {
          await Auth.confirmSignUp(fields.email, fields.confirmationCode);
          await Auth.signIn(fields.email, fields.password);
      
          userHasAuthenticated(true);
          history.push("/");
        } catch (e) {
          onError(e);
         
        }
      }

function renderConfirmationForm(){
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Enter Confirmation Code
            </Typography>
            <form className={classes.form} onSubmit= {handleConfirmationSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="confirmationCode"
                type="tel"
                label="Confirmation Code"
                name="confirmationCode"
                autoComplete="confirmationCode"
                autoFocus
                value={fields.confirmationCode}
                onChange={handleFieldChange}
              /> <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={!validateForm()}
            >
              Verify
            </Button>
               </form>
      </div>
    </Container>
    );
}

function renderForm() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit= {handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={fields.email}
            onChange={handleFieldChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={fields.password}
            onChange={handleFieldChange}
          />

         <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={!validateForm()}
          >
            Sign Up
          </Button>
        
        </form>
      </div>
    </Container>
  );
}

return (
    <div className="Signup">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}
