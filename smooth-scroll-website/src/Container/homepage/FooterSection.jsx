import React from "react";
import styled from "styled-components";
import { Element } from "react-scroll";
import { theme } from "../../styles";
import { Indexlogo } from "../../Components/Logo/Indexlogo";
import { Marginer } from "../../Components/Marginer/Index";
import { Button } from "../../Components/button/Index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons'
 const FooterContainer = styled(Element)`
  width: 100%;
  height: 60vh;
  background-color: #1f1f1f;
  display: flex;
  flex-direction: column;
  @media (max-width:801px){
    @media (min-width:416px){
    margin-left:1vh;
    margin-right:1vh;
    height: 40vh;
  }}
  @media (max-width:376px){
    height:70vh;
    margin-left:1vh;
    margin-right:1vh;
  }
`;

const LogoSection = styled.div`
  align-self: center;
  margin-top: 3em;
  
`;

const Footertext = styled.h1`
  font-size: 22px;
  font-weight: 200;

  margin: 0;
  color: ${theme.color1};
  @media (max-width:801px){
    @media (min-width:416px){
    font-size:17px;
  }}
  @media (max-width:376px){
    font-size:15px;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    font-size:16px;
  }}
`;
const ButtonsConatiner = styled.div`
  display: flex;
  justify-content: center;
  margin: 6px 4px;
  
`;

const Line = styled.span`
     width:90%;
     height:1px;
     background-color:${theme.color1};
     margin-left:4em;
     margin-right:2em;
     justify-content:center;
     @media (max-width:801px){
    @media (min-width:416px){
    margin-left:2em;
    margin-right:1em;
    width:90%;
  }}

  @media (max-width:376px){
    width:90%;
    margin-left:1em;
    margin-right:1em;
  }
  @media (max-width:415px){
    @media (min-width:377px){
      width:90%;
    margin-left:1em;
    margin-right:1em;
  }}
`;
const PrivacyConatiner = styled.div`
    display:flex;
    justify-content:start;
    flex-direction:row ;
    margin-left:4em;
    margin-right:2em;
    @media (max-width:376px){
    margin-left:3.3em;
    margin-right:3em;
  }
  @media (max-width:415px){
    @media (min-width:377px){
     
    margin-left:4.4em;
    margin-right:4em;
  }}
  
`;
const SocialMediaLogoConatiner = styled.div`
    display:flex;
    justify-content:end;
    flex-direction:row ;
    margin-left:1em;
    margin-right:4em;
    color:${theme.color1};

    @media (max-width:376px){
    
    margin-right:10em;
  }
  @media (max-width:415px){
    @media (min-width:377px){
   
    margin-right:11em;
  }}
`;
const Terms = styled.h5`
     font-weight:100;
     color:${theme.color1};
      margin-left:1em;
`;
const CompanyRights = styled.h5`
    font-weight:100;
     color:${theme.color1};
     @media (max-width:376px){
    margin-top:4em;
  }
`;

function FooterSection() {
  return (
    <FooterContainer>
      <LogoSection>
        <Indexlogo />
      </LogoSection>
      <Marginer direction="vertical" margin="2em" />
      <Footertext>Our Service are 24x7 so you can start anytime.</Footertext>
      <Footertext>Developers will surely reply within 12hrs.</Footertext>
      <Marginer direction="vertical" margin="1em" />
      <ButtonsConatiner>
        <Button size="15.5" height="40" padding="1px 14px">
          Get Started
        </Button>
      </ButtonsConatiner>
      <Line/>
      <PrivacyConatiner>
        <Terms>Privacy Policy</Terms>
        <Terms>Terms of service</Terms>
        <Terms>Contact</Terms>
      </PrivacyConatiner>
      <SocialMediaLogoConatiner>
        <FontAwesomeIcon icon={faTwitter}/>
        <Marginer direction="horizontal" margin="2em" />
        <FontAwesomeIcon icon={faLinkedin}/>
      </SocialMediaLogoConatiner>
      <CompanyRights>@2020 Easyonline All rights reserved.</CompanyRights>
    </FooterContainer>
  );
}

export default FooterSection;
