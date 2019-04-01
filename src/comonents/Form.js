import React from 'react';
import {ImputValue} from './CurrencyInput';
import {Calc} from "./Calculation";


export class ConvectForm extends React.Component {
	state = {
		result: '',
		inputVaule: ''
	};

	inputHandleChange = event => {
		const inputData = {
			value: +event.target.value,
			rate: 0.5
		}
		this.setState({
			result: Calc(inputData),
			inputValue: event.target.value
		});
		console.log(event.target.value);
		console.log(Calc(inputData));
	}

	render() {
		return <form>
			<ImputValue currencyArray={['PLN', 'USD']} editable={true} value={this.state.inputValue} handleChange={this.inputHandleChange}/>
			<ImputValue currencyArray={['PLN', 'USD']} editable={false} value={this.state.result}/>
		</form>
	}
}