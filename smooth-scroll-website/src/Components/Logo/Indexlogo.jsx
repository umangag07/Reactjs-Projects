import React from 'react'
import styled from 'styled-components'
import SiteLogo from '../../Assets/Logo/Logo.svg'
import { theme } from '../../styles';


const LogoContainer = styled.div`
    display:flex;
    
`; 

const LogoImg = styled.img`
    width: ${({inline}) => inline ? "40px":"8em" };
    height: ${({inline}) => inline ? "40px":"7em" };
    
`;

const Logotext = styled.div`
   font-size: ${({inline}) => inline ? "20px":"40px" };
   margin-top:${({inline}) => inline ? "8px":"20px" };
   margin-left:10px;
   color:${theme.color1};
   font-weight:bold;
`;
export function Indexlogo(props) {
    const {inline} = props;
    return (
        <LogoContainer inline={inline}>
            <LogoImg src={SiteLogo} inline={inline}/>
            <Logotext inline={inline}>EasyOnline</Logotext>
        </LogoContainer>
    )
}


