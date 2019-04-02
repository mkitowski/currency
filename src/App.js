import React, { Component } from 'react';
import styled from 'styled-components';
import {Header} from './components/Header/Header';
import Landing from './components/Landing/Landing';


const MainDiv = styled.div`
  box-sizing: border-box;
`

class App extends Component {
  render() {



    return (
      <MainDiv>
        <Header/>
        <Landing/>
      </MainDiv>
    );
  }
}

export default App;
