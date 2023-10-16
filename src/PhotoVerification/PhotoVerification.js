import React, { useState, useRef, useEffect } from 'react';
import { Container, Grid, LinearProgress, Typography, Button, fabClasses } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';

export default function PhotoVerification() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [captured, setCaptured] = useState(false);
    const [photoData, setPhotoData] = useState(null);
    const videoRef = useRef(null);
    const mediaStream = useRef(null); // Create a ref to keep track of the media stream

    useEffect(() => {
        startCamera();
    }, []);

    const handleChange = (event) => {
        setProgress(100);
    };

    const handleCapture = () => {
        const video = videoRef.current;
        if (video) {
            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataURL = canvas.toDataURL('image/png');
            setPhotoData(dataURL);
            setCaptured(true);
    
            // Stop the camera stream tracks
            if (video.srcObject) {
                const tracks = video.srcObject.getTracks();
                tracks.forEach((track) => {
                    track.stop();
                
                });
            }
        }
    };
    
    const handleConfirm = () => {
        localStorage.setItem("photo", photoData);
        handleChange();

        // Stop the camera stream
        
        if (mediaStream.current) {
            const tracks = mediaStream.current.getTracks();
            tracks.forEach((track) => {
                track.stop();
            });
        }

        navigate("/esign");
    };

    const handleRetake = () => {
        setCaptured(false);
        setPhotoData(null);
        startCamera();
    };

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
            mediaStream.current = stream; // Save the stream reference
        } catch (err) {
            console.error('Error accessing the camera:', err);
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
                <Grid item xs={6} sm={4}>
                    <div>
                    <Typography variant="h6" gutterBottom sx={{ mt: "70px" }}>
                        Liveliness Verification : {Math.round(progress)}%
                    </Typography>
                    <LinearProgress variant="determinate" value={progress} sx={{ width: "70%", height: "12px" }} />

                    <Typography variant="h6" gutterBottom sx={{ mt: "50px", fontWeight: 'bold' }}>
                        Live Photo Verification
                    </Typography>
                    </div>
                </Grid>
                <Grid item xs={6} sm={4}>
                {captured ? (
                        <>
                            <img src={photoData} alt="Captured" style={{ width: "100%", maxHeight: "200px" }} />
                            <Typography variant="h6" gutterBottom>
                                Photo Captured. Do you want to confirm or retake?
                            </Typography>
                            <Button variant="contained" color="primary" sx={{ mr: "30px" }} onClick={handleConfirm}>
                                Confirm
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleRetake}>
                                Retake
                            </Button>
                        </>
                    ) : (
                        <Button variant="contained" color="primary" onClick={handleCapture}>
                            Capture
                        </Button>
                    )}
                  
                </Grid>
                <Grid item xs={6} sm={4}>
              
                    <Paper elevation={3} sx={{ padding: '12px', maxWidth: '220px', margin: '0 auto' }}>
                        <video ref={videoRef} autoPlay muted style={{ width: "220px", height: "20%" }} />
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}
