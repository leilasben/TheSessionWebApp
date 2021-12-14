import React, { Component } from "react";
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

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

export default class LandingPage extends Component{
    render(){
        return(
            <div className="container-content">
                {/* <div className="logo">
                    <img src={logo} top="100%" height="200px" width="300px" left="15%" position="absolute"/>
                </div> */}
                <div className="card">
                <Box sx={{ flexGrow: 1 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="baseline"
                    >
                        <Grid item md={3}>
                        <img src={logo} top="100%" height="200px" width="300px" left="15%" position="absolute"/>
                        <p>The Session is a community website dedicated to 
                            Irish Traditional Music.</p>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image= {tune}
                                    alt="tune"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Tunes
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Search for Tunes in Newest Tune Settings and see the most Popular Tunes
                                    in the past week. See sheet music and listen to the tunes. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
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
                            </Grid>
                            <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image= {trips}
                                    alt="trips"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Trips
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Find trips made by other members, search for specific locations and find upcoming trips and sessions. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image= {sessions}
                                    alt="sessions"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Sessions
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    See the newest sessions added by members of the community and find sessions by day and location. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Grid>
                            <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image= {events}
                                    alt="events"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Events
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Find events such as concerts and festivals, both online and by location. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Grid>
                            <Grid item md={3}>
                            <Card sx={{ maxWidth: 345 }} raised={(true)}>
                                <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image= {discussions}
                                    alt="discussions"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Discussions
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Join in discussions about the music with other members of the community. 
                                    </Typography>
                                </CardContent>
                                </CardActionArea>
                            </Card>
                            </Grid>
                    </Grid>
                </Box>
                </div>
            </div>
        );
    }
}