import React from 'react';

export const UserHistoryPosition = props => {
	let result = [];
	let head = <li key={0}>
		<div className={'col2 head'}>Data</div>
		<div className={'col2 head'}>Godzina</div>
		<div className={'col2 head'}>Sprzedano</div>
		<div className={'col2 head'}>Kupiono</div>
		<div className={'col2 head'}>Kurs</div>
	</li>

	result = props.history.map(el => {
		return <li key={el.time}>
			<div className={'col2'}>{el.date}</div>
			<div className={'col2'}>{el.time}</div>
			<div className={'col2'}>{el.sellValue} {el.sellCurrency}</div>
			<div className={'col2'}>{el.buyValue} {el.buyCurrency}</div>
			<div className={'col2'}>{el.rate} </div>
		</li>
	});
	result = [head, ...result];
	if(props.count !== undefined){
		result = result.slice(0,props.count+1);
	}
	return result;
}