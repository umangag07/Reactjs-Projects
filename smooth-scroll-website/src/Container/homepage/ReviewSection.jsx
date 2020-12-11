import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "../../Components/Marginer/Index";
import { CardIndex } from "../../Components/ReviewCard/CardIndex";
import { SectionTitle } from "../../Components/SectionTitle/index_sectionTitle";
import "pure-react-carousel/dist/react-carousel.es.css";
import { theme } from "../../styles";
import User1 from "../../Assets/Logo/User1.svg";
import User2 from "../../Assets/Logo/User2.svg";
import User3 from "../../Assets/Logo/User3.svg";
import User4 from "../../Assets/Logo/User4.svg";
const ReviewContainer = styled(Element)`
  min-height: 600px;
  display: flex;
  flex-direction: column;

  margin-left: 10vh;
  margin-right: 10vh;
  @media (max-width: 768px) {
    @media (min-width: 415px) {
      margin-left: 0px;
      margin-right: 0px;
      min-height: 800px;
    }
  }

  @media (max-width: 376px) {
    margin-left: 0px;
    margin-right: 0px;
    min-height: 00px;
  }

  @media (max-width: 415px) {
    @media (min-width: 376px) {
      margin-left: 0px;
      margin-right: 0px;
      min-height: 700px;
    }
  }
`;
const StyledCarousalProvider = styled(CarouselProvider)`
  width: 50%;

  justify-content: center;
  margin-left: 280px;
  margin-right: 280px;
  padding-left: 40px;
  padding-right: 20px;
  padding-bottom: 0px;

  @media (max-width: 768px) {
    @media (min-width: 415px) {
      padding-left: 80px;
      padding-right: 90px;
      margin-left: 40px;
      margin-right: 40px;
      width: 90%;
      height: 600px;
      align-self: center;
    }
  }
  @media (max-width: 376px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-left: 5px;
    margin-right: 0px;
    width: 100%;
    height: 90%;
    align-self: center;
  }
  @media (max-width: 415px) {
    @media (min-width: 377px) {
      padding-left: 2px;
      padding-right: 0px;

      width: 100%;
      height: 500px;
      align-self: center;
    }
  }
`;
const StyledSlide = styled(Slide)`
  .carousel__dot--selected {
    display: flex;
    justify-content: center;
  }
`;
const StyledDotGroup = styled(DotGroup)`
  button {
    width: 2px;
    height: 5px;
    border-radius: 30%;
    outline: none;
    margin-top: 10px;
    border: 0px;
    background-color: #c4c4c4;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: ${theme.color2};
    justify-content: center;
    padding-bottom: 0px;
  }
`;

export function ReviewSection() {
  return (
    <ReviewContainer name="ReviewConatiner">
      <Marginer direction="vertical" margin="3em" />
      <SectionTitle>Reviews About Us</SectionTitle>
      <Marginer direction="vertical" margin="1em" />
      <StyledCarousalProvider
        naturalSlideHeight={210}
        naturalSlideWidth={200}
        totalSlides={4}
        visibleSlides={1}
      >
        <Slider>
          <StyledSlide index={0}>
            <CardIndex
              Review={`I have been using this site from quite a few months now, develoeprs here are really good.
                Mostly they are patient enough to listen to our ideas.
                I have been using this site from quite a few months now, develoeprs here are really good.
                Mostly they are patient enough to listen to our ideas.
                I have been using this site from quite a few months now, develoeprs here are really good.
                Mostly they are patient enough to listen to our ideas.`}
              Name={`Mike Jakon`}
              ImgUrl={User1}
            />
          </StyledSlide>
          <StyledSlide index={1}>
            <CardIndex
              Review={`I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            .`}
              Name={`Jennifer Aniston`}
              ImgUrl={User2}
            />
          </StyledSlide>
          <StyledSlide index={2}>
            <CardIndex
              Review={`I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            I have been using this site from quite a few months now, develoeprs here are really good.
           .`}
              Name={"Nina Dobrev"}
              ImgUrl={User3}
            />
          </StyledSlide>
          <StyledSlide index={3}>
            <CardIndex
              Review={`I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.`}
              Name={"Mithila Palkar"}
              ImgUrl={User4}
            />
          </StyledSlide>
        </Slider>
        <StyledDotGroup />
      </StyledCarousalProvider>
    </ReviewContainer>
  );
}
