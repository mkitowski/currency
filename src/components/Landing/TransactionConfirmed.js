import React from 'react';
import {StyledInfoWindow} from "../Styled/StyledInfoWindow";
import {StyledCloseButton} from "../Styled/StyledClosedButton";
import {StyledButton} from "../Styled/StyledButton";

export class TransactionConfirmed extends React.Component {
	render() {
		return <StyledInfoWindow>
			<StyledCloseButton>X</StyledCloseButton>
			<h2>Potwierdzenie transakcji</h2>
			<p>Udało się wymienić</p>
			<div>
				<StyledButton>Zamknij</StyledButton></div>
		</StyledInfoWindow>
	}
}