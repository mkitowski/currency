import React from 'react';

export const GetRates = props =>{

	return <span>{props.currentRates[props.index][props.task]}</span>;

}