import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OptVerification from "./OptVerification/OptVerification";
import SignUp from "./SignUp/SignUp";
import Email from "./Email/Email";
import EmailOtpVerification from "./EmailOtpVerification/EmailOtpVerification";
import Pan from "./PAN/Pan";
import PanDetails from "./PAN/PanDetails";
import AdhaarKYC from "./AdhaarKYC/AdhaarKYC";
import BankDetails from "./BankDetails/BankDetails";
import InvalidBank from "./BankDetails/InvalidBank";
import UploadBankProof from "./BankDetails/UploadBankProof";
import ESignPage from "./ESign/ESign";
import CongratulationsPage from "./Congratulation/Congratulation";
import Photo from "./PhotoVerification/Photo";
import PhotoVerification from "./PhotoVerification/PhotoVerification";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [mobileotpauthenticated,setMobileOtpAuthenticated]=useState(false);
  
  const handleOTPVerification = () => {
    setMobileOtpAuthenticated(true);
  }

  const handleVerification=()=>{
    setAuthenticated(true);
  }
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<SignUp/>}
        />
        <Route
          path="/optverification/*"
          element={<OptVerification handleOTPVerification={handleOTPVerification}/>}
        />
        <Route
          path="/email/*"
          element={mobileotpauthenticated?<Email />:<Navigate to="/" />}
        />
        <Route
          path="/emailotpverification/*"
          element={mobileotpauthenticated?<EmailOtpVerification handleVerification={handleVerification}/>:<Navigate to="/" />}
        />
        <Route
          path="/panverification/*"
          element={authenticated ? <Pan /> : <Navigate to="/" />}
        />
        <Route
          path="/showpandetails/*"
          element={authenticated ? <PanDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/adhaarkyc/*"
          element={authenticated ? <AdhaarKYC /> : <Navigate to="/" />}
        />
        <Route
          path="/bankdetails/*"
          element={authenticated ? <BankDetails /> : <Navigate to="/" />}
        />
        <Route
          path="/invalidbank/*"
          element={authenticated ? <InvalidBank /> : <Navigate to="/" />}
        />
        <Route
          path="/uploadbankproof/*"
          element={authenticated ? <UploadBankProof /> : <Navigate to="/" />}
        />
        <Route
          path="/esign/*"
          element={authenticated ? <ESignPage /> : <Navigate to="/" />}
        />
        <Route
          path="/congratulation/*"
          element={authenticated ? <CongratulationsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/photo/*"
          element={authenticated ? <Photo /> : <Navigate to="/" />}
        />
        <Route
          path="/photoverification/*"
          element={authenticated ? <PhotoVerification /> : <Navigate to="/" />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
