import React, { useState } from "react";
import { Button, Container, Grid, Typography, Input, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function UploadBankProof() {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setError(""); 
  };

  const handleUpload = () => {
    if (!file) {
      setError("Please select a file");
    } else {
      setUploadSuccess(true);
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
            Upload Bank Proofs
          </Typography>
          <Paper elevation={3} style={{ padding: "20px", textAlign: "center" }}>
            <Input
              type="file"
              accept=".pdf, .jpg, .png"
              onChange={handleFileChange}
            />
            {error && <div style={{ color: "red" }}>{error}</div>}
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleUpload}
            >
              Upload
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          {uploadSuccess && (
            <div style={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Document uploaded successfully!
              </Typography>
              <img
                src="assets/RightSymbol.png"
                alt="UploadSuccessImage"
                style={{ width: "20%", height: "20%" }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => navigate("/photoverification")}
              >
                Proceed
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
