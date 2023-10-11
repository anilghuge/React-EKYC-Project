import React, { useState } from 'react';
import { Button, Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';

export default function AdhaarKYC() {

  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
  };

  const handleProceedClick = () => {
    navigate("/");
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
          <Typography variant="h6" gutterBottom>
            Adhaar Verification: {Math.round(progress)}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px" }} />
          <Typography variant="h5" gutterBottom sx={{ mt:"100px" }}>
            Adhaar KYC (Digilocker)
          </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox onChange={handleChange} />}
                label="Check this box"
              />
            </FormGroup>
          <Button variant="contained" color="primary" fullWidth onClick={handleProceedClick}>
            Proceed to Digilocker
          </Button> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            What is Digilocker?
          </Typography><br/><br/>
          <Typography variant="h6" gutterBottom>
              Digilocker is Govt. of India
              portalfrom where you can obtain
              original digital copies of your
              government issued documents.
              know more
          </Typography><br/>
        </Grid>
      </Grid>
    </Container>
  )
}
