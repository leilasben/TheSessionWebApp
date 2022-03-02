import React, {useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Map, Marker } from "pigeon-maps"
import { Box } from "@mui/system";
import { Container, CardHeader, CardContent, Card, Typography, Grid } from "@mui/material";

function Event() {
    const [event, setEvent] = useState([])

    const getEvent = () => {
        axios.get("https://thesession.org/events/upcoming?format=json").then((response) => {
            console.log(response);
            setEvent(response.data.events)
        });
    };
    React.useEffect(() => {
        getEvent();
    }, []);

    return(
        <div className="item-container">
            <Navbar/>
            <Box sx={{ bgcolor: 'background.paper', pt: 8, pb: 6,}}>
            <Container maxWidth="sm">
            <h1 style={{textAlign: 'center', fontFamily: 'Roboto', paddingTop: 2}}>Upcoming events and sessions</h1>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              See map for location details
            </Typography>
          </Container>
          </Box>
          <Container maxWidth="lg">
            <Grid container spacing={1}>
            {event.map((events) => (
            <Grid item key={events} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 445, minWidth: 345, minHeight: 600 }}>
                <CardHeader
                    title={events.name}
                    subheader={events.venue.name}
                />
                <CardContent>
                    <Typography variant="subtitle1" color="text.secondary">
                    <p>Member: {events.member.name}</p>
                    <p>Date: {events.dtstart}</p>
                    </Typography>
                    {events.latitude && <Map height={300} defaultCenter={[events.latitude, events.longitude]} defaultZoom={18}>
                    <Marker width={50} anchor={[events.latitude, events.longitude]} /></Map>
                    }
                    {events.venue == "online" && 
                    <p>event being held online</p>}
                </CardContent>
                </Card>
                </Grid>
                ))}
                </Grid>
            </Container>
            <Footer />
        </div>
    );
}
export default Event