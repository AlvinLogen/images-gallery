/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { ReactComponent as Logo } from "../images/logo.svg";

const navbarStyle = {
  backgroundColor: "black",
};

const logo = "android-chrome-512x512.png";
const size = "40";

const Header = ({ title }) => {
  return (
    <Navbar style={navbarStyle} variant="dark">
      <Container>
        <a>
          <img src={logo} width={size} height={size}></img>
          <Logo
            style={{
              maxWidth: "15rem",
              maxHeight: "2.5rem",
            }}
          />
        </a>
      </Container>
    </Navbar>
  );
};

export default Header;
