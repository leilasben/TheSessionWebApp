import axios from "axios";
import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button, CardActionArea} from '@mui/material';
import fiddle from '../images/fiddle.png';
import bodhran from '../images/bodhran.png';
import flute from '../images/flute.png';
import banjo from '../images/banjo.png';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Chart from 'react-apexcharts';
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
        axios.get("https://thesession.org/tunes/popular?format=json&perpage=15").then((response) => {
            console.log(response);
            setTune(response.data.tunes)
        });
    };

    React.useEffect(() => {
        getTune();
    }, []);

    const series = [
        {
            name: "Number of tunebooks",
            data: tune.map(e => e.tunebooks),
            fillColor: '#e5b219'
        }
    ];

    const options = {
        chart: {
            id: "simple-bar",
        },
        plotOptions: {
            bar: {
              horizontal: true, //horizontal bar chart
            },
        },
        xaxis: {
            categories: tune.map(d => d.name)
        }
    };
    const goNewTunes = () => {
        history.push('/newtunes')
    }
    return (
        <ThemeProvider theme={theme}>
        <div className="item-container">
            <Navbar/>
            <div align="center">
            <br />
            <Button variant="contained" onClick={goNewTunes}>See Newest Tunes</Button></div>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6,}}>
            <Container maxWidth="sm">
            <h1 style={{textAlign: 'center', fontFamily: 'Roboto'}}>Tunes</h1>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Most Popular Tunes on The Session
            </Typography>
          </Container>
          </Box>
          <Container maxWidth="md">
          <div>
                <Chart options={options} type="bar" series={series} width="80%" />
            </div>
            <Grid container spacing={4}>
                {tune.map((tunes) => (
                    <Grid item key={tunes} xs={12} sm={6} md={4}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} raised={(true)}>
                            <CardActionArea>
                            <Link style={{ color: 'black', textDecoration: 'none' }} to={`/tuneinfo/${tunes.id}`}>
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    {tunes.name} 
                                </Typography>
                                <CardMedia>
                                    {tunes.type === "reel" && <img alt="fiddle" src={fiddle}/>}
                                    {tunes.type === "jig" && <img alt="bodhran" src={bodhran}/>}
                                    {tunes.type === "slip jig" && <img alt="banjo" src={banjo}/>}
                                    {tunes.type === "hornpipe" && <img alt="flute" src={flute}/>}
                                </CardMedia>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {tunes.type} 
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Posted by: {tunes.member.name} 
                                    </Typography>
                                    <Typography variant="button">See Tune Information and Sheet Music</Typography>
                                </CardContent>
                                </Link>
                            </CardActionArea>
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
