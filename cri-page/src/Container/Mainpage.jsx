import React from "react";
import styled from "styled-components";
import ProductSection from "./ProductSection";
import FooterSection from "./FooterSection";
import LogoSection from "./LogoSection";
import AwardSection from "./AwardSection";

const PageContainer = styled.div`
  width: 100%;
  min-height: 200vh;
  background: rgb(255, 255, 174);
  display: flex;
  flex-direction: column;
  background: rgb(255, 255, 174);
  background: linear-gradient(
    0deg,
    rgba(255, 255, 174, 1) 57%,
    rgba(255, 252, 222, 1) 74%
  );
`;

function Mainpage() {
  return (
    <>
      <PageContainer>
        <LogoSection />
        <AwardSection />
        <ProductSection />
        <FooterSection />
      </PageContainer>
    </>
  );
}

export default Mainpage;
