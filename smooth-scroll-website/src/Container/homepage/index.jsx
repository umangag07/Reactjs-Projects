import React from 'react'
import styled from 'styled-components'
import { ServiceSection } from './ServiceSection';
import { TopSection } from './TopSection';

const PageContainer = styled.div`
    width: 100%;
    height: 100vh; 
    padding: 0;
    display: flex;
    flex-direction: column;
`;
export function Homepage(props){
return( <PageContainer>
          <TopSection/>
          <ServiceSection/>
        </PageContainer>
)}