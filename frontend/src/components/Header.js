/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar } from "react-bootstrap";

const navbarStyle = {
  backgroundColor: "black",
};

const logo = "android-chrome-512x512.png";
const size = "40";

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <a>
        <img src={logo} width={size} height={size}></img>
      </a>
      <Navbar.Brand className="mx-3 text-uppercase" href="/">
        {title}
      </Navbar.Brand>
    </Navbar>
  );
};

export default Header;
