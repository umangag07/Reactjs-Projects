import React from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import Marginer from "./Marginer";


const Seperator = styled.span`
  width: 100%;
  height: 1px;
  background-color: black;
  display: flex;
`;
const InfoConatiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props=>props.direction};
`;
const Text = styled.div`
     font-size:${props=>props.size};
     color:${props=>props.color};
`;
function CardComp(props) {
  const {thumbnailUrl,title,rating,rate,specialist} = props
  return (
    <>
      <Card style={{ width: "18rem", height:"28rem" }}>
        <Card.Img variant="top" src={thumbnailUrl} width="253.2px" height="185.93px" />
        <Card.Body>
          <Text size="26px" color="#045762">{title}</Text>
          <Marginer direction="vertical" margin="13px" />
          <InfoConatiner direction="flex-start">
           <Text size="16px" color="#df5c5c">Rating : {rating}</Text> 
            <Text size="17px" color="#df5c5c">Price (startingFrom): {rate}</Text>
          </InfoConatiner>

          <Seperator />
          <Marginer direction="vertical" margin="13px" />
          <InfoConatiner direction="flex-end">
            <Text size="19px" color="#4e8d7c">By : {specialist.fullname}</Text>
           
          </InfoConatiner>

          <Marginer direction="vertical" margin="15px" />
          <Button variant="info">Book Now</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComp;
