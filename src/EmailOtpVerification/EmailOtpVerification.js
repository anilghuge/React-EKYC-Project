import React from 'react';
import { Button, TextField, Container, Grid, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function EmailOtpVerification() {

    const navigate = useNavigate();

    const handleOtpVerifyClick = () => {

        navigate("/");
    }
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
                    Verify OTP
                </Typography>
              <TextField
                id="emailotpverify"
                label="Enter OTP here!"
                fullWidth
                placeholder="Enter OTP here!"
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth onClick={handleOtpVerifyClick}>
                Verify
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
        <img src="EmailVerification.avif" alt="MobileVerfication" style={{ width: "70%", height: "50%" }}
        />
        </Grid>
          </Grid>
        </Container>
  )
}
