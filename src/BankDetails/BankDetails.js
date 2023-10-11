import React, { useState } from "react";
import { Button, Container, Grid, Typography, TextField, Checkbox, FormControlLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

function BankDetails() {
  const navigate = useNavigate();
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [confirmAccountNumber, setConfirmAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [micrCode, setMicrCode] = useState("");
  const [consentBankDetails, setConsentBankDetails] = useState(false);
  const [consentTAndC, setConsentTAndC] = useState(false);

  const handleBankAccountNumberChange = (event) => {
    setBankAccountNumber(event.target.value);
  };

  const handleConfirmAccountNumberChange = (event) => {
    setConfirmAccountNumber(event.target.value);
  };

  const handleIfscCodeChange = (event) => {
    setIfscCode(event.target.value);
  };

  const handleMicrCodeChange = (event) => {
    setMicrCode(event.target.value);
  };

  const handleConsentBankDetailsChange = (event) => {
    setConsentBankDetails(event.target.checked);
  };

  const handleConsentTAndCChange = (event) => {
    setConsentTAndC(event.target.checked);
  };

  const handleSubmit = () => {
    navigate("/invalidbank");
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
            Your Bank Details
          </Typography>
          <TextField
            id="bankAccountNumber"
            label="Bank Account Number"
            fullWidth
            placeholder="Enter your bank account number"
            margin="normal"
            value={bankAccountNumber}
            onChange={handleBankAccountNumberChange}
          />
          <TextField
            id="confirmAccountNumber"
            label="Confirm Account Number"
            fullWidth
            placeholder="Confirm your bank account number"
            margin="normal"
            value={confirmAccountNumber}
            onChange={handleConfirmAccountNumberChange}
          />
          <TextField
            id="ifscCode"
            label="IFSC Code"
            fullWidth
            placeholder="Enter your IFSC code"
            margin="normal"
            value={ifscCode}
            onChange={handleIfscCodeChange}
          />
          <TextField
            id="micrCode"
            label="MICR Code"
            fullWidth
            placeholder="Enter your MICR code"
            margin="normal"
            value={micrCode}
            onChange={handleMicrCodeChange}
          />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControlLabel
            control={
              <Checkbox
                checked={consentBankDetails}
                onChange={handleConsentBankDetailsChange}
                name="consentBankDetails"
              />
            }
            label="Consent for bank details access"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={consentTAndC}
                onChange={handleConsentTAndCChange}
                name="consentTAndC"
              />
            }
            label="Consent for T&C"
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BankDetails;
