import React from "react";
import styled from "styled-components";
import teamImg from '../../Assets/photos/Team.jpg'
import { Indexlogo } from "../../Components/Logo/Indexlogo";


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


export function TopSection(props) {
  return (
    <>
     <TopContainer>
       <BgEffect>
         <Indexlogo/>
       </BgEffect>
     </TopContainer>
    </>
  );
}
