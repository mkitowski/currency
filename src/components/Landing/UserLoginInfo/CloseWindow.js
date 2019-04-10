import {StyledCloseButton} from "../../Styled/StyledClosedButton";
import React from 'react';

export const CloseWindow = (props) => {
	return <StyledCloseButton onClick={props.action}>X</StyledCloseButton>
};