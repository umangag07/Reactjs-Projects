import React from 'react'
import { Bars, Nav, NavBtn, NavBtnLink, NavLink, NavMenu } from './NavbarElements'

function Navbar() {
    return (
        <>
          <Nav>
            <NavLink to ="/"><h1>Logo</h1></NavLink>
            <Bars/>
            <NavMenu>
                <NavLink to="/services" activeStyle>Services</NavLink>
                <NavLink to="/pricing" activeStyle>Pricing</NavLink>
                <NavLink to="/about" activeStyle>About</NavLink>
                <NavLink to="/contact" activeStyle>Contact</NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signIn">Sign In</NavBtnLink>
            </NavBtn>
          </Nav> 
        </>
    )
}

export default Navbar
