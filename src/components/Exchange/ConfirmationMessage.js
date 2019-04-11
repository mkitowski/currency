import React from 'react';



export class ConfirmationMessage extends React.Component {

	render() {
		return !(this.props.confirmDisabled) && <div>
			<h2>Potwierdzenie</h2>
			<p>Transakcja wymiany:</p>
			<h4>{this.props.valueInput1} {this.props.selected1}</h4>
			<p>na:</p>
			<h4>{this.props.valueInput2} {this.props.selected2}</h4>
			<p>po kursie:</p>
			<h4>{this.props.rate}</h4>
			<h5>Oferta ważna przez: <span>{this.props.timer} sek.</span></h5>
		</div>

	}


}