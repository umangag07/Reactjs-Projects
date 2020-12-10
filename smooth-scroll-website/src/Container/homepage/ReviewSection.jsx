import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer/Index";
import { CardIndex } from "../../Components/ReviewCard/CardIndex";
import { SectionTitle } from "../../Components/SectionTitle/index_sectionTitle";

const ReviewContainer = styled(Element)`
  min-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
`;

export function ReviewSection() {
  return (
    <ReviewContainer name="ReviewConatiner">
      <SectionTitle>Reviews About Us</SectionTitle>
      <Marginer direction="vertical" margin="4em" />
      <CarouselProvider
       naturalSlideHeight={300}
       naturalSlideWidth={200}
       totalSlides={3}
       visibleSlides={1}>
      <Slider>
          <Slide index={0}><CardIndex/></Slide>
          <Slide index={1}><CardIndex/></Slide>
          <Slide index={2}><CardIndex/></Slide>
      </Slider>
     
      </CarouselProvider>
     
    </ReviewContainer>
  );
}
