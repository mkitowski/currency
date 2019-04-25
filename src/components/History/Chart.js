import React from 'react';
import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';



export const Chart = ({
	data
}) => {
	let renderLineChart = (
		<LineChart width={900} height={300} data={data} margin={{top: 10, right: 0, bottom: 10, left: 10}}>
			<Line type="monotone" dataKey="bid" stroke="#8884d8"/>
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
			<XAxis dataKey="time"/>
			<YAxis label={{ value: data[0].code2 || "", angle: -90, position: 'insideLeft' }} domain={['dataMin - 0.03', 'dataMax + 0.03']} tickFormatter={item=>Math.floor(+item*1000)/1000}/>
			<Tooltip/>
		</LineChart>);
	// console.log(data[0].code2);
	return <div>{renderLineChart}</div>
}