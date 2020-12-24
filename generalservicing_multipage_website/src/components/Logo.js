import React from 'react'
import styled from 'styled-components'
import LogoIcon from '../Assets/Logo/logo.png'
import '../index.css'
const Logoconatiner = styled.div`
     display:flex;
     align-items:center;
`;
const LogoImage = styled.div`
margin:0;
     width:${({width})=> width? width:"10em"};
     height:${({height})=> height? height:"8em"};
     img{
         width:100%;
         height:100%;
     }
`;
const LogoText = styled.div`
     margin:0;
     font-size:${({fontSize})=> fontSize ? fontSize: "30px"};
     font-weight:700;
     color:#f1f1f1;
     font-family: 'Cabin', sans-serif;
`;

function Logo(props) {
    const {width,height,fontSize} = props
    return (
        
        <>
        <Logoconatiner width={width} height={height} fontSize={fontSize}>
            <LogoImage><img src={LogoIcon}/></LogoImage>
            <LogoText>DoorStep Servicing</LogoText>
        </Logoconatiner>
            
        </>
    )
}

export default Logo
