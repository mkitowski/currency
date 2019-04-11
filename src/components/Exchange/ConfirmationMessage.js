import React from 'react';

export class ConfirmationMessage extends React.Component {
	render() {
		return<div>
			<h2>Potwierdzenie</h2>
			<p>Transakcja wymiany:</p>
			<h4>{this.props.valueInput1} {this.props.selected1}</h4>
			<p>na:</p>
			<h4>{this.props.valueInput2} {this.props.selected2}</h4>
			<p>po kursie:</p>
			<h4>{this.props.rate}</h4>
			<p>Oferta ważna przez: <h5>{this.props.timer} sek.</h5></p>
		</div>
	}


}