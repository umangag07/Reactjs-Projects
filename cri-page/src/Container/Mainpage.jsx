import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'
const PageContainer = styled.div`
  width:100%;
  min-height:100vh;
  background: rgb(255,255,174);
  display:flex;
  flex-direction:column;
background: linear-gradient(0deg, rgba(255,255,174,1) 23%, rgba(255,252,222,1) 69%); 
`
const LogoContainer = styled.div`
    width:100%;
    height:11vh;
    display:flex;
    background-color:cyan;
    justify-content:space-around;
    align-items:center;
`
const Logo = styled.div`
    width:20em;
    height:7.5em;
    img{
        width:100%;
        height:100%;
    }  
`
function Mainpage() {
    return (
        <>
           <PageContainer>
               <LogoContainer>
                   <Logo><img src={logo} alt="Icon"/></Logo>
               </LogoContainer>
           </PageContainer> 
        </>
    )
}

export default Mainpage
