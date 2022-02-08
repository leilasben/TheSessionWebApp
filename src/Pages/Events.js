import React, {useState} from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid } from "@mui/material";
import { Map, Marker } from "pigeon-maps"

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
            <Navbar />
            <h1>Upcoming events and sessions</h1>
            {/* <div>
                {event.map((events) => (
                    <p>{events.latitude},{events.longitude}</p>
                ))}
            </div> */}
            <Grid container spacing={2} direction ="row" paddingTop={4}>
            {event.map((events) => (
            <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={events.name}
        subheader={events.venue.name}
      />
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          <p>Member: {events.member.name}</p>
          <p>Date: {events.dtstart}</p>
        </Typography>
        <Map height={300} defaultCenter={[events.latitude, events.longitude]} defaultZoom={18}>
      <Marker width={50} anchor={[events.latitude, events.longitude]} />
      </Map>
      </CardContent>
    </Card>
    ))}
    </Grid>
            
            <Footer/>
        </div>
    );
}
export default Event