
import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit">
          <Link to="hero" smooth={true} duration={500}>
            Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
