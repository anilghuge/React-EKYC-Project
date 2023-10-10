import React from "react";
import { AppBar, Toolbar } from "@mui/material";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <img src="/logo2.jfif" alt="Logo" />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
