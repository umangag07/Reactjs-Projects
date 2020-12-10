import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles';
import { Marginer } from '../Marginer/Index';


const ReviewCardConatainer = styled.div`
    width:370px;
    height:500px;
    background-color:${theme.color1};
    box-shadow: 0px 0px 10px rgba(88, 80, 80, 0.3);
    border-radius:5px;
    margin: 5px 2em;
    position:relative;
`;

const QuoteIcon = styled.div`
    position:absolute;
    top:10px;
    left:15px;
    font-size:30px;
    color:${theme.color5};
`;
const Reviewtext = styled.p`
    position:absolute;
    font-size:18px;
    color:${theme.color2};
    padding-left:12px;
    padding-right:13px;
`;
const Line = styled.span`
  min-width:80%;
  min-height:1px;
  display:flex;
  background-color:${theme.color5};
  margin-top:20px;
  margin-bottom:5px;
`;

const UserImg  = styled.img`

`;

export function CardIndex() {
    return <>
    <ReviewCardConatainer>
        <QuoteIcon>Q</QuoteIcon>
        <Marginer direction="vertical" margin="6em"/>
        <Reviewtext>I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
            I have been using this site from quite a few months now, develoeprs here are really good.
            Mostly they are patient enough to listen to our ideas.
        </Reviewtext>
        <Marginer direction="vertical" margin="18em"/>
        <Line/>
    </ReviewCardConatainer>
    </>
}

