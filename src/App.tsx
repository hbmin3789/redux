import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';
import {createStore} from 'redux';

const Background = styled.div`

`;

function App() {
  

  return (
    <Background>
      <Navigation></Navigation>
    </Background>
  );
}

export default App;
