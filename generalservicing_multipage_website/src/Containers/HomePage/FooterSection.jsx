import React from "react";
import styled from "styled-components";

import Marginer from "../../components/Marginer";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
const FooterConatiner = styled.div`
  display: flex;
  flex-direction:column;    
  width: 100%;
  height: 25em;
  background-color: cadetblue;
 `;

 const FooterMiddSection = styled.div`
   display:flex;
   flex-direction:row;
   padding:2em;
 `;
 const FooterLastSection = styled.div`
 display:flex;
 flex-direction:row;
 justify-content:space-between;
 padding:3px;
`;

const LinkSec = styled.div`
      display:flex;
      flex-direction:column;
      margin:1em;
      padding:0.5em;
`;
const Link = styled.a`
     font-size:${props=>props.size};
     color:${props=>props.color};
     text-align:left;
     margin:2px;
     :hover{
         color:grey;
     }
`;
const Text = styled.div`
     font-size:${props=>props.size};
     color:${props=>props.color};
     text-align:left;
     margin:2px;
    
`;
const Line = styled.span`
   display:flex;
   width:100%;
   height:1px;
   background-color:white;
   margin-bottom:1em;
`;
const SocialIcon = styled.div`
    display:flex;
    width: 150px;
    color:white;
    padding:1px;
    justify-content:space-between;
    margin:0.5em;
   
`;


function FooterSection() {
  return (
    <>
      <FooterConatiner>
          <FooterMiddSection>
        <LinkSec>
            <Text size="25px" color="white">Categories</Text>
            <Marginer direction="vertical" margin="1em"/>
            <Link size="16px" color="white">Car Wash</Link>
            <Link size="16px" color="white">Grocery Shopping</Link>
            <Link size="16px" color="white">Garden Cleaning</Link>
            <Link size="16px" color="white">Baby Sitting</Link>
        </LinkSec>
        <LinkSec>
            <Text size="25px" color="white">Accessibility</Text>
            <Marginer direction="vertical" margin="1em"/>
            <Link size="16px" color="white">Login</Link>
            <Link size="16px" color="white">Register</Link>
            <Link size="16px" color="white">Login as Specialist</Link>
            <Link size="16px" color="white">Register as Specialist</Link>
            <Link size="16px" color="white">Become Specialist with us</Link>
        </LinkSec>
        </FooterMiddSection>
        <Line/>
        <FooterLastSection>
        <Text size="30px" color="white">DoorStep Servicing</Text>
        <SocialIcon>
        <Link color="white" href="http://facebook.com"><FontAwesomeIcon icon={faFacebook}/></Link>
        <Link color="white" href="http://twitter.com"><FontAwesomeIcon icon={faTwitter}/></Link>
        <Link color="white" href="http://instagram.com"><FontAwesomeIcon icon={faInstagram}/></Link>
        <Link color="white" href="http://linkedin.com"><FontAwesomeIcon icon={faLinkedin}/></Link>
        </SocialIcon>
        </FooterLastSection>
        <Text size="10px" color="white">c All Rights Reserved, 2020</Text>
        
      </FooterConatiner>
    </>
  );
}

export default FooterSection;
