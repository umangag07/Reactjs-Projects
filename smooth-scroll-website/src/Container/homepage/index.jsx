import React from 'react'
import styled from 'styled-components'
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
        </PageContainer>
)}