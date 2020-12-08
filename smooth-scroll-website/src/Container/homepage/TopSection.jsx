import React from "react";
import styled from "styled-components";
import teamImg from '../../Assets/photos/company_team.jpg'
import { Button } from "../../Components/button/Index";
import { Indexlogo } from "../../Components/Logo/Indexlogo.jsx";
import { Marginer } from "../../Components/Marginer/Index.jsx";
import { theme } from '../../styles';

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${teamImg}); 
`;

const BgEffect = styled.div`
  width: 100%;
  height: 100%;
  background-color:rgba(55,89,90,0.45) ;
  display:flex;
  flex-direction:column;
  align-items:center; 
`;

const Openingtext = styled.h1`
   font-size:32px;
  
   margin:0;
   color:${theme.color1};
`;

export function TopSection(props) {
  return (
    <>
     <TopContainer>
       <BgEffect>
         <Marginer direction="vertical" margin="9em"/>
         <Indexlogo/>
         <Marginer direction="vertical" margin="3em"/>
         <Openingtext>Reach Out To Millions By Taking Your Business Online</Openingtext>
         <Marginer direction="vertical" margin="1em"/>
         <Openingtext>We Have Experience Developers For Every</Openingtext>
         <Openingtext>Online Service</Openingtext>
         <Marginer direction="vertical" margin="4em"/>
         <Button>Start Your Project</Button>
       </BgEffect>
     </TopContainer>
    </>
  );
}
