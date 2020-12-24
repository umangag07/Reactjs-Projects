import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import { Button } from "react-bootstrap";
const NavbarConatiner = styled.span`
  display: flex;
  width: 90%;
  height: 13vh;
  justify-content: space-between;
  padding-left: 2px;
  background: transparent;
 
`;
const Logoconatiner = styled.span`
  display: flex;
  align-items: center;
`;

const AccessibilityConatiner = styled.div`
  display: flex;
  align-items:center;
  justify-content:space-around;
  /* background-color:black; */
 
`;

const Items = styled.div`
  width: 100px;
  height: 4vh;
  /* background-color:beige; */
`;
function Navbar() {
  return (
    <>
      <NavbarConatiner>
        <Logoconatiner>
          <Logo />
        </Logoconatiner>
        <AccessibilityConatiner>
          <Items>
            <Button variant="info">Login</Button>
            
          </Items>
          <Items>
            <Button variant="info">Register</Button>
            
          </Items>
        </AccessibilityConatiner>
      </NavbarConatiner>
    </>
  );
}

export default Navbar;
