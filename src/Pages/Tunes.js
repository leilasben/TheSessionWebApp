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
import Popover from '@mui/material/Popover';
import {Notation} from 'react-abc';

function Tune() {
    const [tune, setTune] = useState([])

    const getTune = () => {
        axios.get("https://thesession.org/tunes/popular?format=json&perpage=15").then((response) => {
            console.log(response);
            setTune(response.data.tunes)
        });
    };

    React.useEffect(() => {
        getTune();
    }, []);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className="item-container">
            <div className="container-content">
                <Navbar/>
                <h1 style={
                    {
                        textAlign: 'center',
                        fontFamily: 'Roboto',
                        paddingTop: 2
                    }
                }>Featured Tunes</h1>
                <div className="card">
                    <Box sx={
                        {
                            bgcolor: 'background.paper',
                            pt: 8,
                            pb: 6,
                            justifyContent: 'center',
                            display: 'grid',
                            paddingTop: 5
                        }
                    }>
                        <Grid container direction="row"
                            paddingTop={4}
                            alignItems="center"
                            justifyContent="center"
                            item
                            xs={12}
                            sm={6}
                            md={12}>
                            {
                            tune.map((tunes) => (
                                <Card sx={
                                        {
                                            minWidth: 350,
                                            maxWidth: 350
                                        }
                                    }
                                    raised={
                                        (true)
                                }>
                                    <CardActionArea>
                                        <CardMedia height="100">
                                            <Link to={
                                                `/tuneinfo/${
                                                    tunes.id
                                                }`
                                            }>See Tune Information</Link>
                                            {
                                            tunes.type == "reel" && <img src={fiddle}/>
                                        }
                                            {
                                            tunes.type == "jig" && <img src={bodhran}/>
                                        }
                                            {
                                            tunes.type == "slip jig" && <img src={banjo}/>
                                        }
                                            {
                                            tunes.type == "hornpipe" && <img src={flute}/>
                                        } </CardMedia>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {
                                                tunes.name
                                            } </Typography>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {
                                                tunes.type
                                            } </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {
                                                tunes.member.name
                                            } </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {
                                                tunes.id
                                            } </Typography>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))
                        } </Grid>
                    </Box>
                </div>
            </div>
        </div>
    );
}

export default Tune;
