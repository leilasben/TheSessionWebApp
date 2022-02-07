import axios from "axios";
import React, {useState} from "react";
import Navbar from "../components/Navbar";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import fiddle from '../images/fiddle.png';
import Grid from '@mui/material/Grid';
// import abcjs from "abcjs";
import {Link} from "react-router-dom";
function Tune() {
    const [tune, setTune] = useState([])

    const getTune = () => {
        axios.get("https://thesession.org/tunes/popular?format=json").then((response) => {
            console.log(response);
            setTune(response.data.tunes)
        });
    };

    React.useEffect(() => {
        getTune();
    }, []);

    return (
        <div>
            <Navbar/>
            <h1>Featured Tunes</h1>
            <br></br>
            <br></br>
            <div className='item-container'>
            <Grid 
                      container 
                      direction="row"
                      spacing={1}
                      >
              {tune.map((tunes) => (
                  <div className="container-content">
                        <Grid item xs={12} sm={6} md={4}></Grid>
                        <Link to="/sheetmusic">
                          <Card sx={{ minWidth: 500 }} raised={(true)}>
                            <CardActionArea>
                              <CardMedia
                                component="img"
                                height="140"
                                image={fiddle}
                                alt="tune"/>
                              <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                      {
                                      tunes.name
                                  } </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                      {
                                      tunes.member.name
                                  } </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Link>
                  </div>
                ))
              } 
              </Grid>
            </div>
        </div>
      );
}

export default Tune;
