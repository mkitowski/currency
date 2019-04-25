import React from 'react';
import {ChartHistorySelection} from "./ChartHistorySelection";
import currencies from "../../Data/currencies";
import {Chart} from "./Chart";
import styled from 'styled-components';

const StyledChart = styled.div`
	.selection{
		display: flex;
		align-items: flex-end;
		label {
			margin-right: 5px;
		}
		select {
			padding: 5px;
			margin-right: 5px;
			border-radius: 6px;
			background-color: white;
			border: 1px solid black;
			transition: background-color 0.3s linear;
			:focus {
				box-shadow: none;
				outline: none;
				background-color: lightgray;
			}
		}
	}
`;

export const ChartHistory = props => {
	return <StyledChart>
		<h2>Historia kursów</h2>
		<div className={'selection'}>
			<label> Waluta sprzedaży
				<ChartHistorySelection
					handleChange={props.handleChangeCurrencySell}
					selected={props.currencySelectedSell}
					message={'Wybierz walute'}
					array={[...currencies, 'PLN']}
					name={'first'}
				/>
			</label>
			<label> Waluta kupna
				<ChartHistorySelection
					handleChange={props.handleChangeCurrencyBuy}
					selected={props.currencySelectedBuy}
					message={'Wybierz walute'}
					array={['PLN',...currencies]}
					name={'second'}
				/>
			</label>
			<ChartHistorySelection
				handleChange={props.handleChangeTime}
				selected={props.timeSelected}
				message={'Wybierz czas'}
				array={props.time}
			/>
		</div>
		<Chart data={props.chartData}/>
	</StyledChart>

}