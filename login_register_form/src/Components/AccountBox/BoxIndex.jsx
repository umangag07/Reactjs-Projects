import React from "react";
import styled from "styled-components";

const BoxConatiner = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 0 3px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;
const TopConatainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;
const Backdrop = styled.div`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  transform: rotate(60deg);
  flex-direction: column;
  border-radius: 50%;
  top: -290px;
  left: -70px;
  background: rgb(11, 55, 162);
  background: linear-gradient(
    90deg,
    rgba(11, 55, 162, 1) 19%,
    rgba(26, 159, 218, 1) 35%,
    rgba(5, 191, 176, 1) 72%,
    rgba(2, 126, 224, 1) 85%,
    rgba(0, 255, 218, 1) 97%
  );
`;

const HeaderConatiner = styled.div`
   width:100%;
   display:flex;
   flex-direction:column;
   margin:0px;
   padding:0px;
 
`;

const Text = styled.h2`
    font-size:${props=>props.size? props.size:"20px"};
    color:${props=>props.color? props.color:"white"};
    z-index:10;
    font-weight:600;
    margin:0px;
   
    line-height:1.24;

    
`;
function AccountBox() {
  return (
    <div>
      <BoxConatiner>
        <TopConatainer>
          <Backdrop/>
          <HeaderConatiner>
              <Text size="30px" color="white">Welcome</Text>
              <Text size="30px" color="white">Back</Text>
              <Text size="20px" color="white">Please Login to continue</Text>
          </HeaderConatiner>
      
        </TopConatainer>
      </BoxConatiner>
    </div>
  );
}

export default AccountBox;
