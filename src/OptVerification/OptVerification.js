import React, { useEffect, useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function OptVerification({ handleOTPVerification }) {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerifyClick = () => {
    if (/^\d{4}$/.test(otp)) {
      handleOTPVerification();
      navigate("/email");
    } else {
      setError("Invalid OTP. Please enter a 4-digit numeric OTP.");
    }
  };

  const handleSignUpClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const storedMobileNumber = localStorage.getItem("mobileNumber");

    if (storedMobileNumber) {
      setMobileNumber(storedMobileNumber);
    }
    localStorage.removeItem("mobileNumber");
  }, []);

  const formattedMobileNumber = `+91 ***${mobileNumber.slice(-3)}`;

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
            Verify OTP
          </Typography>
          <Typography variant="h6" gutterBottom>
            Mobile Number: {formattedMobileNumber}
          </Typography>
          <Button variant="text" color="primary" onClick={handleSignUpClick}>
            Change
          </Button>
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <TextField
            id="verifyOtp"
            label="OTP"
            fullWidth
            placeholder="Enter OTP here"
            margin="normal"
            type="text"
            value={otp}
            onInput={handleInput}
            maxLength={4}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleVerifyClick}
          >
            Verify
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="EnterOtp.avif"
            alt="OTPVerification"
            style={{ width: "70%", height: "50%" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default OptVerification;
