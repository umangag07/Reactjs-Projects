import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const ServiceContain = styled.div`
  display: flex;
  border: 1px solid ${theme.color2};
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
    margin-top:0px;
    margin-left:0vh;
    margin-right:0vh;
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
  width: 35em;
  height: 35em;
  margin-left:5vh;
  margin-right:5vh;
  justify-content:center;
  margin-top:2em;
 
  order:${({order})=> order? 1 : 2};
  @media (max-width:376px){
    order:1;
    margin-left:5px;
    margin-bottom:0px;
    margin-top:0px;
    width: 22em;
    height: 22em;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    order:1;
    margin-left:5px;
    margin-bottom:0px;
    margin-top:0px;
    width: 25em;
    height: 25em;
  }}
  @media (max-width:801px){
    @media (min-width:416px){
    order:1;
    margin-left:13vh;
    margin-right:13vh;
    width: 30em;
    height: 30em;
    margin-top:0px;
    margin-bottom:0px;
  }}
 
     
`;
const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right:5vh;
  width:40%;
  order:${({order})=> order? 2 : 1};
  @media (max-width:376px){
    order:2;
    width:100%;
    margin-left:0px;
    margin-top:0px;
    font-size:10px;
  }
  @media (max-width:415px){
    @media (min-width:377px){
    order:2;
    width:100%;
    margin-top:0px;
    font-size:10px;
  } } 
  @media (max-width:801px){
    @media (min-width:416px){
    order:2;
    width:100%;
    margin-top:0px;
    font-size:20px;
    
  }}
  
`;

const Title = styled.h2`
  color: ${theme.color5};
  font-weight: 700;
  margin-bottom:0em;
  margin-top:0em;
  text-align:center;
  font-size:30px;
  
`;
const Description = styled.p`
  color: ${theme.color2};
  font-weight: 300;
  text-align: center;
  font-size:15.2px;   
  margin-top:0em;    
  
  
`;

export function MoreAbout(props) {
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
