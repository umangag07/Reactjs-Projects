import './App.css';
import React from 'react'
import styled from 'styled-components';
import AccountBox from './Components/AccountBox/BoxIndex';

const AppConatainer = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content:center;
`;

function App() {
  return (
    <>
      <AppConatainer>
        <AccountBox/>
      </AppConatainer>
    </>
  );
}

export default App;
