import React from 'react';
import styled from 'styled-components';
import currencies from '../../Data/currencies';

const StyledDiv = styled.div`

		width: 80%;
		margin: 0 auto;
	
	ul {
	list-style: none;
	padding: 0;
	 li {
	 	background: white;
	 	padding: 5px;
	 	margin: 5px 0;
	 	border: solid 1px gray;
	 	cursor: pointer;
	 	transition: background-color .3s linear, font-weight .3s linear;
	 	:hover {
	 		background-color: lightgray;
	 		font-weight: 600;
	 	}
	 }
	}
	
`;

export const UserHistory = props => {
	return <StyledDiv>

		<h2>Historia Twoich transakcji</h2>
		<h4>Wybierz konto</h4>
		<ul>
			<li>Konto główne - PLN</li>
			{currencies.map(el => {
				return <li>Konto walutowe - {el}</li>
			})}
		</ul>

	</StyledDiv>
}