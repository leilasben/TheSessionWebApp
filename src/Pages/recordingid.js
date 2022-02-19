import React, { useState } from "react";
import axios from "axios";
import { CardActionArea, CardContent, List, ListItemButton, ListItemText, Typography, ListItem, ListItemIcon, Container } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function RecordingInfo(props) {
    
    const id = props.match.params.id;

    const [indRecord, setindRecord] = useState([])

    const [info, setInfo] = useState([])

    const [artist, setArtist] = useState([])

    const getindRecord = () => {
        axios.get(`https://thesession.org/recordings/${id}?format=json`).then((response) => {
            setindRecord(response.data.tracks)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const getInfo = () => {
        axios.get(`https://thesession.org/recordings/${id}?format=json`).then((response) => {
            setInfo(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const getArtist = () => {
        axios.get(`https://thesession.org/recordings/${id}?format=json`).then((response) => {
            console.log(response);
            setArtist(response.data.artist)
        })
        .catch((err) => {
            console.log(err);
        });
    };
    React.useEffect(() => {
        getindRecord();
    }, []);
    React.useEffect(() => {
        getInfo();
    }, []);
    React.useEffect(() => {
        getArtist();
    }, []);

    console.log(artist)

    return(
        <div>
            <Navbar />
            <br></br>
            <Container>
            <div>
            <h1>{info.name} by {artist.name}</h1>
            <Typography>Click song title to see sheet music and more information</Typography> 
            </div>
                    <div>
                    {indRecord.map((i, index) => (
                        <>
                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        <nav aria-label="main recording list">
                        <List>
                            {i.tunes.map((j) => (
                            <ListItem button component="a" href={`/tuneinfo/${j.id}`}>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary={j.name}></ListItemText>
                            </ListItem>
                        ))}
                        <Divider />
                        </List>
                        </nav>
                        </Box>
                        </>
                    ))}
                    </div>
                </Container>
           <Footer />
        </div>
    )
}