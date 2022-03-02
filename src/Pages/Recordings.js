import React, {useState} from 'react';
import axios from "axios";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Album() {
    const [recording, setRecording] = useState([])

    const getRecording = () => {
        axios.get("https://thesession.org/recordings/new?format=json").then((response) => {
            console.log(response);
            setRecording(response.data.recordings)
        });
    };
    React.useEffect(() => {
        getRecording();
    }, []);

  return (
  <div>
        <Navbar />
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
          <h1 style={{textAlign: 'center', fontFamily: 'Roboto', paddingTop: 1}}>Recording Album Lists</h1>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              View a list of recording albums listed by fellow members of The Session
            </Typography>
          </Container>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={4}>{recording.map((recordings) => (
              <Grid item key={recordings} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {recordings.name}
                    </Typography>
                    <Typography>
                      {recordings.artist.name}<br></br>
                      {recordings.date}<br></br>
                      Posted by: {recordings.member.name}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link style={{ textDecoration: 'none' }} to={`/recordinginfo/${recordings.id}`}>See Recording List</Link></Button> 
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      <Footer />
      </div>
  );
}
