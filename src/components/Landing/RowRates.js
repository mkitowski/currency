import React from 'react';

const RowRates = ({code,bid,ask}) => {
	return (
		<div key={code} className={"row"}>
			<div className={"col"}>{code}</div>
			<div className={"col"}>
				{bid}
			</div>
			<div className={"col"}>
				{ask}
			</div>
		</div>
	)
}

export default RowRates;