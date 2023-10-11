import React, { useState } from 'react';
import { Container, Grid, LinearProgress, Typography, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

export default function PhotoVerification() {

    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
  
    const handleChange = (event) => {
    };

  return (
    <Container>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "50vh" }}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h6" gutterBottom  sx={{mt : "70px"}}>
                Liveliness Verification : {Math.round(progress)}%
              </Typography>
              <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px"}} />
                
                <Typography variant="h6" gutterBottom sx={{mt:"50px", fontWeight: 'bold'}}>
                    Live Photo Verification
                </Typography>

              <Typography variant="h6" gutterBottom>
                Turn on camera to click photo.
                Ensure that your face and the code
                are clearly visible.
              </Typography><br/>       
    
            </Grid>
            <Grid item xs={12} sm={6}>
                <Paper elevation={3} sx={{ padding: '12px', maxWidth: '220px', margin: '0 auto', }}>
                    <img src="avatar.jpg" alt="Avatar" style={{ width: "220px", height: "20%" }} />
                    <Button variant="contained" color="primary" sx={{mr: "30px"}}>
                        Confirm
                    </Button>
                    <Button variant="contained" color="primary">
                        Retake
                    </Button>
                </Paper>
            </Grid>
          </Grid>
        </Container>
  )
}
