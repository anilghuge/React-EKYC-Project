import React, { useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");

  const handleMobileNumberChange = (event) => {
    const cleanedMobileNumber = event.target.value.replace(/\D/g, '').substring(0, 10);
    setMobileNumber(cleanedMobileNumber);
  };

  const handleProceedClick = () => {
    if (mobileNumber.length === 10) {
      localStorage.setItem("mobileNumber", mobileNumber);
      navigate("/optverification");
    } else {
      setError("Invalid Mobile Number. Please enter a 10-digit numeric number.");
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
          <Typography variant="h3" gutterBottom>
            Sign Up
          </Typography>
          <Typography variant="h6" gutterBottom>
            or track an existing application
          </Typography>
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <TextField
            id="mobileNumber"
            label="Mobile Number"
            fullWidth
            placeholder="Enter your mobile number here"
            margin="normal"
            type="text"
            value={mobileNumber}
            onInput={handleMobileNumberChange} // Add this event handler
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleProceedClick}>
            Proceed
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="SignUp.avif" alt="Signup" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
