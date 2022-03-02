import React, { Component } from "react";
import video from '../images/lpvi.mp4';
import logo from '../images/thesessionlogo.png'
import '../components/LandingPage.css'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default class Home extends Component{
    render(){
        const theme = createTheme({
            palette: {
              primary: {
                main: '#e5b219',
              },
            },
          });
        return(
            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>
            <div class="caption">
                <img src={logo} />
            </div>
            <div className="btn-login">
            <ThemeProvider theme={theme}>
                <Link style={{ textDecoration: 'none' }} to ='/login'>
                    <Button variant="contained" endIcon={<SendIcon />}>Enter Site</Button>
                </Link>
            </ThemeProvider>
            </div>
        </div>
        );
    }
}
