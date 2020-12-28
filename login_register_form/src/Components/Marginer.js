import React from 'react'
import styled from 'styled-components'

const VerticalMargin = styled.span`
    display:flex;
    height:${({margin})=> 
            typeof margin === "string" ?margin:`${margin}px`};
`;
const HorizontalMargin = styled.span`
    display:flex;
    width:${({margin})=> 
            typeof margin === "string" ?margin:`${margin}px`};
`;

function Marginer(props) {
    const {direction} = props
    if (direction === "horizontal") return <HorizontalMargin {...props}/>
    else return <VerticalMargin {...props}/>
}

export default Marginer
