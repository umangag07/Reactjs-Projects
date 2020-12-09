import React from "react";
import { Element, scroller } from "react-scroll";
import styled from "styled-components";
import teamImg from "../../Assets/photos/company_team.jpg";
import { Arrow } from "../../Components/Arrow/ArrowIndex";
import { Button } from "../../Components/button/Index";
import { Indexlogo } from "../../Components/Logo/Indexlogo.jsx";
import { Marginer } from "../../Components/Marginer/Index.jsx";
import { Navbar } from "../../Components/Navbar/Navbar";
import { theme } from "../../styles";

const TopContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${teamImg});
`;

const BgEffect = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 89, 90, 0.69);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Openingtext = styled.h1`
  font-size: 32px;

  margin: 0;
  color: ${theme.color1};
`;
const ArrowConatiner = styled.div`
  display: flex;
`;

export function TopSection(props) {
  const ScrollToNextSection = () => {
    scroller.scrollTo("ServiceSection", { smooth: true, duration: 1100 });
  };
  return (
    <>
      <Element name="topSection">
        <TopContainer>
          <BgEffect>
            <Navbar />
            <Marginer direction="vertical" margin="9em" />
            <Indexlogo />
            <Marginer direction="vertical" margin="3em" />
            <Openingtext>
              Reach Out To Millions By Taking Your Business Online
            </Openingtext>
            <Marginer direction="vertical" margin="1em" />
            <Openingtext>We Have Experience Developers For Every</Openingtext>
            <Openingtext>Online Service</Openingtext>
            <Marginer direction="vertical" margin="4em" />
            <Button>Start Your Project</Button>
            <Marginer direction="vertical" margin="6em" />
            <ArrowConatiner onClick={ScrollToNextSection}>
              <Arrow />
            </ArrowConatiner>
          </BgEffect>
        </TopContainer>
      </Element>
    </>
  );
}
