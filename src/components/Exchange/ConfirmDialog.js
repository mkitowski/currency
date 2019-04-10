import React from 'react';
import {StyledInfoWindow} from "../Styled/StyledInfoWindow";
import {StyledCloseButton} from "../Styled/StyledClosedButton";
import {StyledButton} from "../Styled/StyledButton";


export default class ConfirmDialog extends React.Component {
	render() {
		return this.props.visible ? <StyledInfoWindow>
			<StyledCloseButton onClick={this.props.close}>X</StyledCloseButton>
			<StyledButton>Zatwierdź</StyledButton>
			<StyledButton onClick={this.props.close}>Anuluj</StyledButton>
		</StyledInfoWindow> : null
	}
}

