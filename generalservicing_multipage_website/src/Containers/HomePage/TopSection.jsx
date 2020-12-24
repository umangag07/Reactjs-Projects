import React from "react";
import styled from "styled-components";
import LandingPhoto from "../../Assets/Photos/landing-page.jpg";
import landingPagePhoto from "../../Assets/Illustrations/landing_page.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import Marginer from '../../components/Marginer'
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
  
`;
const DisplayTitle = styled.div`
  font-size: 43px;
  text-align: center;
  color:#df5c5c;
  
`;
const DisplayInnerText = styled.div`
  font-size: 22px;
  text-align: center;
  color:#1c0c36;
  
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
            <DisplayText>
            <Marginer direction="vertical" margin="29px"/>
              <DisplayTitle>Welcome to DoorStep Servicing</DisplayTitle>
              <Marginer direction="vertical" margin="16px"/>
              <DisplayInnerText>
                We provide you with best people for your SERVICES
                You just have to find the right service which you want to be done just by a 
                click from your phone.
               
               </DisplayInnerText>
               <Marginer direction="vertical" margin="16px"/>
              <Button variant="info">Get Started</Button>
            </DisplayText>
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
