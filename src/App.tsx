import React from 'react';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';
import {createStore} from 'redux';
import Matrix from './components/Matrix';
const Background = styled.div`

`;

function App() {
  

  return (
    <Background>
      <Matrix></Matrix>
      <Navigation></Navigation>
    </Background>
  );
}

export default App;
