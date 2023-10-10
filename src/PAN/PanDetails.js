import React, { useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PanDetails() {
  const navigate = useNavigate();
  const [panNumber, setPanNumber] = useState("BQHJU49778");
  const [name, setName] = useState("Mr.MAYUR JHADHAV");
  const [fatherName, setFatherName] = useState("Mr. SUYASH JHADHAV");

  const handlePanNumberChange = (event) => {
    setPanNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFatherNameChange = (event) => {
    setFatherName(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/submission-success");
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
            PAN Card Details
          </Typography>
          <TextField
            id="panNumber"
            label="PAN Number"
            fullWidth
            placeholder="Enter your PAN number"
            margin="normal"
            value={panNumber}
            onChange={handlePanNumberChange}
          />
          <TextField
            id="name"
            label="Name as per PAN card"
            fullWidth
            placeholder="Enter your name"
            margin="normal"
            value={name}
            onChange={handleNameChange}
          />
          <TextField
            id="fatherName"
            label="Father's name as per PAN card"
            fullWidth
            placeholder="Enter your father's name"
            margin="normal"
            value={fatherName}
            onChange={handleFatherNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>   
        <div>
              <div style={{ textAlign: "center" }}>
                <img
                  src="RightSymbol.png"
                  alt="RightSymbol"
                  style={{ width: "20%", height: "20%" }}
                />
              </div>
              <Typography variant="h5" gutterBottom>
                You have successfully verified your PAN Details
              </Typography>
            </div>
    
        <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Proceed
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default PanDetails;
