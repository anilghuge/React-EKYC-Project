import React from "react";
import { Container, Typography, Grid} from "@mui/material";

const CongratulationsPage = () => {
  return (
    <Container container
    spacing={2}
    justifyContent="center"
    alignItems="center"
    style={{ minHeight: "50vh" }}>
      <Typography variant="h4">Application Completed</Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h6">Congratulations!</Typography>
            <Typography variant="body1">
              You have successfully completed the application. Your application is complete. After verification, you will receive your login credentials on your e-mail.
            </Typography>
        </Grid>
        <Grid item xs={12}>
        <img src="done.avif" alt="Done" style={{ width: "60%", height: "60%" }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CongratulationsPage;
