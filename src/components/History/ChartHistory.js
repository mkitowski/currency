import React from 'react';
import {ChartHistorySelection} from "./ChartHistorySelection";
import currencies from "../../Data/currencies";
import {Chart} from "./Chart";

export const ChartHistory = props => {



		return <div>
			<h2>Historia kursów</h2>
			<ChartHistorySelection
				handleChange={props.handleChangeCurrency}
				selected={props.currencySelected}
				message={'Wybierz walute'}
				array={currencies}
			/>
			<ChartHistorySelection
				handleChange={props.handleChangeTime}
				selected={props.timeSelected}
				message={'Wybierz czas'}
				array={props.time}
			/>
			<Chart data={props.chartData}/>
		</div>

}