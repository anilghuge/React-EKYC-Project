import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function InvalidBank() {
  const navigate = useNavigate();

  const handleTryAnotherClick = () => {
    navigate("/bankdetails");
  };

  const handleUploadBankProofsClick = () => {
    navigate("/uploadbankproof");
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
            Invalid Bank Details!
          </Typography>
          <Typography variant="body1" gutterBottom>
            Please enter valid bank account details.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginBottom: 2 }} // Add margin-bottom for spacing
            onClick={handleTryAnotherClick}
          >
            Try Another Account Number
          </Button>

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleUploadBankProofsClick}
          >
            Upload Bank Proofs
          </Button>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="FailedVerify.png"
            alt="FailedVerify"
            style={{ width: "100%", height: "auto" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
