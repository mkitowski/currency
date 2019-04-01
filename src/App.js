import React, { Component } from 'react';
import {ConvectForm} from './comonents/Form';
import styled from 'styled-components';


class GoldPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'http://api.nbp.pl/api/cenyzlota/',
      price: false
    }
  }

  componentDidMount() {
    fetch(this.state.url).then(res=>{
      return res.json();
    }).then(data=>{
      console.log(data);
      this.setState({
        price: data[0].cena
      })
    }).catch(err=>{
      console.log(err.message);
    })
  }

  render() {
    return this.state.price ? <span>{this.state.price}</span> : null
  }
}

const MainDiv = styled.div`
  box-sizing: border-box;
`

class App extends Component {
  render() {
    return (
      <MainDiv>
        <header className="App-header">
          <p><GoldPrice/> PLN
          </p>
          <ConvectForm/>
        </header>
      </MainDiv>
    );
  }
}

export default App;
