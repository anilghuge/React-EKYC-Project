import React, { useState } from 'react';
import { Button, Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function AdhaarKYC() {

  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  const handleChange = (event) => {
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
          <Button variant="contained" color="primary" fullWidth onClick={handleOpen}>
            Proceed to Digilocker
          </Button> 

            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Title</DialogTitle>
                <DialogContent>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="RightSymbol.png"
                    alt="RightSymbol"
                    style={{ width: "20%", height: "20%" }}
                  />
                </div>
                  <center><h2>Success!</h2></center>
                  <p>We have successfully obtained your Adhaar details from digilocker.</p>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Close
                  </Button>
                </DialogActions>
          </Dialog>

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
