import React, { Component, useState } from "react";
import axios from "axios";
import logo from '../images/thesessiontransparent.png';
import tune from '../images/tunes.jpg'
import recording from '../images/recordings.jpg'
import trips from '../images/trips.jpg'
import sessions from '../images/sessions.jpg';
import events from '../images/events.jpg'
import discussions from '../images/discussions.jpg'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from "@mui/material";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

function Home() {
    const [news, setNews] = useState([])

    const getNews = () => {
        axios.get("https://gnews.io/api/v4/search?q=trad music&token=91ba12c13f45bac993d9db1f7c80cf69&lang=en").then((response) => {
            console.log(response);
            setNews(response.data.articles)
        });
    };

    React.useEffect(() => {
        getNews();
    }, []);

    return(
        <div className="item-container">
            <div className="container-content">
                <Navbar />
                {/* <div className="logo">
                    <img src={logo} top="100%" height="200px" width="300px" left="15%" position="absolute"/>
                </div> */}
                {/* <img src={logo} top="100%" height="200px" width="300px" left="15%" position="absolute"/> */}
                <h3 className="courier">The Session is a community website dedicated to 
                            Irish Traditional Music.</h3>
                <div className="card">
                <div alignItems="left">
                <Box sx={{ justifyContent: 'flex-start'}}>
                <Grid
                    container
                    direction="column"
                    alignItems="baseline"
                    spacing={0.5}
                    >
                        <Grid item xs={12} sm={6} md={4}>
                        <Link to="/tunes">
                            <Card sx={{ maxWidth: 400 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image= {tune}
                                    alt="tune"
                                />
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                    Tunes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Search for Tunes in Newest Tune Settings and see the most Popular Tunes
                                    in the past week. See sheet music and listen to the tunes. 
                                    </Typography>
                                </CardContent>
                                {/* <Link to="/tunes"><Button size="small" color="primary">
                                See More
                                </Button></Link> */}
                                </CardActionArea>
                            </Card>
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Link to="/recordings">
                            <Card sx={{ maxWidth: 400 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image= {recording}
                                    alt="recordings"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Recordings
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Search for the newest Recordings contributed by other members, see the sheet music for the tune and explore the
                                    track listings of recordings. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Link>
                            </Grid>
                            <Grid item xs={12} sm={6} md={4}>
                                <Link to = "/events">
                            <Card sx={{ maxWidth: 400 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="150"
                                    image= {events}
                                    alt="events"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Events and Sessions
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Find events such as concerts and festivals, both online and by location. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Link>
                            </Grid>
                    </Grid>
                </Box>
                </div>
                <div>
                <Box sx={{ justifyContent: 'flex-end'}}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                    <div>
                {news.map((article) => (
                    <p>{article.title}</p>
                ))}
            </div>
                    </Grid>
                </Grid>
                </Box>
                </div>
                <Footer></Footer>
                </div>
            </div>
        </div>
        
    )
}
export default Home;