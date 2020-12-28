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
  position:absolute;
  display: flex;
  flex-direction: column;
  border-radius: 70%;
  background: rgb(11, 55, 162);
  background: linear-gradient(
    90deg,
    rgba(11, 55, 162, 1) 7%,
    rgba(5, 191, 176, 1) 48%,
    rgba(0, 255, 218, 1) 87%
  );
`;
function AccountBox() {
  return (
    <div>
      <BoxConatiner>
        <TopConatainer>
          <Backdrop></Backdrop>
        </TopConatainer>
      </BoxConatiner>
    </div>
  );
}

export default AccountBox;
