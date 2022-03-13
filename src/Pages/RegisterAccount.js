import * as React from 'react';
import { useState } from "react";
import { createUserWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";
import { auth } from "../services/firebase";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import logo from '../images/thesessionlogo.png';
function App() {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
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

    const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      alert("Account Created. Feel free to sign in!")
    } catch (error) {
      console.log(error.message);
      if(error.message === "Firebase: Error (auth/invalid-email)."){
        alert("Invalid Email")
      }
      if(error.message === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
        alert("Password should be at least 6 characters.")
      }
      if(error.message === "Firebase: Error (auth/email-already-in-use)."){
        alert("Email already in use. Please try again.")
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src={logo} sx={{ m: 1, bgcolor: 'secondary.main', width: 160, height: 115 }}>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(event) => {
                    setRegisterEmail(event.target.value);
                }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={(event) => {
                    setRegisterPassword(event.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <br></br>
            <Button type="button" variant="contained" onClick={register}>Create Account</Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
export default App;