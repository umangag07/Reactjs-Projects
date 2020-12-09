import React from 'react'
import styled from 'styled-components'
import { Indexlogo } from '../Logo/Indexlogo';

const NavbarConatiner = styled.div`
   height:10vh;
   width:100%;
   padding: 0.5em 2em;
   background-color:rgba(55,89,90,0.35);
   border-radius:30px;
   display:flex;
   
`;

const BrandConatiner = styled.div`
    display:flex;
    align-items:center;
`;

const ButtonsConatiner = styled.div`

`; 

export function Navbar(props){
  return(
      <NavbarConatiner>
          <BrandConatiner><Indexlogo inline/></BrandConatiner>
          <ButtonsConatiner></ButtonsConatiner>
      </NavbarConatiner>
  )
}