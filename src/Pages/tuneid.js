import React, {useState} from "react";
import axios from "axios";
import { renderAbc } from "abcjs";
import Navbar from "../components/Navbar";
import Typography from '@mui/material/Typography';
import { TagCloud } from 'react-tagcloud';
import Footer from "../components/Footer"
import { Divider } from "@mui/material";

export default function TuneInfo(props) {
    const id  = props.match.params.id;
    
    const [indTune, setindTune] = useState([])
    const [alias, setAliases ] = useState([])
    const [setting, setSetting ] = useState([])
    const getindTune = () => {
        axios.get(`https://thesession.org/tunes/${id}?format=json`).then((response) => {
            
            setindTune(response.data)
        });
    };

    const getAliases = () => {
        axios.get(`https://thesession.org/tunes/${id}?format=json`).then((response) => {
            
            setAliases(response.data.aliases)
        });
    };

    const getSetting = () => {
        axios.get(`https://thesession.org/tunes/${id}?format=json`).then((response) => {
            
            setSetting(response.data.settings)
        });
    };

    React.useEffect(() => {
        getindTune();
    }, );

    React.useEffect(() => {
        getAliases();
    }, );

    React.useEffect(() => {
        getSetting();
    }, );

    console.log(indTune)

    var abc = (`X:1\nT:${indTune.name}\nK:${indTune.settings?.[0].key}\n${indTune.settings?.[0].abc}`);
    renderAbc("target", abc, { responsive: "resize" })

    console.log(indTune.settings?.[0].abc)
    if(id === 'undefined'){
        return(
            <div>
            <Navbar />
            <h1>Sorry, this song is not available on The Session just yet!</h1>
            </div>
        )
    }
    
    var ch = {};
    var chArray = [];
    for(let i =0; i < alias.length; i++) {
        ch.value = alias[i];
        chArray.push({...ch})
    }
    
    return(
        <div align = "center">
        <Navbar />
        <br></br>
        <Typography variant="h4">{indTune.name} appears in {indTune.tunebooks} tunebooks. It is a {indTune.type}.</Typography>
        <br></br>
        <Divider />
        <br></br>
        <Typography variant="h5">Aliases:</Typography><br></br>
        <TagCloud tags={chArray} minSize={12} maxSize={35}/>
        <br></br>
        <Divider />
        <div id="target"></div>
        <Footer />
        </div> 
    )
}