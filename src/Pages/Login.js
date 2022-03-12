import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, getAuth } from "firebase/auth";
import { auth } from "../services/firebase";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/thesessionlogo.png';

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginPasswordError, setLoginPasswordError] = useState("");
  const [loginEmailError, setLoginEmailError] = useState("");
  const [user, setUser] = useState({});

  const theme = createTheme({
    palette: {
      primary: {
        main: '#e5b219',
      },
    },
  });
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
    } catch (error) {
      console.log(error.message);
      setLoginEmailError(
        error.message === "Firebase: Error (auth/invalid-email)." &&
          "Invalid Email"
      );
      setLoginPasswordError(
        error.message === "Firebase: Error (auth/internal-error)." &&
          "Incorrect Password"
      );
    }
  };
  
  return (
    <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/rPOmLGwai2w)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={logo} sx={{ m: 1, bgcolor: 'secondary.main', width: 160, height: 115 }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome to The Session
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <div className="formFields">
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => { setLoginEmail(event.target.value); }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => { setLoginPassword(event.target.value); }}
            />
            </div>
            <br />
            <div>
              <b>{loginEmailError}</b>
              <b>{loginPasswordError}</b>
            </div>
            <Link style={{ textDecoration: 'none' }} to="/home"><Button type="submit" onClick={login} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>Sign In</Button></Link>
            <Grid container>
              {/* <Grid item xs>
                <Button onClick={reset}>Forgot password?</Button>   
              </Grid> */}
              <Grid item>
                <Link style={{ textDecoration: 'none' }} to ='/RegisterAccount' variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Grid>
  </ThemeProvider>
  );
}

export default App;