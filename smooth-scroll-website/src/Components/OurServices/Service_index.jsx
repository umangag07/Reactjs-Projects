import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";

const ServiceContain = styled.div`
display: flex;
 
  margin-left:10vh;
  margin-right:10vh;
  justify-content:center;
  
  
    
  }
  

`;
const ServiceImg = styled.img`
  width: 20em;
  height: 20em;
  margin-left:5vh;
  margin-right:5vh;
 
  order:${({order})=> order? 1 : 2};
  
 
     
`;
const ServiceDescription = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right:5vh;
  width:60%;
  order:${({order})=> order? 2 : 1};
 
  
`;

const Title = styled.h2`
  color: ${theme.color5};
  font-weight: 700;
  margin-bottom:0em;
  text-align:center;
  
`;
const Description = styled.p`
  color: ${theme.color2};
  font-weight: 300;
  text-align: center;
  font-size:20.2px;       
  
  
`;

export function Service_index(props) {
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
