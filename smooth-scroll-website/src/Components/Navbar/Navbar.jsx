import React from 'react'
import styled from 'styled-components'

const NavbarConatiner = styled.div`
   height:10vh;
   width:100%;
   background-color:rgba(55,89,90,0.35);
   border-radius:30px;
   display:flex;
   
`;

export function Navbar(props){
  return(
      <NavbarConatiner></NavbarConatiner>
  )
}