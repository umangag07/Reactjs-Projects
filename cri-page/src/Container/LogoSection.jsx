import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";

const LogoImage = styled.div`
  width: 20em;
  height: 7.5em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  /* background-color: cyan; */
  justify-content: space-around;
  align-items: center;
`;
function LogoSection() {
  return (
    <>
      <LogoContainer>
        <LogoImage>
          <img src={logo} alt="logoicon" />
        </LogoImage>
      </LogoContainer>
    </>
  );
}

export default LogoSection;
