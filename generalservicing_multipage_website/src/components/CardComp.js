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
function CardComp(props) {
  const {thumbnailUrl,title,rating,rate,specialist} = props
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={thumbnailUrl} width="253.2px" height="185.93px" />
        <Card.Body>
          <h4>{title}</h4>
          <Marginer direction="vertical" margin="13px" />
          <InfoConatiner direction="flex-start">
           <h6>Rating : {rating}</h6> 
            <h6>Price (startingFrom): {rate}</h6>
          </InfoConatiner>

          <Seperator />
          <Marginer direction="vertical" margin="13px" />
          <InfoConatiner direction="flex-end">
            <h5>By : {specialist.fullname}</h5>
           
          </InfoConatiner>

          <Marginer direction="vertical" margin="15px" />
          <Button variant="info">Book Now</Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComp;
