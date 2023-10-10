import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import OptVerification from "./OptVerification/OptVerification";
import SignUp from "./SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/optverification/*" element={<OptVerification />} />
          </Routes>
          <Footer />
        </header>
      </div>
    </Router>
  );
}

export default App;
