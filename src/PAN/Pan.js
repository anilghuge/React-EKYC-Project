import React, { useState } from "react";
import { Button, TextField, Container, Grid, LinearProgress, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Pan() {
  const navigate = useNavigate();
  const [panNumber, setPanNumber] = useState("");
  const [progress, setProgress] = useState(0);

  const handlePanChange = (event) => {
    const newValue = event.target.value;
    
    if (newValue.length <= 10) { // Limit input to 10 characters
      setPanNumber(newValue);
      const percentage = (newValue.length / 10) * 100;
      setProgress(percentage);
    }
  };

  const handleProceedClick = () => {
    navigate("/showpandetails");
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
            Progress: {Math.round(progress)}%
          </Typography>
          <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px" }} />
          <TextField
            id="panNumber"
            label="Your Pan Details"
            fullWidth
            placeholder="Enter your PAN number here"
            margin="normal"
            value={panNumber}
            onInput={handlePanChange} // Handle input length
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleProceedClick}>
            Submit
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="MobileVerfication.jfif" alt="MobileVerfication" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Pan;
