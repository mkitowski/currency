import React from 'react';
import LoggedExchange from "../components/Exchange/LoggedExchange";

const Exchange = ({
										userInfo, accountsInfo, currentRates, timer, confirm
									}) => {
	return <LoggedExchange
		userInfo={userInfo}
		accountsInfo={accountsInfo}
		currentRates={currentRates}
		timer={timer}
		confirm={confirm}
	/>
}

export default Exchange;