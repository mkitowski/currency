//import main packages
import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import firebase
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './Firebase/firebaseConfig';
//import pages
import { NotFound } from "./components/NotFound";
import { Exchange } from "./pages/Exchange";
import Landing from './pages/Landing';
//import modules
import { Header } from './components/Header/Header';
import { History } from "./pages/History";
//import data
import currencyCodes from './Data/currencies';


//set API addres and current date
const url = "https://api.nbp.pl/api/exchangerates/rates/c/";
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes();


const MainDiv = styled.div`
  box-sizing: border-box;
`;

class App extends Component {
	state = {
		actual: [],
		timer: 60,
		start: false,
		showConfirmationDialog: false,
		userInfo: {
			Login: {
				name: 'Cinkciarz',
				email: false,
				logged: false
			},
			accounts: {
				PLN: 1250,
				USD: 350,
				EUR: 125
			},
			history: []
		},
		error: false,
		moved: {
			AIx: '70px',
			AIy: '140px',
			Rx: '380px',
			Ry: '140px',
			UHx: '70px',
			UHy: '400px'
		},
		loading:false
	}

	UserLogin = () => {
		if (this.state.userInfo.Login.logged) {
			let move = this.state.moved //update db with curent positions of elements on landing page
			this.state.db.doc(`${this.state.userInfo.Login.email}/moved`).set({
				...move
			}).then(() => {
				firebase.auth().signOut().then(() => {
					clearInterval(this.DBinterval);
				}).catch(error => {
					console.log(error.message); //future popup with error message from signout
				})

			})

		}
		let email; // AUTHORISATION
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				// User is signed in - user data set to state
				let name = user.displayName || 'Cinkciarz';
				email = user.email;
				this.setState({
					userInfo: {
						...this.state.userInfo,
						Login: {
							name,
							email,
							logged: true
						}
					},
					loading:true
				});
				//future popup about successful signin

				//   ---->>DATABASE<<---
				// sync from DB
				this.state.db.doc(`${this.state.userInfo.Login.email}/accounts`).get().then(el => {
					this.setState({
						userInfo: {
							Login: { ...this.state.userInfo.Login },
							accounts: el.data().accounts,
							history: [...this.state.userInfo.history]
						}
					})
				});
				this.state.db.doc(`${this.state.userInfo.Login.email}/history`).get().then(el => {
					this.setState({
						userInfo: {
							Login: { ...this.state.userInfo.Login },
							accounts: { ...this.state.userInfo.accounts },
							history: el.data().history
						}
					})
				});
				this.state.db.doc(`${this.state.userInfo.Login.email}/moved`).get().then(el => {
					this.setState({
						moved: { ...el.data() }
					})
				}).then(()=>{
					this.setState({
						loading: false
					})
				})


				//set interval for sync to DB
				let oldMoved;
				this.DBinterval = setInterval(() => {
					if (oldMoved !== this.state.moved) {
						if (this.state.userInfo.Login.logged && this.state.userInfo.Login.email) {
							this.state.db.doc(`${this.state.userInfo.Login.email}/moved`).set({
								...this.state.moved,
							}).then(() => {
								console.log('moved');

							})
						}
						oldMoved = this.state.moved;
					}
				}, 10000);
				//
			} else {
				this.setState({
					userInfo: {
						...this.state.userInfo,
						Login: {
							logged: false
						}
					}
				})
			}
		});
	};

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

		return { code, bid, spread }
	}

	generateHistory(real, code) {
		let setMin = minutes;
		let setHour = hours;
		const result = [];
		let newBid = real.bid;
		for (let i = 0; i < 720; i++) { //generates random history for every minute
			newBid = Math.floor(newBid * 1000 + (Math.floor(Math.random() * (5 + 5) - 5))) / 1000;
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
		return { code, bid, spread }
	};

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

	timer() { //timer 1 min interval
		if (!this.state.start) {
			this.timerInterval = setInterval(() => {
				this.setState(prev => {
					return { timer: prev.timer - 1 }
				})
				if (this.state.timer < 1) {

					this.setState({ timer: 60 })
				}
			}, 1000);
		}

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
				this.timer(); //start timer
				this.setState({ start: true }); //start confirmed
				this.interval = setInterval(() => {
					this.simulateChanges(real); //simulate life changes
				}, 60000)
			}).catch(error => {
				console.log(error.code + ' ' + error.message);
				this.setState({
					error: true
				})
			})
		})

	}

	componentDidMount() {
		this.getData();
		firebase.initializeApp(firebaseConfig);
		let db = firebase.firestore();
		this.setState({
			db,
		})
	}

	componentWillUnmount() {
		clearInterval(this.interval); //clear live updates
		clearInterval(this.timerInterval); //clear timer
		clearInterval(this.DBinterval); // clear DB sync
	}

	confirmHandler = goods => { //after confirmation of transaction
		let acc = this.state.userInfo.accounts;
		let newAccounts = JSON.parse(JSON.stringify(acc));
		for (let key in newAccounts) { //set new accounts state
			if (key === goods.selected2) {
				newAccounts[key] = +newAccounts[key] + goods.valueInput2;
				console.log('dodaje')
			} else if (key === goods.selected1) {
				newAccounts[key] = +newAccounts[key] - goods.valueInput1;
				console.log('odejmuje');
				if (newAccounts[key] === 0) {
					delete newAccounts[key];
				}
			}
		}
		if (!(goods.selected2 in newAccounts)) {
			newAccounts[goods.selected2] = goods.valueInput2;
		}
		let date = new Date();

		let newTransaction = {
			date: date.toLocaleDateString('pl-PL'),
			time: date.toLocaleTimeString('pl-PL'),
			sellCurrency: goods.selected1,
			sellValue: goods.valueInput1,
			buyCurrency: goods.selected2,
			buyValue: goods.valueInput2,
			rate: goods.rate
		};

		this.setState({
			userInfo: {
				Login: { ...this.state.userInfo.Login },
				accounts: newAccounts,
				history: [newTransaction, ...this.state.userInfo.history]
			},
			showConfirmationDialog: true
		});

		//  ---> DATABASE <---
		// set actual states to DB
		if (this.state.userInfo.Login.logged && this.state.userInfo.Login.email) {


			this.state.db.doc(`${this.state.userInfo.Login.email}/accounts`).set({
				accounts: newAccounts
			});
			this.state.db.doc(`${this.state.userInfo.Login.email}/history`).set({
				history: [newTransaction, ...this.state.userInfo.history]
			});

		}
	};

	closeDialog = () => {
		this.setState({
			showConfirmationDialog: false
		})
	};

	AImoved = (x, y) => {
		if (x <= 10) {
			x = 10;
		}
		if (y <= 80) {
			y = 90;
		}
		this.setState({
			moved: {
				...this.state.moved,
				AIx: x,
				AIy: y
			}
		})

	};

	Rmoved = (x, y) => {
		if (x <= 10) {
			x = 10;
		}
		if (y <= 80) {
			y = 90;
		}
		this.setState({
			moved: {
				...this.state.moved,
				Rx: x,
				Ry: y
			}
		})

	};

	UHmoved = (x, y) => {
		if (x <= 10) {
			x = 10;
		}
		if (y <= 80) {
			y = 90;
		}
		this.setState({
			moved: {
				...this.state.moved,
				UHx: x,
				UHy: y
			}
		})

	};

	getDataFromDb = (email) => {
		if (email !== '') {
			this.state.db.doc(`${email}/moved`).get().then(e => {
				this.setState({
					moved: { ...e.data() }
				});
			})
		}
	};

	render() {
		return (
			<BrowserRouter>
				<MainDiv>
					<Header error={this.state.error} userLogged={this.state.userInfo.Login.logged} />
					<Switch>
						<Route exact path='/' render={(props) => <Landing
							{...props}
							currentRates={this.state.actual}
							userInfo={this.state.userInfo.Login}
							accountsInfo={this.state.userInfo.accounts}
							userLogin={this.UserLogin}
							history={this.state.userInfo.history}
							showConfirmationDialog={this.state.showConfirmationDialog}
							closeConfirmationDialog={this.closeDialog}
							error={this.state.error}
							moved={this.state.moved}
							UHmoved={this.UHmoved}
							Rmoved={this.Rmoved}
							AImoved={this.AImoved}
							getDataFromDb={this.getDataFromDb}
							loading={this.state.loading}
						/>} />
						<Route exact path='/exchange' render={props => <Exchange
							{...props}
							userInfo={this.state.userInfo.Login}
							accountsInfo={this.state.userInfo.accounts}
							currentRates={this.state.actual}
							timer={this.state.timer}
							confirm={this.confirmHandler}
						/>
						} />
						<Route exact path='/history' render={props => <History
							{...props}
							data={this.state}
						/>
						} />
						<Route path='*' component={NotFound} />
					</Switch>
				</MainDiv>
			</BrowserRouter>
		);
	}
}

export default App;
