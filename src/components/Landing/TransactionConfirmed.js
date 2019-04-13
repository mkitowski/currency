import React from 'react';
import {StyledInfoWindow} from "../Styled/StyledInfoWindow";
import {StyledCloseButton} from "../Styled/StyledClosedButton";
import {StyledButton} from "../Styled/StyledButton";

export class TransactionConfirmed extends React.Component {
	render() {
		let newTransaction = this.props.history[0];
		return newTransaction ? <StyledInfoWindow justify={'start'}>
			<StyledCloseButton>X</StyledCloseButton>
			<h2>Potwierdzenie transakcji</h2>
			<h4>Czas transakcji</h4>
			<p> Data transakcji: <span className={'bold'}> {newTransaction.date}</span></p>
			<p> Godzina transakcji: <span className={'bold'}> {newTransaction.time}</span></p>
			<h4>Dane transakcji</h4>
			<p>Sprzedano : <span className={'bold'}>{newTransaction.sellValue} {newTransaction.sellCurrency}</span></p>
			<p>Kupiono : <span className={'bold'}>{newTransaction.buyValue} {newTransaction.buyCurrency}</span> </p>
			<p>Kurs: <span className={'bold'}>{newTransaction.rate}</span> </p>
			<div>
				<StyledButton onClick={this.props.close}>Zamknij</StyledButton>
			</div>
		</StyledInfoWindow> : null
	}
}