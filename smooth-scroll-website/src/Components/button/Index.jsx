import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles';

const ButtonWrapper = styled.button`
    height:${({height})=>height ? height+"px" :"45x"};
    padding:${({padding})=>padding ? padding : "7px 12px"};
    border-radius:19px;
    border:3px solid ${theme.color2}; 
    background-color:${theme.color2} ;
    color:${theme.color5};
    font-size:${({size})=>size ? size+"px" :"16px"};
    transition: all 200ms ease-in-out;
    cursor:pointer;
    &:hover{
        background-color:transparent;
        border:2px solid ${theme.color2};
        color:#fff;
        
    }
`;


export function Button(props){
    const {size, height ,padding} = props
return <ButtonWrapper size={size} height={height} padding={padding}>{props.children}</ButtonWrapper>
}