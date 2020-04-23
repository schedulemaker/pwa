import React, {useState, createRef} from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Auth } from "aws-amplify";

/*function validateForm() {
  return fields.email.length > 0 && fields.password.length > 0;
}*/

async function signUp(email, password, updateFormType) {
  try {
    await Auth.signUp(email, password)
    console.log('sign up success!')
    updateFormType('confirmSignUp')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

async function confirmSignUp(email, confirmationCode, updateFormType) {
  try {
    await Auth.confirmSignUp(email, confirmationCode)
    console.log('confirm sign up success!')
    updateFormType('signIn')
  } catch (err) {
    console.log('error signing up..', err)
  }
}

async function signIn(email, password, updateFormType) {
    try {
      await Auth.signIn(email, password)
      console.log('sign in success!')
      updateFormType('base');
    } catch (err) {
      console.log('error signing up..', err)
    }
  }

export default function Form() {
  const [formType, updateFormType] = useState('signIn');
  const [email, setEmail] = useState('');
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmRef = createRef();
  const codeRef = createRef();

  const SignIn = function() {
    return (
      <Grid container justify="center" alignItems="center">
       <Grid item>
    <Card>
        
        <CardContent>
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
              // key="loginemail"
              autoFocus
              inputRef={emailRef}
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
              // key="loginpassword"
              // autoFocus
              autoComplete="current-password"
              inputRef={passwordRef}
            />
             </CardContent>
            <CardActions>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              //disabled={!validateForm()}
              onClick={() => signIn(emailRef.current.value, passwordRef.current.value, updateFormType)}
            >
              Sign In
            </Button>
            </CardActions>
            <p style={styles.footer}>
            Need an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signUp')}
            >Sign Up</span>
          </p>
            </Card>
      </Grid>
      </Grid> 
    )
  }

  const SignUp = function() {
    return (
      <Grid container justify="center" alignItems="center">
      <Grid item>
    <Card>
        
        <CardContent>
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
              key="signupemail"
              // autoFocus
              // onChange={e => {e.persist();}}
              inputRef={emailRef}
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
              key="signuppassword"
              autoComplete="current-password"
              inputRef={passwordRef}
              // autoFocus
              // onChange={e => {e.persist();}}
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
              key="confirmpassword"
              inputRef={passwordConfirmRef}
              // onChange={e => {e.persist();}}
            />
            </CardContent>
            <CardActions>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                setEmail(emailRef.current.value);
                signUp(emailRef.current.value, passwordRef.current.value, updateFormType);
              }}
              //disabled={!validateForm()}
              >
              Sign Up
            </Button>
            </CardActions>
            <p style={styles.footer}>
            Already have an account? <span
              style={styles.anchor}
              onClick={() => updateFormType('signIn')}
            >Sign In</span>
          </p>
      </Card>
      </Grid>
      </Grid>
    )
  } 
  
  const ConfirmSignUp = function(){
    return (
      <Grid container justify="center" alignItems="center">
       <Grid item>
    <Card>
      <CardContent>
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
                key="code"
                // onChange={e => {e.persist();}}
                inputRef={codeRef}
              /> 
              </CardContent>
              <CardActions>
              <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => confirmSignUp(email, codeRef.current.value, updateFormType)}
              //disabled={!validateForm()}
            >
              Verify
            </Button>
           </CardActions>
           </Card>
      </Grid>
      </Grid>
    )
  }

  return (
    <div>
        {formType === 'signUp' && (<SignUp key="signupForm"/>)}
        {formType === 'signIn' && (<SignIn key="signinForm"/>)}
        {formType === 'confirmSignUp' && (<ConfirmSignUp key="confirmForm"/>)}
    </div>
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

