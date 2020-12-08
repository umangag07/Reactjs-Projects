import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles';

const ButtonWrapper = styled.button`
    padding:5px 12px;
    border-radius:4px;
    border:3px solid ${theme.color2}; 
    background-color:${theme.color2} ;
    color:${theme.color1};
    font-size:16px;
`;


export function Button(props){
return <ButtonWrapper>{props.children}</ButtonWrapper>
}