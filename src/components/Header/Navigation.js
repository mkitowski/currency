import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 0;
	li{
		transition: color .3s ease-in-out,font-weight .3s ease-in-out;
		padding: 0 5px 0 5px;
	:hover {
		color: #0097EC;
		font-weight: 900;
	}}
`;

export default class Navigation extends React.Component {
	render() {
		return <StyledList>
			<li>Start</li>
			<li>Info</li>
			<li>Wymień</li>
			<li>Kontact</li>
		</StyledList>
	}
}