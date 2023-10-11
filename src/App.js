import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/optverification/*" element={<OptVerification />} />
            <Route path="/email/*" element={< Email/>} />
            <Route path="/emailotpverification/*" element={< EmailOtpVerification/>} />
            <Route path="/panverification/*" element={<Pan/>} />
            <Route path="/showpandetails/*" element={<PanDetails/>} />
            <Route path="/adhaarkyc/*" element={<AdhaarKYC/>} />
            <Route path="/bankdetails/*" element={<BankDetails/>} />
            <Route path="/invalidbank/*" element={<InvalidBank/>} />
            <Route path="/uploadbankproof/*" element={<UploadBankProof/>} />
            <Route path="/esign/*" element={<ESignPage/>} />
            <Route path="/congratulation/*" element={<CongratulationsPage/>} />
            <Route path="/photo/*" element={<Photo/>} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
