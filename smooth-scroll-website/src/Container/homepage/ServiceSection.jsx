import React from 'react'
import { Element } from 'react-scroll';
import styled from 'styled-components'
import {SectionTitle} from '../../Components/SectionTitle/index_sectionTitle'

const ServiceContainer = styled(Element)`
   display:flex;
   flex-direction:column;
   width:100%;
   min-height:1000px;

`;

export function ServiceSection(props){
    return( <ServiceContainer name="ServiceSection">
        <SectionTitle>Our Services</SectionTitle>
    </ServiceContainer>)
}