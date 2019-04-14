import React from 'react';
import {LoggedExchange} from "../components/Exchange/LoggedExchange";

export class Exchange extends React.Component {
	render(){
		return this.props.userInfo.logged ? <LoggedExchange
			userInfo={this.props.userInfo}
			accountsInfo={this.props.accountsInfo}
			currentRates={this.props.currentRates}
			timer={this.props.timer}
			confirm={this.props.confirm}
		/> : <div>Weź się zaloguj</div>
	}
}