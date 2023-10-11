import React from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
function SignUp() {

  const navigate = useNavigate();

  const handleProceedClick = () => {

    navigate("/optverification"); 
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
            or track existing application
          </Typography>
          <TextField
            id="mobileNumber"
            label="Mobile Number"
            fullWidth
            placeholder="Enter your mobile number here"
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleProceedClick}>
            Proceed
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <img src="SignUp.png" alt="Signup" style={{ width: "100%", height: "auto" }}
        />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
