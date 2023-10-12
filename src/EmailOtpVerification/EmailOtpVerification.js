import React, { useState } from 'react';
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EmailOtpVerification({ handleVerification }) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleOtpVerifyClick = () => {
    if (/^\d{1,4}$/.test(otp)) { // Allow only numbers and max 4 digits
      handleVerification();
      navigate("/panverification");
    } else {
      setError("Invalid OTP. Please enter a valid OTP (up to 4 digits).");
    }
  }

  // Event handler to validate OTP input
  const handleInput = (e) => {
    const input = e.target.value;
    if (/^\d*$/.test(input) && input.length <= 4) {
      setOtp(input);
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
          <Typography variant="h5" gutterBottom>
            Verify Email OTP
          </Typography>
          <TextField
            id="emailotpverify"
            label="Enter Email OTP here!"
            fullWidth
            placeholder="Enter Email OTP here!"
            margin="normal"
            type="text"
            value={otp}
            onInput={handleInput}
            maxLength={4}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <Button variant="contained" color="primary" fullWidth onClick={handleOtpVerifyClick}>
            Verify
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="EmailVerification.avif" alt="MobileVerification" style={{ width: "70%", height: "50%" }} />
        </Grid>
      </Grid>
    </Container>
  );
}
