import React from "react";
import { Button, TextField, Container, Grid, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

function Email() {
    const navigate = useNavigate();

  const handleClick = () => {

    navigate("/emailotpverification"); 
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
          <TextField
            id="emailid"
            label="Enter Your email id here!"
            fullWidth
            placeholder="Enter Your email id here!"
            margin="normal"
          />
          <Button variant="contained" color="primary" fullWidth onClick={handleClick}>
            Proceed
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
        <img src="Email.png" alt="Email" style={{ width: "100%", height: "auto" }}
        />
        </Grid>
      </Grid>
    </Container>
      );
}

export default Email;
