import React, { useEffect, useState } from "react";
import { Button, TextField, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [mobileNumber, setMobileNumber] = useState("");
  const [error, setError] = useState("");
  const [isProceedDisabled, setProceedDisabled] = useState(true);

  const handleMobileNumberChange = (event) => {
    const cleanedMobileNumber = event.target.value.replace(/\D/g, '').substring(0, 10);
    setMobileNumber(cleanedMobileNumber);

    // Enable the "Proceed" button if the mobileNumber is 10 digits, otherwise disable it
    setProceedDisabled(cleanedMobileNumber.length !== 10);
  };

  const handleProceedClick = () => {
    if (mobileNumber.length === 10) {
      localStorage.setItem("mobileNumber", mobileNumber);
      navigate("/optverification");
    } else {
      setError("Invalid Mobile Number. Please enter a 10-digit numeric number.");
    }
  };

  // const handleProceedClick = async () => {
  //   let data ={"mobileNo":mobileNumber,"emailId":""};
  //   try {
  //     const response = await fetch('/public/data.json', {
  //       method: 'POST', // or 'POST' if you prefer
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     if (response.status === 200) {
  //       console.log('Data saved successfully.');
  //     } else {
  //       console.error('Error saving data.');
  //     }
  //   } catch (error) {
  //     console.error('Error saving data:', error);
  //   }
  // };
  
  // const handleProceedClick = () => {
  //   console.log({"mobileNo":mobileNumber,"emailId":""});
  //   if (mobileNumber.length === 10) {
  //     // localStorage.setItem("mobileNumber", mobileNumber);
  //     let data ={"mobileNo":mobileNumber,"emailId":""};
   
  //   axios.get(`/data.json`).then(res => {
  //     console.log(res.data);
  //     let data = res.data;
    
  //     // Use axios.post to create the data.json file with the data
  //     axios.post(`/data.json`, data).then(response => {
  //       console.log(response);
  //     });
  //   });
      
  //   } else {
  //     setError("Invalid Mobile Number. Please enter a 10-digit numeric number.");
  //   }
  // };


  useEffect(()=>{
    axios.get(`/data.json`).then(res => {
    console.log(res.data)
    });
  },[])
  return (
    <Container>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={10} sm={4}>
          <Typography variant="h4" gutterBottom>
            Sign Up
          </Typography>
          <Typography gutterBottom>
            or track an existing application
          </Typography>
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <TextField
            id="mobileNumber"
            label="Mobile Number"
            fullWidth
            margin="normal"
            type="text"
            value={mobileNumber}
            onInput={handleMobileNumberChange}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleProceedClick}
            disabled={isProceedDisabled} // Disable the button based on the state
          >
            Proceed
          </Button>
        </Grid>
        <Grid item xs={8} sm={4}>
          <img src="assets/SignUp.avif" alt="Signup" style={{ width: "100%", height: "auto" }} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
