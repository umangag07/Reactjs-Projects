import React from 'react'
import styled from 'styled-components'
import logo from '../Assets/logo.png'
import CustomImager from '../Components/CustomImager'
const PageContainer = styled.div`
  width:100%;
  min-height:200vh;
  background: rgb(255,255,174);
  display:flex;
  flex-direction:column;
  background: rgb(255,255,174);
  background: linear-gradient(0deg, rgba(255,255,174,1) 57%, rgba(255,252,222,1) 74%); 
`
const LogoContainer = styled.div`
    width:100%;
    height:11vh;
    display:flex;
    background-color:cyan;
    justify-content:space-around;
    align-items:center;
`

const AwardContainer = styled.div`
   width:100%;
   height:89vh;
   display:flex;
   background-color:blueviolet;
`
function Mainpage() {
    return (
        <>
           <PageContainer>
               <LogoContainer>
                 <CustomImager width = "20em" height = "7.5em" imgsrc={logo}/>
               </LogoContainer>
               <AwardContainer></AwardContainer>
           </PageContainer> 
        </>
    )
}

export default Mainpage
