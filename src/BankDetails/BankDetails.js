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
  const [error, setError] = useState("");

  const handleBankAccountNumberChange = (event) => {
    const cleanedBankAccountNumber = event.target.value;
    setBankAccountNumber(cleanedBankAccountNumber);
  };

  const handleConfirmAccountNumberChange = (event) => {
    const cleanedConfirmAccountNumber = event.target.value;
    setConfirmAccountNumber(cleanedConfirmAccountNumber);
  };

  const handleIfscCodeChange = (event) => {
    const cleanedIfscCode = event.target.value;
    setIfscCode(cleanedIfscCode);
  };

  const handleMicrCodeChange = (event) => {
    const cleanedMicrCode = event.target.value;
    setMicrCode(cleanedMicrCode);
  };

  const handleConsentBankDetailsChange = (event) => {
    setConsentBankDetails(event.target.checked);
  };

  const handleConsentTAndCChange = (event) => {
    setConsentTAndC(event.target.checked);
  };

  const handleSubmit = () => {
  if (bankAccountNumber === '') {
    setError("Bank Account Number is required.");
  } else if (!/^\d{16}$/.test(bankAccountNumber)) {
    setError("Invalid Bank Account Number. Please enter a 10-digit number.");
  } else if (confirmAccountNumber === '') {
    setError("Please confirm your bank account number.");
  } else if (ifscCode === '') {
    setError("Please enter IFSC Code.");
  } else if (!/^[A-Z]{4}\d{7}$/.test(ifscCode)) {
    setError("Invalid IFSC Code. Please enter a valid IFSC Code.");
  } else if (micrCode === '') {
    setError("Please enter MICR Code.");
  } else if (!/^\d{11}$/.test(micrCode)) {
    setError("Invalid MICR Code. Please enter a 9-digit number.");
  } else if (!consentBankDetails) {
    setError("Please provide consent for bank details access by checking the checkbox.");
  } else if (!consentTAndC) {
    setError("Please provide consent for T&C.");
  } else {
    localStorage.setItem("bankAccountNumber", bankAccountNumber);
    navigate("/invalidbank");
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
            inputProps={{
              maxLength: 16
            }}
          />
          <TextField
            id="confirmAccountNumber"
            label="Confirm Account Number"
            fullWidth
            placeholder="Confirm your bank account number"
            margin="normal"
            value={confirmAccountNumber}
            onChange={handleConfirmAccountNumberChange}
            inputProps={{
              maxLength: 16
            }}
          />
          <TextField
            id="ifscCode"
            label="IFSC Code"
            fullWidth
            placeholder="Enter your IFSC code"
            margin="normal"
            value={ifscCode}
            onChange={handleIfscCodeChange}
            inputProps={{
              maxLength: 11
            }}
          />
          <TextField
            id="micrCode"
            label="MICR Code"
            fullWidth
            placeholder="Enter your MICR code"
            margin="normal"
            value={micrCode}
            onChange={handleMicrCodeChange}
            inputProps={{
              maxLength: 11
            }}
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
          {error && <div style={{ color: "red" }}>{error}</div>}
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
