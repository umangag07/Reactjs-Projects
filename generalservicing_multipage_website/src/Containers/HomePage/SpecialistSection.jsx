import React from "react";
import styled from "styled-components";
import "../../index.css";
import Sp_illus from "../../Assets/Illustrations/specialist.svg"
import Logo from "../../components/Logo";
import {Button} from 'react-bootstrap'
import Marginer from "../../components/Marginer";
const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0;
  margin: 0;
  display: flex;
  font-family: "Cabin";
  
  padding: 2em;

`;
const DisplayText = styled.div`
  display: flex;
  flex-direction: column;
  width: 36em;
  height: 30em;
  text-align: center;
  margin: 5em;
  border-radius:20px;
  background-color:#a3ddcb;
`;
const StandoutImage= styled.div`
  width: 35em;
  height: 29em;
  margin-top:3.7em;
  img{
      width:100%;
      height:100%;
  }
  
`;
const Text = styled.div`
     font-size:${props=>props.size};
     color:${props=>props.color};
`;
function SpecialistSection() {
  return (
    <>
      <Wrapper>
        <DisplayText>
            <Logo color="#6155a6"/>
            <Text size="35px" color="white">If you are a specialist and have a service to offer</Text>
            <Text size="30px" color="white">We will give you the right customers for your services.</Text>
            <Marginer direction="vertical" margin="2em"/>
            <Button variant="dark">Register here</Button>
        </DisplayText>
        <Marginer direction="horizontal" margin="5em"/>
       <StandoutImage><img src={Sp_illus} alt="sp"/></StandoutImage>
      </Wrapper>
    </>
  );
}

export default SpecialistSection;
