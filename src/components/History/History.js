import React from 'react';
import styled from 'styled-components';
import {ChartHistory} from "./ChartHistory";
import {UserHistory} from "./UserHistory";

const StyledDiv = styled.div`
  padding-top: 125px;
	background-color: #efefef;
	width: 100vw;
	min-height: 100vh;
`;

export class History extends React.Component {
	state = {
		currencySelected: 'first',
		timeSelected: 'first',
		timeArray: ['1h', '2h', '3h', '6h', '12h', 'przedział dat'],
		chartData: []
	}

	handleChangeCurrency = event => {
		this.setState({
			currencySelected: event.target.value
		});
		this.prepareChartData(event.target.value, this.state.timeSelected);
	}

	handleChangeTime = event => {
		this.setState({
			timeSelected: event.target.value
		});
		this.prepareChartData(this.state.currencySelected,event.target.value);

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
						let time = el.hour +':'+el.minute;
						return{...el,time}
					})
					.slice(0,minutes)
					.sort((a,b)=>{
						return a.hour - b.hour
					});
			} else if(i===minutes && i === 3){
				minutes = minutes*120;
				result = this.props.data[currency + '-day']
					.map(el=>{
						let time = el.hour +':'+el.minute;
						return{...el,time}
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
						let time = el.hour +':'+el.minute;
						return{...el,time}
					})
					.slice(0,minutes)
					.filter(el=>{
						return el.minute % 1 === 0
					}).sort((a,b)=>{
						return a.hour - b.hour
					});
			}
		}
		console.log(result);
		this.setState({
			chartData: result
		})
	}


	render() {
		return <StyledDiv>
			{this.props.data.userInfo.Login.logged && <UserHistory history={this.props.data.userInfo.history}/>}
			<ChartHistory
				handleChangeCurrency={this.handleChangeCurrency}
				currencySelected={this.state.currencySelected}
				handleChangeTime={this.handleChangeTime}
				timeSelected={this.state.timeSelected}
				time={this.state.timeArray}
				chartData={this.state.chartData}
			/>
		</StyledDiv>
	}
}