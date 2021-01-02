import React from 'react'
import styled from 'styled-components'

const CustomImage = styled.div`
    width:${props => props.width};
    height:${props => props.height};
    img{
        width:100%;
        height:100%;
    }  
`
function CustomImager(props) {
    const {width,height,imgsrc} = props
    return (
        <>
           <CustomImage width = {width} height={height}> <img src={imgsrc} alt="img"/> </CustomImage> 
        </>
    )
}

export default CustomImager
