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
		this.setState({
			currencySelectedSell: event.target.value
		});
		this.prepareChartData(event.target.value, this.state.timeSelected);
	}

	handleChangeCurrencyBuy = event => {
		this.setState({
			currencySelectedBuy: event.target.value
		});
		// this.prepareChartData(event.target.value, this.state.timeSelected);
	}

	handleChangeTime = event => {
		this.setState({
			timeSelected: event.target.value
		});
		this.prepareChartData(this.state.currencySelectedSell,event.target.value);
	}

	checkTime = t => {

		if (t <10){
			return '0'+t;
		} else {
			return t;
		}
	}

	prepareChartData = (currency, time) => {
		if(currency === 'first' || time === 'first'){
			return null;
		}
		let result =[];
		let minutes = this.state.timeArray.indexOf(time);
		for(let i=0; i<this.state.timeArray.length;i++){
			if(i===minutes && i <3){
				minutes = (minutes+1)*60;
				result = this.props.data[currency + '-day']
					.map(el=>{
						let time = this.checkTime(el.hour) +':'+this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return{...el,time,code2}
					})
					.slice(0,minutes)
					.sort((a,b)=>{
						return a.hour - b.hour
					});
			} else if(i===minutes && i === 3){
				minutes = minutes*120;
				result = this.props.data[currency + '-day']
					.map(el=>{
						let time = this.checkTime(el.hour) +':'+this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return{...el,time,code2}
					})
					.slice(0,minutes)
					.filter(el=>{
						return el.minute % 1 === 0
					}).sort((a,b)=>{
						return a.hour - b.hour
					});
			} else if(i===minutes && i === 4) {
				minutes = minutes*180;
				result = this.props.data[currency + '-day']
					.map(el=>{
						let time = this.checkTime(el.hour) +':'+this.checkTime(el.minute);
						let code2 = this.state.currencySelectedBuy;
						return{...el,time,code2}
					})
					.slice(0,minutes)
					.filter(el=>{
						return el.minute % 1 === 0
					}).sort((a,b)=>{
						return a.hour - b.hour
					});
			}
		}
		this.setState({
			chartData: result
		})
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
				chartData={this.state.chartData}
			/>}
		</InternalContainer>
		</StyledDiv>
	}
}