import React from 'react'
import styled from 'styled-components';
import product from "../Assets/product.png";
const ProductContainer = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  /* background-color: orange; */
  align-items: center;
  @media (max-width: 415px) {
      width:100%;
      height:90vh;
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
const Text2 = styled.p`
  color: #9b0606;
  margin: 0;
  padding: 0;
`;
const ProductsImage = styled.div`
  width: 80%;
  height: 50vh;
  /* background-color: green; */
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 415px) {
      width:100%;
      height:35vh;
  }
`;

const LineSpan = styled.span`
  width: 95%;
  height: 1px;
  display: flex;
  background-color: red;
`;
const SegmentSection = styled.span`
  width: 100%;
  height: 15vh;
  font-size:15px;
  display: flex;
  flex-wrap:wrap;
  align-items:center;
  justify-content:center;
  
  /* background-color: cyan; */
  align-items:center;
  @media (max-width: 415px) {
    font-size:10px;
    flex-direction:column;
    margin:0;
    flex-wrap:nowrap;
  }
`;
function ProductSection() {
    return (
        <>
            <ProductContainer>
          <Text weight="400">
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
          <Text weight="700">
            C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
          </Text>
          <SegmentSection>
          <Text weight="300">
            CHEMICALS & PROCESS <Text2> |</Text2> POWER<Text2>|</Text2> WATER &
            WASTE WATER<Text2>|</Text2> OILS & GAS<Text2>|</Text2>
            PHARMA       
          </Text>
          <Text weight="300">
           SUGARS & DISTILLERIES<Text2>|</Text2> PAPER &
            PULP<Text2>|</Text2> MARINE & DEFENCE<Text2>|</Text2>
            METAL & MINING
          </Text>
          <Text weight="300" >
           FOOD & BEVERAGE<Text2>|</Text2> PETROCHEMICAL & REFINERIES<Text2>|</Text2>
            SOLAR<Text2>|</Text2> BUILDING
          </Text>
          <Text weight="300">
            HVAC<Text2>|</Text2>
            FIRE<Text2>|</Text2> FIGHTING AGRICULTURE & RESIDENTIAL
          </Text>
          </SegmentSection>
          
        </ProductContainer>
        </>
    )
}

export default ProductSection
