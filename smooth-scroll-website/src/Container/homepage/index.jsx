import React from 'react'
import styled from 'styled-components'
import { ReviewSection } from './ReviewSection';
import { Marginer } from "../../Components/Marginer/Index";
import { ServiceSection } from './ServiceSection';
import { TopSection } from './TopSection';
import  AboutSection from './AboutSection';
import FooterSection from './FooterSection';

const PageContainer = styled.div`
    width: 100%;
    min-height: 100vh; 
    padding: 0;
    display: flex;
    flex-direction: column;
`;
export function Homepage(props){
return( <PageContainer>
          <TopSection/>
          <ServiceSection/>
          <Marginer direction="vertical" margin="2em" />
          <ReviewSection/>
          <AboutSection/>
          <Marginer direction="vertical" margin="5em" />
          <FooterSection/>
        </PageContainer>
)}