import React, { useState } from 'react';
import { Container, Grid, LinearProgress, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

export default function PhotoVerification() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [captured, setCaptured] = useState(false); // State to track whether the photo is captured

    const handleChange = (event) => {
        setProgress(100);
    };

    const handleCapture = () => {
        // Logic to capture the photo (you can add your implementation here)
        setCaptured(true);
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
                    <Typography variant="h6" gutterBottom sx={{ mt: "70px" }}>
                        Liveliness Verification : {Math.round(progress)}%
                    </Typography>
                    <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px" }} />

                    <Typography variant="h6" gutterBottom sx={{ mt: "50px", fontWeight: 'bold' }}>
                        Live Photo Verification
                    </Typography>

                    {captured ? ( // Display "Confirm" and "Retake" buttons after capturing
                        <>
                            <Typography variant="h6" gutterBottom>
                                Photo Captured. Please confirm or retake.
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mr: "30px" }} onClick={() => navigate("/esign")}>
                                Confirm
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => setCaptured(false)}>
                                Retake
                            </Button>
                        </>
                    ) : ( // Display "Capture" button if the photo is not captured
                        <Button variant="contained" color="primary" onClick={handleCapture}>
                            Capture
                        </Button>
                    )}

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ padding: '12px', maxWidth: '220px', margin: '0 auto', }}>
                        <img src="avatar.jpg" alt="Avatar" style={{ width: "220px", height: "20%" }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}
