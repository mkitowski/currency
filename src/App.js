import React, { Component } from 'react';
import styled from 'styled-components';
import {Header} from './components/Header/Header';
import Landing from './components/Landing/Landing';
import currencyCodes from './Data/currencies';
const url = "http://api.nbp.pl/api/exchangerates/rates/c/";

const date = new Date();
const hours = date.getHours();
const minutes= date.getMinutes();


const MainDiv = styled.div`
  box-sizing: border-box;
`;

class App extends Component {

  state = {
    actual: []
  }

  setBase(NBPinput,code){
    const bid = NBPinput.rates[0].bid;
    const ask = NBPinput.rates[0].ask;
    const spread = Math.floor(bid/ask*10000)/10000;
    this.setState({  //set base state for rate from NBP
      [code+'-base']: {
        bid,
        ask,
        spread
      }
    });

    return {code,bid,spread}
  }

  generateHistory(real,code) {
    let setMin = minutes;
    let setHour = hours;
    const result = [];
    for (let i=0; i<1440; i++){ //generates random history for every minute
      let newBid = Math.floor(real.bid*1000 + (Math.floor(Math.random() * (45 + 45) - 45)))/1000;
      if(setMin === 0) {
        setMin =59;
        setHour--;
      } else {
        setMin--;
      }
      result.push({
        code: real.code,
        hour: setHour,
        minute: setMin,
        bid: newBid,
        spread: real.spread,
        ask: newBid*real.spread
      })
    }

    this.setState({
      [code+'-day'] : result
    });
    const bid = real.bid;
    const spread = real.spread;
    return {code,bid,spread}
  }


  simulateChanges(real) { //Simulation of life rates changes
    const newBid = Math.floor(real.bid*1000 + (Math.floor(Math.random() * (45 + 45) - 45)))/1000;
    const newRate = {
      code: real.code,
      hour: date.getHours(),
      minute: date.getMinutes(),
      bid: newBid,
      spread: real.spread,
      ask: Math.floor(newBid*real.spread*1000)/1000
    };

    this.state.actual.forEach((el,i)=>{
      if(el.code === real.code){
        this.setState( {
          actual : [...this.state.actual, newRate].slice(1) /// to be changed
        })
      }
    })
    this.setState({
      [real.code+'-day']: [...this.state[real.code+'-day'],newRate].slice(1),
    })
  }

  getData() { //getting current rates for defined currencies, generating 24h history, simulating changes
    currencyCodes.forEach(code => {
      this.setState(prev => {
        return {actual: [...prev.actual,{code}]}
      })
      fetch(url + code).then(res => {
        return res.json(); //receive JSON file - conversion to object
      }).then(data => {
        return this.setBase(data, code); // Setting state with values from NBP API
      }).then(real=>{
        return this.generateHistory(real,code) //generating 24hour history
      }).then(real=>{
        this.interval = setInterval(()=>{
          this.simulateChanges(real); //simulate life changes
        },60000)
      })
    })

  }

  componentDidMount() {

    this.getData();

  }


  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <MainDiv>
        <Header/>
        <Landing currentRates={this.state.actual} />
      </MainDiv>
    );
  }
}

export default App;
