import React from 'react'
import styled from 'styled-components'

const NavbarConatiner = styled.span`
   display:flex;
   width:100%;
   height:13vh;
   
   padding-left:2px;
   position:fixed;
`;
const Logoconatiner = styled.span`
   display:flex;
  
`;




function Navbar() {
    return (
        <>
        <NavbarConatiner>
            <Logoconatiner>
          
            </Logoconatiner>
        
        </NavbarConatiner>  
        </>
    )
}

export default Navbar
