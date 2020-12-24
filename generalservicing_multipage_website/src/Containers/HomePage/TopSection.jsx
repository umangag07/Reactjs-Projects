import React from "react";
import styled from "styled-components";
import LandingPhoto from "../../Assets/Photos/landing-page.jpg";
import landingPagePhoto from "../../Assets/Illustrations/landing_page.svg";
const TopConatiner = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: url(${LandingPhoto});
  background-position: 0px -170px;
  background-size: cover;
`;
const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(38, 70, 84, 0.7);
  display: flex;
`;
const InnerSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const DisplayText = styled.div`
  width: 33em;
  height: 20em;
  font-size: 20px;
  text-align: center;
  background-color: beige;
`;
const DisplayImg = styled.div`
  width: 40em;
  height: 40em;
  img {
    width: 90%;
    height: 100%;
  }
`;
function TopSection() {
  return (
    <>
      <TopConatiner>
        <Background>
          <InnerSection>
            <DisplayText></DisplayText>
            <DisplayImg>
              <img src={landingPagePhoto} />
            </DisplayImg>
          </InnerSection>
        </Background>
      </TopConatiner>
    </>
  );
}
export default TopSection;
