import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";
import { theme } from '../../styles';

const ArrowConatiner = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: rgba(155,189,190,0.45);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border:15px solid transparent;
  cursor:pointer;
  transition:all 500ms ease-in-out;
  &:hover{
      border:2px solid ${theme.color2}
  }
`;

const ArrowIcon = styled.div`
  color: #fff;
  font-size: 35px;
  
`;
export function Arrow(props) {
  return (
    <ArrowConatiner>
      <ArrowIcon>
        <FontAwesomeIcon icon={faAngleDown} />
      </ArrowIcon>
    </ArrowConatiner>
  );
}
