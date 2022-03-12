import React, {useState} from "react";
import axios from "axios";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Typography, Container, Card, CardHeader, Button } from "@mui/material";
import { Box, Grid } from "@mui/material";
import EventIcon from '@material-ui/icons/Event';
import { Divider } from "@mui/material";
import { CardContent } from "@mui/material";
import { Map } from "pigeon-maps";
import { Marker } from "pigeon-maps";
export default function EventInfo(props) {
    const id  = props.match.params.id;
    
    const [indEvent, setIndEvent] = useState([])
    const [eventVenue, setEventVenue] = useState([])
    const getIndEvent = () => {
        axios.get(`https://thesession.org/events/${id}?format=json`).then((response) => {
            setIndEvent(response.data)
        });
    };
    const getEventVenue = () => {
        axios.get(`https://thesession.org/events/${id}?format=json`).then((response) => {
            setEventVenue(response.data.venue)
        });
    };
    React.useEffect(() => {
        getIndEvent();
    }, []);
    React.useEffect(() => {
        getEventVenue();
    }, []);
    console.log(indEvent)
    return(
    <div className="item-container">
        <Navbar />
            <div>
            <Grid container alignItems="center" justify="center">
            <Card sx= {{minWidth: 700}}>
                <CardHeader title={indEvent.name} subheader={eventVenue.name} />
                <CardContent sx={{flex:1}}>
                <Map height={300} defaultCenter={[indEvent.latitude, indEvent.longitude]} defaultZoom={11}>
                <Marker width={50} anchor={[indEvent.latitude, indEvent.longitude]} />
                </Map>
                <Typography variant="subtitle1" paragraph="true">
                    Get in contact: 
                <Typography>{eventVenue.telephone}</Typography>    
                <Typography>{eventVenue.email}</Typography>     
                <Typography>{eventVenue.web}</Typography>
                </Typography>
                </CardContent>
            </Card>
            </Grid>
            </div>
        <Footer />
    </div>
    
    )
}