import axios from "axios";
import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Button, CardActions} from '@mui/material';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useHistory } from "react-router";
function Tune() {
    const [tune, setTune] = useState([])
    const history = useHistory();
    const theme = createTheme({
        palette: {
          primary: {
            main: '#e5b219',
          },
        },
      });
    const getTune = () => {
        axios.get("https://thesession.org/tunes/new?format=json&perpage=15").then((response) => {
            setTune(response.data.settings)
        });
    };
    React.useEffect(() => {
        getTune();
    }, []);
    const goPopular = () => {
        history.push('/tunes')
    } 
    return (
        <ThemeProvider theme={theme}>
        <div className="item-container">
            <Navbar/>
            <div align="center">
            <br />
            <Button variant="contained" onClick={goPopular}>See Popular Tunes</Button></div>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6,}}>
            <Container maxWidth="sm">
            <h1 style={{textAlign: 'center', fontFamily: 'Roboto'}}>Tunes</h1>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              New Tunes Posted to The Session
            </Typography>
          </Container>
          </Box>
          
          <Container maxWidth="md">
            <Grid container spacing={4}>{tune.map((tunes) => (
                    <Grid item key={tunes} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} raised={(true)}>
                        <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    {tunes.tune.name} 
                                </Typography>
                                <Typography gutterBottom variant="body2" color="text.secondary" />
                                    Posted by: {tunes.member.name} 
                                <Typography gutterBottom variant="body2" color="text.secondary"/>
                                    Date: {tunes.date}
                                </CardContent>
                                <CardActions>
                                    <Button type="button" variant="outlined"><Link style={{ textDecoration: 'none' }} to={`/tuneinfo/${tunes.tune.id}`}>See Sheet Music</Link></Button> 
                                </CardActions>
                        </Card>
                    </Grid>
                    ))} 
                </Grid>
            </Container>
        </div>
        </ThemeProvider>
    );
}

export default Tune;
