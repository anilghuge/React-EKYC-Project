import React, { useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Email() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (emailPattern.test(email)) {
      localStorage.setItem("email", email);
      navigate("/emailotpverification");
    } else {
      setError("Invalid Email Address. Please enter a valid email.");
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
            Your Email ID
          </Typography>
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <TextField
            id="emailid"
            label="Enter Your email id here!"
            fullWidth
            placeholder="Enter Your email id here!"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleClick}
          >
            Proceed
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img src="Email.png" alt="Email" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Email;
