import React, {Component} from 'react';
import styled from 'styled-components';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {NotFound} from "./components/NotFound";
import {Header} from './components/Header/Header';
import Landing from './components/Landing/Landing';
import currencyCodes from './Data/currencies';
import {Exchange} from "./components/Exchange/Exchange";

const url = "http://api.nbp.pl/api/exchangerates/rates/c/";
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();


const MainDiv = styled.div`
  box-sizing: border-box;
`;

class App extends Component {

	state = {
		actual: [],
		userInfo: {
			Login: {
				name: 'Cinkciarz',
				password: 'tajnehaslo',
				logged: true
			},
			accounts: {
				PLN: 1250,
				USD: 350,
				EUR: 125
			},
		}
	}

	UserLogin = () => {
		let logged;
		this.state.userInfo.Login.logged ? logged = false : logged = true;
		this.setState({
			userInfo: {
				...this.state.userInfo,
				Login: {
					...this.state.userInfo.Login, logged
				}
			}
		})
	}

	setBase(NBPinput, code) {
		const bid = NBPinput.rates[0].bid;
		const ask = NBPinput.rates[0].ask;
		const spread = Math.floor(bid / ask * 10000) / 10000;
		const newRate = {
			code: code,
			hour: date.getHours(),
			minute: date.getMinutes(),
			bid,
			spread,
			ask
		};
		this.setState({  //set base state for rate from NBP
			[code + '-base']: {
				bid,
				ask,
				spread
			},
			actual: [...this.state.actual, newRate]

		});

		return {code, bid, spread}
	}

	generateHistory(real, code) {
		let setMin = minutes;
		let setHour = hours;
		const result = [];
		for (let i = 0; i < 720; i++) { //generates random history for every minute
			let newBid = Math.floor(real.bid * 1000 + (Math.floor(Math.random() * (45 + 45) - 45))) / 1000;
			if (setMin === 0 && setHour === 0) {
				setMin = 59;
				setHour = 23;
			} else if (setMin === 0) {
				setMin = 59;
				setHour--
			} else {
				setMin--;
			}
			result.push({
				code: real.code,
				hour: setHour,
				minute: setMin,
				bid: newBid,
				spread: real.spread,
				ask: newBid * real.spread
			})
		}

		this.setState({
			[code + '-day']: result
		});
		const bid = real.bid;
		const spread = real.spread;
		return {code, bid, spread}
	}

	simulateChanges(real) { //Simulation of life rates changes
		const date = new Date();
		const newBid = Math.floor(real.bid * 1000 + (Math.floor(Math.random() * (45 + 45) - 45))) / 1000;
		const newRate = {
			code: real.code,
			hour: date.getHours(),
			minute: date.getMinutes(),
			bid: newBid,
			spread: real.spread,
			ask: Math.floor(newBid * real.spread * 1000) / 1000
		};


		this.setState({
			[real.code + '-day']: [...this.state[real.code + '-day'], newRate].slice(1),
			actual: [...this.state.actual, newRate].slice(1)
		})
	}

	getData() { //getting current rates for defined currencies, generating 24h history, simulating changes
		currencyCodes.forEach(code => {
			fetch(url + code).then(res => {
				return res.json(); //receive JSON file - conversion to object
			}).then(data => {
				return this.setBase(data, code); // Setting state with values from NBP API
			}).then(real => {
				return this.generateHistory(real, code) //generating 24hour history
			}).then(real => {
				this.interval = setInterval(() => {
					this.simulateChanges(real); //simulate life changes
				}, 60000)
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
			<HashRouter>
				<MainDiv>
					<Header/>
					<Switch>
						<Route exact path='/' render={(props) => <Landing
							{...props}
							currentRates={this.state.actual}
							userInfo={this.state.userInfo.Login}
							accountsInfo={this.state.userInfo.accounts}
							userLogin={this.UserLogin}
						/>}/>
						<Route exact path='/exchange' render={props => <Exchange
							{...props}
							userInfo={this.state.userInfo.Login}
							accountsInfo={this.state.userInfo.accounts}
						/>
						}/>
						<Route path='*' component={NotFound}/>
					</Switch>
				</MainDiv>
			</HashRouter>

		);
	}
}

export default App;
