import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';



export const Chart = ({
	data,
	dataKey,
	selected1,
	selected2
}) => {

	let currencyCode;
	let lineCode;
	if (selected1=== 'first' || selected2==='first') {
		currencyCode = '';
		lineCode = '';
	} else {
		if(selected1!=='PLN'||(selected1!=='PLN' && selected2!=='PLN') ){
			currencyCode = selected2;
			lineCode = '1 '+selected1;
		} else {
			currencyCode = selected1;
			lineCode = '1 '+selected2;
		}


	}

	let renderLineChart = (
		<LineChart width={900} height={300} data={data} margin={{top: 10, right: 0, bottom: 10, left: 10}}>
			<Line type="monotone" dataKey={dataKey} dot={false} activeDot={true} name={lineCode} unit={currencyCode} stroke="#8884d8"/>
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
			<XAxis dataKey="time"/>
			<YAxis label={{ value: currencyCode || "", angle: -90, position: 'insideLeft' }} domain={['dataMin - 0.03', 'dataMax + 0.03']} tickFormatter={item=>Math.floor(+item*1000)/1000}/>
			<Tooltip/>
		</LineChart>);
	console.log(data);
	return <div>{renderLineChart}</div>
}