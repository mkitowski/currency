import React from 'react';
const url = "http://api.nbp.pl/api/exchangerates/rates/c/";


export class GetPrice extends React.Component {

	state = {
		currencyValue: false
	}

	componentDidMount() {
		fetch(url + this.Curr).then(res => {
			return res.json()
		}).then(data => {
			const cur = data.rates[0];
			this.setState({
				currencyValue: cur
			})
		})
	}

	render() {
		return this.state.currencyValue ? this.state.currencyValue : '...'
	}
}


