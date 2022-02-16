import React, { useState } from "react";
import axios from "axios";
import { CardActionArea, CardContent, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import Container from '@mui/material/Container';
import { Card } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function RecordingInfo(props) {
    
    const id = props.match.params.id;

    const [indRecord, setindRecord] = useState([])

    const getindRecord = () => {
        axios.get(`https://thesession.org/recordings/${id}?format=json`).then((response) => {
            console.log(response);
            setindRecord(response.data)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    React.useEffect(() => {
        getindRecord();
    }, []);

    return(
        <div>
            <Navbar />
           <p>{indRecord.name}</p> 
           <Container maxWidth="md">
                <Grid container spacing={4} paddingTop={5}>
                    {indRecord.tracks.map((track, trackIndex) => {
                        return track.tunes.map((tune, tuneIndex) => (
                            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <nav aria-label="main recording list">
                                    <List>
                                        <ListItemButton>
                                            <ListItemText primary={tune.name} />
                                        </ListItemButton>
                                    </List>
                                </nav>
                            </Box>
                        ));
                    })}
                </Grid>
           </Container>
           <Footer />
        </div>
    )
}