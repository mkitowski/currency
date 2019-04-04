const url = "http://api.nbp.pl/api/exchangerates/rates/c/";


// export function() GetData {
//
// 		fetch(url + this.props.curr).then(res => {
// 				return res.json();
// 			}).then(data => {
// 				const cur = data.rates[0][this.props.task];
// 				this.setState({
// 					currencyValue: cur
// 				});
// 			});
//
// 	}
//
// 	componentWillMount() {
// 		clearInterval(this.interval);
// 	}
//
// 	render() {
// 		return this.state.currencyValue ? this.state.currencyValue : "...";
// 	}
// }
