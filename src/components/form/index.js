import React, {useState, useReducer} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Auth } from "aws-amplify";
const initialFormState = {
  email: '', password: '',confirmationCode: ''
}

function reducer(state, action) {
  switch(action.type) {
    case 'updateFormState':
      return {
        ...state, [action.e.target.name]: action.e.target.value
      }
    default:
      return state
  }
}

/*function validateForm() {
  return fields.email.length > 0 && fields.password.length > 0;
}*/

async function signUp({ email, password}, updateFormType) {
  try {
    await Auth.signUp(email, password)
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

async function confirmSignUp({email, confirmationCode }, updateFormType) {
  try {
    await Auth.confirmSignUp(email, confirmationCode)
    console.log('confirm sign up success!')
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

async function signIn({ email, password }) {
    try {
      await Auth.signIn(email, password)
      console.log('sign in success!')
    } catch (err) {
      console.log('error signing up..', err)
    }
  }

export default function Form() {
  const [formType, updateFormType] = useState('signUp')
  const [formState, updateFormState] = useReducer(reducer, initialFormState)

  function renderForm() {
    switch(formType) {
      case 'signUp':
        return (
          <SignUp
            signUp={() => signUp(formState, updateFormType)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      case 'confirmSignUp':
        return (
          <ConfirmSignUp
            confirmSignUp={() => confirmSignUp(formState, updateFormType)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      case 'signIn':
        return (
          <SignIn
            signIn={() => signIn(formState)}
            updateFormState={e => updateFormState({ type: 'updateFormState', e })}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      <div>
        {renderForm(formState)}
      </div>
      {
        formType === 'signUp' && (
          <p style={styles.footer}>
            Already have an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signIn')}
            >Sign In</span>
          </p>
        )
      }
      {
        formType === 'signIn' && (
          <p style={styles.footer}>
            Need an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signUp')}
            >Sign Up</span>
          </p>
        )
      }
    </div>
  )
}
function SignUp(props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
       <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
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
            onChange={e => {e.persist();props.updateFormState(e)}}
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
            onChange={e => {e.persist();props.updateFormState(e)}}
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
            onChange={e => {e.persist();props.updateFormState(e)}}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.signUp}
            //disabled={!validateForm()}
            >
            Sign Up
          </Button>
      </div>
    </Container>
  )
} 

function ConfirmSignUp(props){
  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div>
          <Typography component="h1" variant="h5">
            Enter Confirmation Code
          </Typography>
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
              onChange={e => {e.persist();props.updateFormState(e)}}
            /> 
            <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.confirmSignUp}
            //disabled={!validateForm()}
          >
            Verify
          </Button>
    </div>
  </Container>
  )
}
  
 function SignIn(props) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
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
            onChange={e => {e.persist();props.updateFormState(e)}}
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
            onChange={e => {e.persist();props.updateFormState(e)}}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            //disabled={!validateForm()}
            onClick={props.signIn}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  )
}


const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 150,
      justifyContent: 'center',
      alignItems: 'center'
    },
    input: {
      height: 45,
      marginTop: 8,
      width: 300,
      maxWidth: 300,
      padding: '0px 8px',
      fontSize: 16,
      outline: 'none',
      border: 'none',
      borderBottom: '2px solid rgba(0, 0, 0, .3)'
    },
    button: {
      backgroundColor: '#006bfc',
      color: 'white',
      width: 316,
      height: 45,
      marginTop: 10,
      fontWeight: '600',
      fontSize: 14,
      cursor: 'pointer',
      border:'none',
      outline: 'none',
      borderRadius: 3,
      boxShadow: '0px 1px 3px rgba(0, 0, 0, .3)',
    },
    footer: {
      fontWeight: '600',
      padding: '0px 25px',
      textAlign: 'center',
      color: 'rgba(0, 0, 0, 0.6)'
    },
    anchor: {
      color: '#006bfc',
      cursor: 'pointer'
    }
  }

