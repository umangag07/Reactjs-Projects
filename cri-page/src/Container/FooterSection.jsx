import React from "react";
import styled from "styled-components";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaGlobe} from "react-icons/fa";
import { FiPhone} from "react-icons/fi";

const Footer = styled.div`
  max-width: 100vw;
  height: 15vh;
  display: flex;
  background-color: red;
  padding: 1em;
  margin: 0px;
  justify-content: space-between;
  @media (max-width: 415px) {
    display:flex;
      width:100%;
      height:9vh;
      padding:0px;
      margin:0px;
      align-items:center;
    
  }
`;

const Icons = styled.div`
  color: white;
  width: 250px;
  height: 100px;
  display: flex;
  margin-left: 5em;
  align-items: center;
  /* background-color:gray; */
  @media (max-width: 415px) {
    display:flex;
    flex-direction:column;
      width:90px;
      height:20px;
      margin:0px;
      padding:0px;
      font-size:8.5px;
  }
`;
const Logo = styled.div`
    /* size:"26px"; */
`
const Text = styled.p`
  display: flex;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: "10px";
  font-weight: ${(props) => (props.weight ? props.weight : 300)};
  text-align: center;
  padding: 0;
  margin: ${(props) => (props.margin ? props.margin : "")};
`;
function FooterSection() {
  return (
    <>
      <Footer>
        <Icons>
          <Logo><FiPhone/></Logo>
          <Text color="white" margin="2px">
            Toll free 1800 200 1234
          </Text>
        </Icons>
        <Icons>
         <Logo><RiFacebookCircleFill/></Logo> 
          <Text color="white" margin="2px">
            www.facebook.com/cripumps
          </Text>
        </Icons>
        <Icons>
         <Logo><FaGlobe/></Logo> 
          <Text color="white" margin="2px">
            www.crigroups.com
          </Text>
        </Icons>
      </Footer>
    </>
  );
}

export default FooterSection;
