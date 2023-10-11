import React, { useState } from "react";
import { Container, Typography, Checkbox, FormControlLabel, LinearProgress, Grid, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const ESignPage = () => {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);

    const handleCheckboxChange = (event) => {
        // Update the progress based on the number of checked checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const checkedCheckboxes = [...checkboxes].filter(checkbox => checkbox.checked);
        setProgress((checkedCheckboxes.length / checkboxes.length) * 100);
    };

    const handleProceedClick = () => {
        navigate("/congratulation");
    };

    return (
        <Container>
            <Grid  container
            spacing={2}
            justifyContent="center"
            alignItems="center"
            style={{ minHeight: "50vh" }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                        E-sign Document: {Math.round(progress)}%
                    </Typography>
                    <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px" }} />

                    <FormControlLabel
                        control={<Checkbox onChange={handleCheckboxChange} />}
                        label="Consent for e-sign using Aadhaar OTP"
                    />

                    <FormControlLabel
                        control={<Checkbox onChange={handleCheckboxChange} />}
                        label="Consent for T&C"
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleProceedClick}>
                        Proceed to E-Sign
                    </Button>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Typography variant="h6">What is E-sign?</Typography>
                    <Typography>
                        eSign is an online service for electronic signatures without using physical cryptographic token.
                        Application service providers use e-KYC service to authenticate signers and facilitate digital signing of documents.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ESignPage;
