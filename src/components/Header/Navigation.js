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


const Navigation = ({error}) => {

	return <StyledList>
		<li><Link to='/'>Start</Link></li>
		{!error && <li><Link to='/exchange'>Wymień</Link></li>}
		<li><Link to='/history'>Historia</Link></li>
		<li><Link to={'/contact'}>Kontact</Link></li>
	</StyledList>

};
export default Navigation;