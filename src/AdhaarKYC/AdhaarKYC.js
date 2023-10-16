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
  const [adhaarKYC, setadhaarKYC] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    setadhaarKYC(event.target.checked);
    setError(""); 
  };

  const handleProceedClick = () => {
    if (!adhaarKYC) {
      setError("Please check the box to proceed with Adhaar KYC.");
    } else {
      setProgress(100);
      setOpenDialog(true);
    }
  };

  const handleCloseDialog = () => {
    if (adhaarKYC) {
      setProgress(100);
      setOpenDialog(true);
      navigate("/bankdetails");
    }
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
              control={<Checkbox checked={adhaarKYC} onChange={handleChange} name="adhaarKYC" />}
              label="Check this box"
            />
          </FormGroup>
          {error && <div style={{ color: "red" }}>{error}</div>}
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
        <img src="assets/RightSymbol.png" alt="RightSymbol" style={{ width: "20%", height: "20%" }} />
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
