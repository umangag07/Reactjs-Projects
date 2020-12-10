import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer/Index";
import { SectionTitle } from "../../Components/SectionTitle/index_sectionTitle";

const ReviewContainer = styled(Element)`
  min-height: 700px;
  display: flex;
  flex-direction: column;
`;

export function ReviewSection() {
  return (
    <ReviewContainer name="ReviewConatiner">
      <SectionTitle>Review About Us</SectionTitle>
      <Marginer direction="vertical" margin="4em" />
    </ReviewContainer>
  );
}
