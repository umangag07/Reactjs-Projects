import React from 'react'
import styled from 'styled-components'
import SiteLogo from '../../Assets/Logo/Logo.svg'
import { theme } from '../../styles';


const LogoContainer = styled.div`
    display:flex;
    
`; 

const LogoImg = styled.img`
    width:8em;
    height:7em;
`;

const Logotext = styled.div`
   font-size: 40px;
   margin-top:20px;
   color:${theme.color1};
   font-weight:bold;
`;
export function Indexlogo(props) {
    return (
        <LogoContainer>
            <LogoImg src={SiteLogo}/>
            <Logotext>EasyOnline</Logotext>
        </LogoContainer>
    )
}


