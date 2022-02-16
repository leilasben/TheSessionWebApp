import React, {useState} from "react";
import axios from "axios";
import { renderAbc } from "abcjs";
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
export default function TuneInfo(props) {
    const id  = props.match.params.id;
    
    const [indTune, setindTune] = useState([])

    const getindTune = () => {
        axios.get(`https://thesession.org/tunes/${id}?format=json`).then((response) => {
            console.log(response);
            setindTune(response.data)
        });
    };

    React.useEffect(() => {
        getindTune();
    }, []);

    var abc = (`X:1\nT:${indTune.name}\nK:${indTune.settings?.[0].key}\n${indTune.settings?.[0].abc}`);
    renderAbc("target", abc)

    return(
        <div id="target">
         <Container maxWidth="md">
            <Grid container spacing={4}>
                {Object.entries(indTune).map((t) => (
                    <Grid item key={t} xs={12} sm={6} md={4}>
                        <Typography gutterBottom variant="h5" component="div" align="center">
                                    {t.name} 
                        </Typography>
                    </Grid>
                    ))} 
                </Grid>
            </Container>
            </div>
    )
}