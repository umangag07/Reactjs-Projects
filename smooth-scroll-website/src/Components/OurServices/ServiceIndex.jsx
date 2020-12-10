import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const ServiceContain = styled.div`
  display: flex;
  background-color: ${theme.color1};
  box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.6);
  border-radius: 5px;
 
  margin-left:10vh;
  margin-right:10vh;
  justify-content:center;
  
  @media (max-width:376px){
    display:flex;
    flex-direction:column;
    margin-left:1vh;
    margin-right:1vh;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    display:flex;
    flex-direction:column;
    margin-left:1vh;
    margin-right:1vh;
  }}
  @media (max-width:801px){
    @media (min-width:416px){
    display:flex;
    flex-direction:column;
    margin-left:1vh;
    margin-right:1vh;
  }}
    
  
  

`;
const ServiceImg = styled.img`
  width: 20em;
  height: 20em;
  margin-left:5vh;
  margin-right:5vh;
 
  order:${({order})=> order? 1 : 2};
  @media (max-width:376px){
    order:1;
    margin-left:25px;
    margin-right:25px;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    order:1;
    margin-left:45px;
  }}
  @media (max-width:801px){
    @media (min-width:416px){
    order:1;
    margin-left:18vh;
    margin-right:18vh;
    width: 24em;
    height: 24em;
  }}
 
     
`;
const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right:5vh;
  width:60%;
  order:${({order})=> order? 2 : 1};
  @media (max-width:376px){
    order:2;
    width:100%;
    margin-left:0px;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    order:2;
    width:100%;
  } } 
  @media (max-width:801px){
    @media (min-width:416px){
    order:2;
    width:100%;
    
  }}
  
`;

const Title = styled.h2`
  color: ${theme.color5};
  font-weight: 700;
  margin-bottom:0em;
  text-align:center;
  font-size:30px;
  
`;
const Description = styled.p`
  color: ${theme.color2};
  font-weight: 300;
  text-align: center;
  font-size:20.2px;       
  
  
`;

export function ServiceIndex(props) {
  const { title, description, imageUrl, order } = props;
  return (
    <ServiceContain>
      <ServiceDescription order= {order}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </ServiceDescription>
      <ServiceImg src={imageUrl} order={order} />
    </ServiceContain>
  );
}
