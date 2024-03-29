// Navbar created using https://www.youtube.com/watch?v=fL8cFqhTHwA&t=1305s as a reference
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { auth } from "../services/firebase";
import logo from '../images/thesessionlogo.png';

function SignOut() {
    return auth.currentUser && (
        <Button onClick={() => auth.signOut()} className='nav-links' color="primary" variant="contained" startIcon={<LogoutIcon />}>Sign Out</Button>
      )
    }
    
function Navbar() {

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
                        <img alt="logo" src ={logo} width="200" height="100"></img>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <ThemeProvider theme={theme}>
                            <SignOut />
                            </ThemeProvider>
                        </li>
                    </ul>
                    </div>
            </nav>
        </>
    )
}

export default Navbar
