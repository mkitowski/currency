import React from 'react';
import styled from 'styled-components';

const StyledSpan = styled.span`
	text-align: right;
`;

export default class UserInfo extends React.Component {
	render() {
		return <StyledSpan>
			Stan konta: {this.props.accountInfo}
		</StyledSpan>
	}
}