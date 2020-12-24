import React from "react";
import Navbar from "../../components/Navbar";
import TopSection from "./TopSection";
import styled from "styled-components";
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
      </Wrapper>
    </>
  );
}

export default HomePage;
