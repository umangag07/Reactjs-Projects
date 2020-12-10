import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles';


const ReviewCardConatainer = styled.div`
    width:370px;
    height:500px;
    background-color:${theme.color1};
    box-shadow: 0px 0px 16px rgba(88, 80, 80, 0.3);
    border-radius:5px;
`;

export function CardIndex() {
    return <>
    <ReviewCardConatainer>
        
    </ReviewCardConatainer>
    </>
}

