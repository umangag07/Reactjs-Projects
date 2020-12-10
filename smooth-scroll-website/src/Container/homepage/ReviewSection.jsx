import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer/Index";
import { CardIndex } from "../../Components/ReviewCard/CardIndex";
import { SectionTitle } from "../../Components/SectionTitle/index_sectionTitle";
import 'pure-react-carousel/dist/react-carousel.es.css';
const ReviewContainer = styled(Element)`
  min-height: 700px;
  display: flex;
  flex-direction: column;;
  align-items:center;
`;
const StyledCarousalProvider = styled(CarouselProvider)`
    width:50%;
`;

export function ReviewSection() {
  return (
    <ReviewContainer name="ReviewConatiner">
      <SectionTitle>Reviews About Us</SectionTitle>
      <Marginer direction="vertical" margin="4em" />
      <StyledCarousalProvider
       naturalSlideHeight={300}
       naturalSlideWidth={200}
       totalSlides={3}
       visibleSlides={1}>
      <Slider>
          <Slide index={0}><CardIndex/></Slide>
          <Slide index={1}><CardIndex/></Slide>
          <Slide index={2}><CardIndex/></Slide>
      </Slider>
     
      </StyledCarousalProvider>
     
    </ReviewContainer>
  );
}
