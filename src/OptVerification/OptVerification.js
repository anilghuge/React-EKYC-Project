import React from "react";
import { Button, TextField, Container, Grid} from "@mui/material";
function OptVerification(){
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

              <TextField
                id="mobileNumber"
                label="Mobile Number"
                fullWidth
                placeholder="Enter your mobile number here"
                margin="normal"
              />
              <Button variant="contained" color="primary" fullWidth>
                Verify
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
        <img src="MobileVerfication.jfif" alt="MobileVerfication" style={{ width: "70%", height: "50%" }}
        />
        </Grid>
          </Grid>
        </Container>
      );

}

export default OptVerification;