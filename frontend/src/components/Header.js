import React from "react";
import { Navbar } from "react-bootstrap";

const Header = ({ title }) => {
  const logo = "android-chrome-512x512.png";
  return (
    <Navbar bg="dark" variant="dark">
      <a class="navbar-brand" href="#">
        <img src={logo} width="40" height="40"></img>
      </a>
      <Navbar.Brand href="/">{title}</Navbar.Brand>
    </Navbar>
  );
};

export default Header;
