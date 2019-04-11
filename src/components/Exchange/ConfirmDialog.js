import React from 'react';
import {StyledInfoWindow} from "../Styled/StyledInfoWindow";
import {StyledCloseButton} from "../Styled/StyledClosedButton";
import {StyledButton} from "../Styled/StyledButton";
import {ConfirmationMessage} from "./ConfirmationMessage";


export default class ConfirmDialog extends React.Component {
	render() {
		return this.props.visible ? <StyledInfoWindow>
			<StyledCloseButton onClick={this.props.close}>X</StyledCloseButton>
			<ConfirmationMessage
				valueInput1={this.props.valueInput1}
				valueInput2={this.props.valueInput2}
				selected1={this.props.selected1}
				selected2={this.props.selected2}
				rate={this.props.rate}
				timer={this.props.timer}
			/>
			<StyledButton>Zatwierdź</StyledButton>
			<StyledButton onClick={this.props.close}>Anuluj</StyledButton>
		</StyledInfoWindow> : null
	}
}

