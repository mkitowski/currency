import React from "react";
import styled from "styled-components";
import {CurrencyInput} from "./CurrencyInput";
import {StyledButton} from "../Styled/StyledButton";
import {AccountsList} from "./AccountsList";
// import {GetRates} from "./GetRate";
import currencies from "../../Data/currencies";

const StyledExchange = styled.div`
  background: #efefef;
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  text-align: center;
  input {
    margin-bottom: 10px;
  }
`;

export class LoggedExchange extends React.Component {
	state = {
		valueInput1: "",
		valueInput2: "",
		selected1: Object.keys(this.props.accountsInfo)[0],
		selected2: currencies[0],
		index: 0,
		task: 'ask',
		rate: this.props.currentRates[0].ask
	};


	handleChangeInput1 = event => {
		// let rate;

		this.setState({
			valueInput1: event.target.value
		});

	};

	handleChangeInput2 = event => {
		this.setState({
			valueInput2: event.target.value
		});
	};

	handleSelected1 = event => {
		const array2 = [...currencies, 'PLN'];
		let oldIndex = array2.indexOf(event.target.value);
		let index;
		if (this.state.selected2 === event.target.value) {
			if (oldIndex === 0) {
				index = array2.length - 1;
			} else if (oldIndex === (array2.length - 1)) {
				index = 0;
			} else {
				index = oldIndex - 1;
			}
			this.setState({
				selected1: event.target.value,
				selected2: array2[index],
				rate: this.updateRate(event.target.value, array2[index])
			})
			this.updateRate();

		} else {
			this.setState({
				selected1: event.target.value,
				rate: this.updateRate(event.target.value, this.state.selected2)
			})
		}
	};

	handleSelected2 = event => {
		const array1 = Object.keys(this.props.accountsInfo);
		let oldIndex = array1.indexOf(event.target.value);
		let index;
		if (this.state.selected1 === event.target.value) {
			if (oldIndex === 0) {
				index = array1.length - 1;
			} else if (oldIndex === (array1.length - 1)) {
				index = 0;
			} else {
				index = oldIndex - 1;
			}
			this.setState({
				selected2: event.target.value,
				selected1: array1[index],
				rate: this.updateRate(array1[index],event.target.value)
			})
		} else {
			this.setState({
				selected2: event.target.value,
				rate: this.updateRate(this.state.selected1,event.target.value)
			})
		}
	};

	updateRate(first, second){
		if(first ==='PLN'){
			return this.props.currentRates.filter(el=>{
					return el.code === second
				})[0].ask

		} else if(second ==='PLN'){
			return this.props.currentRates.filter(el=>{
					return el.code === first
				})[0].bid
		} else {
			return Math.floor(this.props.currentRates.filter(el=>{
					return el.code === first
				})[0].bid / this.props.currentRates.filter(el=>{
					return el.code === second
				})[0].ask*1000)/1000
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.currentRates === this.props.currentRates){
			this.setState({
				rate: this.updateRate(this.state.selected1,this.state.selected2)
			})
		}
	}



	render() {
		return (
			<StyledExchange>
				<h2>Twoje transakcje</h2>
				<p>Wymień:</p>
				<CurrencyInput
					currenciesArray={Object.keys(this.props.accountsInfo)}
					handleChange={this.handleChangeInput1}
					value={this.state.valueInput1}
					handleSelect={this.handleSelected1}
					selected={this.state.selected1}
				/>
				<p>na:</p>
				<CurrencyInput
					currenciesArray={[...currencies, 'PLN']}
					handleChange={this.handleChangeInput2}
					value={this.state.valueInput2}
					handleSelect={this.handleSelected2}
					selected={this.state.selected2}
				/>
				<StyledButton>Wymień</StyledButton>
				<p>Tranzakcja zostanie wykonana po kursie:
					{this.state.rate}</p>
				<AccountsList accountsInfo={this.props.accountsInfo}/>
			</StyledExchange>
		);
	}
}
