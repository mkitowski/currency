import React from 'react';
import {LoggedExchange} from "./LoggedExchange";

export class Exchange extends React.Component {
	render(){
		return this.props.userInfo.logged ? <LoggedExchange
			userInfo={this.props.userInfo}
			accountsInfo={this.props.accountsInfo}
			currentRates={this.props.currentRates}
		/> : <div>Weź się zaloguj</div>
	}
}