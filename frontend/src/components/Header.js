import React from "react";
import { Navbar, Container } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "black",
};

const logo = "android-chrome-512x512.png";

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <a>
        <img src={logo} width="40" height="40"></img>
      </a>
      <Navbar.Brand className="mx-3 text-uppercase" href="/">
        {title}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
