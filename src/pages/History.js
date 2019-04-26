import React from 'react';
import styled from 'styled-components';
import {ChartHistory} from "../components/History/ChartHistory";
import {UserHistory} from "../components/History/UserHistory";
import bck from "../img/background-land.jpg";
import InternalContainer from '../components/Styled/InternalContainer';

const StyledDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bck}), no-repeat, center;
  background-size: cover;
  background-attachment: fixed;
	background-color: #efefef;
	width: 100vw;
	min-height: 100vh;
	text-align: center;
`;

export class History extends React.Component {
	state = {
		currencySelectedSell: 'first',
		currencySelectedBuy: 'first',
		timeSelected: 'first',
		timeArray: ['1h', '2h', '3h', '6h', '12h'],
		chartData: []
	}

	handleChangeCurrencySell = event => {
		if (event.target.value === this.state.currencySelectedBuy) {
			this.setState({
				currencySelectedSell: event.target.value,
				currencySelectedBuy: this.state.currencySelectedSell
			});
			this.prepareChartData(event.target.value, this.state.currencySelectedSell, this.state.timeSelected);
		} else {
			this.setState({
				currencySelectedSell: event.target.value
			});
			this.prepareChartData(event.target.value, this.state.currencySelectedBuy, this.state.timeSelected);

		}
	}

	handleChangeCurrencyBuy = event => {
		if (event.target.value === this.state.currencySelectedSell) {
			this.setState({
				currencySelectedSell: this.state.currencySelectedBuy,
				currencySelectedBuy: event.target.value
			});
			this.prepareChartData(this.state.currencySelectedBuy, event.target.value, this.state.timeSelected);

		} else {
			this.setState({
				currencySelectedBuy: event.target.value
			});
			this.prepareChartData(this.state.currencySelectedSell, event.target.value, this.state.timeSelected);
		}
	}

	handleChangeTime = event => {
		this.setState({
			timeSelected: event.target.value
		});
		this.prepareChartData(this.state.currencySelectedSell, this.state.currencySelectedBuy, event.target.value);
	}

	checkTime = t => {

		if (t < 10) {
			return '0' + t;
		} else {
			return t;
		}
	}

	prepareCurrencyValues = (currency,time) => {
		let result = [];
		let minutes = this.state.timeArray.indexOf(time);
		for (let i = 0; i < this.state.timeArray.length; i++) {
			if (i === minutes && i < 3) {
				minutes = (minutes + 1) * 60;
				result = this.props.data[currency + '-day']
					.map(el => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return {...el, time, code2}
					})
					.slice(0, minutes)
					.sort((a, b) => {
						return a.hour - b.hour
					});
			} else if (i === minutes && i === 3) {
				minutes = minutes * 120;
				result = this.props.data[currency + '-day']
					.map(el => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return {...el, time, code2}
					})
					.slice(0, minutes)
					.filter(el => {
						return el.minute % 1 === 0
					}).sort((a, b) => {
						return a.hour - b.hour
					});
			} else if (i === minutes && i === 4) {
				minutes = minutes * 180;
				result = this.props.data[currency + '-day']
					.map(el => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return {...el, time, code2}
					})
					.slice(0, minutes)
					.filter(el => {
						return el.minute % 1 === 0
					}).sort((a, b) => {
						return a.hour - b.hour
					});
			}
		}
		return result;
	}

	prepareCurrencyValuesNonPLN = (selected1,selected2,time) => {
		let result = [];
		let minutes = this.state.timeArray.indexOf(time);
		const selected2Array = this.props.data[selected2+'-day'];
		for (let i = 0; i < this.state.timeArray.length; i++) {
			if (i === minutes && i < 3) {
				minutes = (minutes + 1) * 60;

				result = this.props.data[selected1 + '-day']
					.map((el,i) => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let rate = Math.floor(el.bid/selected2Array[i].ask*1000)/1000;
						return {...el, time, rate};
					})
					.slice(0, minutes)
					.sort((a, b) => {
						return a.hour - b.hour
					});

			} else if (i === minutes && i === 3) {
				minutes = minutes * 120;
				result = this.props.data[selected1 + '-day']
					.map(el => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let rate = Math.floor(el.bid/selected2Array[i].ask*1000)/1000;
						return {...el, time, rate};
					})
					.slice(0, minutes)
					.filter(el => {
						return el.minute % 1 === 0
					}).sort((a, b) => {
						return a.hour - b.hour
					});
			} else if (i === minutes && i === 4) {
				minutes = minutes * 180;
				result = this.props.data[selected1 + '-day']
					.map(el => {
						let time = this.checkTime(el.hour) + ':' + this.checkTime(el.minute);
						let rate = Math.floor(el.bid/selected2Array[i].ask*1000)/1000;
						return {...el, time, rate};
					})
					.slice(0, minutes)
					.filter(el => {
						return el.minute % 1 === 0
					}).sort((a, b) => {
						return a.hour - b.hour
					});
			}
		}
		return result;
	}

	prepareChartData = (currency1, currency2, time) => {
		if (currency1 === 'first' || time === 'first') {
			return null;
		}
		if (currency2 === 'PLN') {
			this.setState({
				chartData: this.prepareCurrencyValues(currency1,time),
				dataKey: 'bid'
			});
		} else if (currency1 === 'PLN') {
			this.setState({
				chartData: this.prepareCurrencyValues(currency2,time),
				dataKey: 'ask'
			});
		} else {
			this.setState({
				chartData: this.prepareCurrencyValuesNonPLN(currency1,currency2,time),
				dataKey: 'rate'
			});
		}

	}


	render() {
		return <StyledDiv><InternalContainer>
			{this.props.data.userInfo.Login.logged && <UserHistory history={this.props.data.userInfo.history}/>}
			{!this.props.data.error && <ChartHistory
				handleChangeCurrencySell={this.handleChangeCurrencySell}
				currencySelectedSell={this.state.currencySelectedSell}
				handleChangeCurrencyBuy={this.handleChangeCurrencyBuy}
				currencySelectedBuy={this.state.currencySelectedBuy}
				handleChangeTime={this.handleChangeTime}
				timeSelected={this.state.timeSelected}
				time={this.state.timeArray}
				dataKey={this.state.dataKey}
				chartData={this.state.chartData}
			/>}
		</InternalContainer>
		</StyledDiv>
	}
}