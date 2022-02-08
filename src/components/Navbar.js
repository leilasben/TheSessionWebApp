import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import firebase from 'firebase/compat/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../services/firebase";
import logo from '../images/thesessionlogo.png';
function SignOut() {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()} className='nav-links' color="primary" variant="contained" startIcon={<LogoutIcon />}>Sign Out</Button>
      )
    }
function Navbar() {
    const [user] = useAuthState(auth);

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // toggling and resizing buttons for responsiveness
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else { 
            setButton(true)
        }
    };

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#e5b219',
          },
        },
      });

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
                        <a><img src ={logo} width="200" height="100"></img></a>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/Account' className='nav-links'
                                onClick={closeMobileMenu}>
                                My Account
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <ThemeProvider theme={theme}>
                            <SignOut />
                            </ThemeProvider>
                            {/* <Link to='/signup' className='nav-links'
                                onClick={closeMobileMenu}>
                                Sign Out
                            </Link> */}
                        </li>
                    </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
