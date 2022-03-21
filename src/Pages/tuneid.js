import React, {useState} from "react";
import axios from "axios";
import { renderAbc } from "abcjs";
import abcjs from "abcjs";
import 'abcjs/abcjs-audio.css';
import Navbar from "../components/Navbar";
import Typography from '@mui/material/Typography';
import { TagCloud } from 'react-tagcloud';
import Footer from "../components/Footer"
import { Button, Divider } from "@mui/material";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
export default function TuneInfo(props) {
    const id  = props.match.params.id;
    const theme = createTheme({
        palette: {
          primary: {
            main: '#e5b219',
          },
        },
      });
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

    var abc = (`X:1\nK:${indTune.settings?.[0].key}\n${indTune.settings?.[0].abc}`);
    renderAbc("target", abc, { responsive: "resize", format: { partsbox:true }, oneSVGPerLine: true})

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
        <ThemeProvider theme={theme}>
        <Navbar />
        <br />
        <Link to ="/tunes" style={{ color: 'black', textDecoration: 'none' }}><Button variant="contained">Back</Button></Link>
        <Container maxWidth="lg">
        <br></br>
        <Typography variant="h3">{indTune.name} - {indTune.type}</Typography>
        <Typography variant="h5">Appears in <b>{indTune.tunebooks}</b> tunebooks.</Typography>
        <Typography variant="h5">There are <b>{indTune.recordings}</b> recordings of this tune and it appears in <b>{indTune.collections}</b> other tune collections.</Typography>
        <br></br>
        <Divider />
        <br></br>
        <Typography variant="h5">Also known as:</Typography><br></br>
        <TagCloud tags={chArray} minSize={12} maxSize={35}/>
        <br></br>
        <Divider />
        <Typography variant="h4">Sheet music notation</Typography><div id="target"></div>
        <Divider />
        <Typography variant="h4">ABC notation</Typography>
        <pre className="source">X:1 K:{indTune.settings?.[0].key} {indTune.settings?.[0].abc}</pre>
        </Container>
        <Footer />
        </ThemeProvider>
        </div> 
        
    )
}