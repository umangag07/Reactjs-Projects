import React from "react";
import Navbar from "../../components/Navbar";
import TopSection from "./TopSection";
import styled from "styled-components";
import "../../index.css";
import ServiceSection from "./ServiceSection";
import SpecialistSection from "./SpecialistSection";
import FooterSection from "./FooterSection";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function HomePage() {
  return (
    <>
      <Wrapper>
        <TopSection>
          <Navbar />
        </TopSection>
       <ServiceSection/>
       <SpecialistSection/>
       <FooterSection/>
      </Wrapper>
    </>
  );
}

export default HomePage;
