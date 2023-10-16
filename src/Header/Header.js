import React from "react";
import { AppBar, Toolbar, Button } from "@mui/material"; // Import Button from @mui/material

function Header({ authenticated, handleLogout }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="assets/logo2.jfif" alt="Logo" />
      </Toolbar>
      {authenticated && (
        <Button onClick={handleLogout} style={{ color: 'red' }}>LOGOUT</Button>
      )}
    </AppBar>
  );
}

export default Header;
