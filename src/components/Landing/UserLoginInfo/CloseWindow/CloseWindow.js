import StyledCloseButton from "../../../Styled/StyledClosedButton/StyledClosedButton";
import React from 'react';

const CloseWindow = (props) => {
	return <StyledCloseButton onClick={props.action}>X</StyledCloseButton>
};

export default CloseWindow;