import React from "react";
import styled from "styled-components";
import LandingPhoto from "../../Assets/Photos/landing-page.jpg";

const TopConatiner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: url(${LandingPhoto});
  background-position: 0px -170px;
  background-size:cover;
`;
const Background = styled.div`
  width:100%;
  height:100%;
  background-color:rgba(38,70,84,0.7);
  display:flex;
`;
function TopSection() {
  return (
    <>
      <TopConatiner>
          <Background/>
      </TopConatiner>
    </>
  );
}
export default TopSection;
