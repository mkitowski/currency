import React, { Component } from 'react';
import {GetData} from './components/GetData';
import styled from 'styled-components';
import {Header} from './components/Header/Header';
import Landing from './components/Landing/Landing';

const data = new GetData();



const MainDiv = styled.div`
  box-sizing: border-box;
`

class App extends Component {
  render() {

    data.getUSD();

    return (
      <MainDiv>
        <Header/>
        <Landing>
          <p>{data.getUSD()} PLN
          </p>

        </Landing>
      </MainDiv>
    );
  }
}

export default App;
