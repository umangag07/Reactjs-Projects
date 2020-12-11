import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from "../../styles";
import { Marginer } from "../Marginer/Index";

const ReviewCardConatainer = styled.div`
  width: 370px;
  height: 500px;
  background-color: ${theme.color1};
  box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.3);
  border-radius: 5px;
  margin: 5px 2em;
  position: relative;
   
  @media (max-width:768px){
    @media (min-width:415px){
      width: 98%;
      height: 100%;
      margin: 0px 0em;
  box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.1);
  }}
  @media (max-width:376px){
    width: 98%;
  height: 100%;
  margin: 0px 0em;
  box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.1);
  }
  @media (max-width:415px){
    @media (min-width:377px){
    width: 99%;
  height: 100%;
  margin: 0px 0em;
  box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.1);
  }
  }
 
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 10px;
  left: 15px;
  font-size: 30px;
  color: ${theme.color5};

  @media (max-width:376px){
    top: 5px;
  left: 10px;
  font-size: 20px;
  }
`;
const Reviewtext = styled.p`
  position: absolute;
  font-size: 18px;
  color: ${theme.color2};
  padding-left: 12px;
  padding-right: 13px;
  margin-top:4em;
  margin-bottom:10em;
  @media (max-width:768px){
    @media (min-width:415px){
    margin-top:4em;
    margin-bottom:1em;
  }}
  @media (max-width:376px){
    
  font-size: 15px;
  margin-top:3em;
  margin-bottom:0em;
  }
`;
const Line = styled.span`
  min-width: 80%;
  min-height: 1px;
  display: flex;
  background-color: ${theme.color5};
  margin-top: 6em;
  margin-bottom: 1em;

  @media (max-width:768px){
    @media (min-width:415px){
      margin-top:10em;
    margin-bottom:0.8em
  }}
  @media (max-width:376px){
    
   
    margin-top:0em;
    margin-bottom:0em;
    }
    
  @media (max-width:415px){
    @media (min-width:377px){
   
    margin-top:2em;
    margin-bottom:1em;
    }}
`;
const UserDetail = styled.div`
  display: flex;
`;
const UserImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 10px;
  border-radius: 50%;
  padding:2px;
  background-color: ${theme.color5};
`;
const UserName = styled.p`
  font-size: 16px;
  margin-left: 15px;
  color: ${theme.color2};
`;

export function CardIndex(props) {
  const { Review, Name, ImgUrl } = props;
  return (
    <>
      <ReviewCardConatainer>
        <QuoteIcon>
          <FontAwesomeIcon icon={faQuoteLeft} />
        </QuoteIcon>
        {/* <Marginer direction="vertical" margin="4em" /> */}
        <Reviewtext>{Review}</Reviewtext>
        <Marginer direction="vertical" margin="19em" />
        <Line />
        <UserDetail>
          <UserImg src={ImgUrl} />
          <UserName>{Name}</UserName>
        </UserDetail>
      </ReviewCardConatainer>
    </>
  );
}
