import React from 'react'
import styled from 'styled-components'
import { Button } from '../button/Index';
import { Indexlogo } from '../Logo/Indexlogo';

const NavbarConatiner = styled.div`
   height:10vh;
   width:100%;
   padding: 0.5em 2em;
   background-color:rgba(55,89,90,0.21);
  
   display:flex;
   justify-content: space-around;
`;

const BrandConatiner = styled.div`
    display:flex;
    align-items:center;
    flex:1;
    margin:1px;
`;

const ButtonsConatiner = styled.div`
   display:flex;
   justify-content: flex-end;
   margin:18px 4px;
`; 

export function Navbar(props){
  return(
      <NavbarConatiner>
          <BrandConatiner><Indexlogo inline/></BrandConatiner>
          <ButtonsConatiner><Button size="12.5" height="35" padding="1px 14px">Get Started</Button></ButtonsConatiner>
          <ButtonsConatiner><Button size="12.5" height="35" padding="2px 19px">Login</Button></ButtonsConatiner>
      </NavbarConatiner>
  )
}