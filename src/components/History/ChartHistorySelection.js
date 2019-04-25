import React from 'react';


export const ChartHistorySelection = ({
																				handleChange,
																				selected,
																				message,
																				array,
																				name
																			}) => {
	return <div>
		<select onChange={handleChange} name={name} value={selected}>
			<option value={'first'} disabled>{message}</option>
			{array.map(el => {
					return <option key={el} value={el} name={el}>{el}</option>
				}
			)}
		</select>
	</div>
}