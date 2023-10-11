import React, { useState } from 'react';
import { Button, Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AdhaarKYC() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const handleChange = (event) => {
  };

  const handleProceedClick = () => {
    // Simulate data retrieval from Digilocker
    // You can replace this with your actual logic
    setProgress(100);

    // Show the success dialog
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    navigate("/bankdetails");
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
          <Typography variant="h5" gutterBottom sx={{ mt: "100px" }}>
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
            portal from where you can obtain
            original digital copies of your
            government-issued documents.
            know more
          </Typography><br/>
        </Grid>
      </Grid>
      {/* Success Dialog */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
      <div style={{ textAlign: "center" }}>
        <img src="RightSymbol.png" alt="RightSymbol" style={{ width: "20%", height: "20%" }} />
      </div>
        <DialogTitle>Success</DialogTitle>
        <DialogContent>
          <DialogContentText>
            We have successfully obtained your Adhaar details from Digilocker.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
