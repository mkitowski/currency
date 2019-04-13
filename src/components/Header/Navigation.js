import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	cursor: pointer;
	padding: 0;
	li{
		padding: 0 5px 0 5px;
		a {
			transition: color .3s ease-in-out;
			color: #393939
			text-decoration: none;
			:hover {
				color: #0097EC;
			}
		}
	}
`;

export default class Navigation extends React.Component {
	render() {
		return <StyledList>
			<li><Link to='/'>Start</Link></li>
			<li><Link to='/exchange'>Wymień</Link></li>
			<li><Link to='/history'>Historia</Link></li>
			<li><Link to={'/contact'}>Kontact</Link></li>
		</StyledList>
	}
}