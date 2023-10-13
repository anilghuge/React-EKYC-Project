import React, { useState } from "react";
import {
  Container,
  Typography,
  Checkbox,
  FormControlLabel,
  LinearProgress,
  Grid,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ESignPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [consentAadhaar, setConsentAadhaar] = useState(false);
  const [consentTAndC, setConsentTAndC] = useState(false);
  const [error, setError] = useState("");

  const handleCheckboxChange = (event) => {
    if (event.target.name === "consentAadhaar") {
      setConsentAadhaar(event.target.checked);
    } else if (event.target.name === "consentTAndC") {
      setConsentTAndC(event.target.checked);
    }
  };

  const handleProceedClick = () => {
   if (!consentAadhaar) {
      setError("Please select the 'Consent for e-sign using Aadhaar OTP' checkbox.");
    } else if (!consentTAndC) {
      setError("Please select the 'Consent for T&C' checkbox.");
    } else {
      setError("");
      setProgress(100);
      navigate("/congratulation");
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
            E-sign Document: {Math.round(progress)}%
          </Typography>
          <LinearProgress
            variant="determinate"
            value={progress}
            sx={{ width: "70%", height: "12px" }}
          />

          <FormControlLabel
            control={
              <Checkbox
                name="consentAadhaar"
                checked={consentAadhaar}
                onChange={handleCheckboxChange}
              />
            }
            label="Consent for e-sign using Aadhaar OTP"
          />

          <FormControlLabel
            control={
              <Checkbox
                name="consentTAndC"
                checked={consentTAndC}
                onChange={handleCheckboxChange}
              />
            }
            label="Consent for T&C"
          />
          {error && (
            <div style={{ color: "red" }}>
              {error}
            </div>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleProceedClick}
          >
            Proceed to E-Sign
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6">What is E-sign?</Typography>
          <Typography>
            eSign is an online service for electronic signatures without using
            physical cryptographic token. Application service providers use e-KYC
            service to authenticate signers and facilitate digital signing of
            documents.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ESignPage;
