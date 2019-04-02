import React from "react";
const url = "http://api.nbp.pl/api/exchangerates/rates/c/";


export class GetPrice extends React.Component {
  state = {
    currencyValue: false
  };

  simulateChange(){
	  this.setState({
		  currencyValue: Math.floor(this.state.currencyValue*1000 + (Math.floor(Math.random() * (45 + 45) - 45)))/1000
	  });
  }

  componentDidMount() {
    fetch(url + this.props.curr)
      .then(res => {
        return res.json();
      })
      .then(data => {
		  const cur = data.rates[0][this.props.task];
        this.setState({
          currencyValue: cur
        });
      })
      .then(() => {
        this.interval = setInterval(() => {
         this.simulateChange();
        }, 60000);
      });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return this.state.currencyValue ? this.state.currencyValue : "...";
  }
}
