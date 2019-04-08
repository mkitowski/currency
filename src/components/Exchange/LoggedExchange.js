import React from 'react';
import styled from 'styled-components';
import {CurrencyInput} from './CurrencyInput';
import {StyledButton} from "../Styled/StyledButton";
import {AccountsList} from "./AccountsList";

const StyledExchange = styled.div`
	background: #EFEFEF;
	height: 100vh;
	width: 100vw;
	padding-top: 80px;
	text-align: center;
	input {
		margin-bottom: 10px;
	}
	
`;

export class LoggedExchange extends React.Component {
	render() {
		return <StyledExchange>
			<h2>Wymień</h2>
			<p>Sprzedaj:</p>
			<CurrencyInput first={0}/>
			<p>Kup:</p>
			<CurrencyInput first={1}/>
			<StyledButton>Wymień</StyledButton>
			<p>Tranzakcja zostanie wykonana po kursie:</p>
			<AccountsList accountsInfo={this.props.accountsInfo} />
		</StyledExchange>
	}
}