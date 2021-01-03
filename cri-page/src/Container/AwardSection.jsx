import React from "react";
import styled from "styled-components";
import award from "../Assets/award.png";
import MainImg from "../Assets/MainImg.png";

const AwardContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  margin-top:2em;
  /* background-color: blueviolet; */
  @media (max-width: 415px) {
      flex-direction:column;
      height:170vh;
  }
`;
const AwardImage = styled.div`
  width: 35%;
  min-height: 80vh;
  /* background-color: black; */
  display: flex;
  order: 1;
  align-items: center;
  margin-right: 1em;
  justify-content: space-around;
  margin: 1em;
  img {
    width: 80%;
    height: 100%;
  }
  @media (max-width: 415px) {
      order:2;
      width:100%;
      margin:0px;
      height:80vh;
  }
`;
const AwardDescription = styled.div`
  width: 60%;
  height: 89vh;
  display: flex;
  order: 2;
  flex-direction: column;
  /* background-color: green; */
  margin: 1em;
  padding: 2px;
  @media (max-width: 415px) {
      order:1;
      width:100%;
      height:89vh;
      margin:0px;
      padding:0px;
      font-size:12.5px;
  }
`;
const Text = styled.p`
  display: flex;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: "10px";
  font-weight: ${(props) => (props.weight ? props.weight : 300)};
  text-align: center;
  padding: 0;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
const ImageContainer = styled.div`
  width: 95%;
  height: 24em;
  margin-left: 1em;
  img {
    width: 100%;
    height: 100%;
    align-self: center;
  }
`;
function AwardSection() {
  return (
    <>
      <AwardContainer>
        <AwardImage>
          <img src={award} alt="award" />
        </AwardImage>
        <AwardDescription>
          <Text weight="600">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </Text>
          <Text margin="0" weight="400">
            <ul>
              <li>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </Text>
          <ImageContainer>
            <img src={MainImg} alt="mainimg" />
          </ImageContainer>
          <Text margin="0" weight="400">
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </Text>
        </AwardDescription>
      </AwardContainer>
    </>
  );
}

export default AwardSection;
