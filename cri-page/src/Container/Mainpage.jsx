import React from "react";
import styled from "styled-components";
import logo from "../Assets/logo.png";
import award from "../Assets/award.png";
import product from "../Assets/product.png";
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
const LogoImage = styled.div`
  width: 20em;
  height: 7.5em;
  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  width: 100%;
  height: 11vh;
  display: flex;
  background-color: cyan;
  justify-content: space-around;
  align-items: center;
`;

const AwardContainer = styled.div`
  width: 100%;
  height: 89vh;
  display: flex;
  background-color: blueviolet;
`;
const AwardImage = styled.div`
  width: 35%;
  height: 80vh;
  background-color: black;
  display: flex;
  align-items: center;
  margin-right: 1em;
  justify-content: space-around;
  margin: 1em;
  img {
    width: 80%;
    height: 100%;
  }
`;
const AwardDescription = styled.div`
  width: 60%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 1em;
`;
const ProductContainer = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: column;
  background-color: orange;
  align-items: center;
`;
const Footer = styled.div`
  width: 100%;
  height: 15vh;
  display: flex;
  background-color: red;
`;
const Text = styled.p`
  font-size: "10px";
  font-weight:${props => props.weight? props.weight : 300};
`;
const ProductsImage = styled.div`
  width: 80%;
  height: 50vh;
  background-color: green;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100%;
    height: 100%;
  }
`;
const LineSpan = styled.span`
  width: 95%;
  height: 1px;
  display: flex;
  background-color: red;
`;
function Mainpage() {
  return (
    <>
      <PageContainer>
        <LogoContainer>
          <LogoImage>
            <img src={logo} alt="logoicon" />
          </LogoImage>
        </LogoContainer>
        <AwardContainer>
          <AwardImage>
            <img src={award} alt="award" />
          </AwardImage>
          <AwardDescription></AwardDescription>
        </AwardContainer>
        <ProductContainer>
          <Text>
            INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
            RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
            POWER FOR THE NATION.
          </Text>
          <ProductsImage>
            <img src={product} alt="productimg" />
          </ProductsImage>
          <Text>
            Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
            Solar Systems - Motors
          </Text>
          <LineSpan />
          <Text weight="700">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</Text>
        </ProductContainer>
        <Footer />
      </PageContainer>
    </>
  );
}

export default Mainpage;
