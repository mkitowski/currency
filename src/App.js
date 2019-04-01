import React, { Component } from 'react';
import {ConvectForm} from './comonents/Form';
import {GetData} from './comonents/GetData';
import styled from 'styled-components';
import {Header} from './comonents/Header/Header';

const data = new GetData();



const MainDiv = styled.div`
  box-sizing: border-box;
`

class App extends Component {
  render() {

    data.getUSD();

    return (
      <MainDiv>
        <header className="App-header">
        <Header/>
          {console.log(data.getUSD())}
          <p>{data.getUSD()} PLN
          </p>
          <ConvectForm/>
        </header>
      </MainDiv>
    );
  }
}

export default App;
