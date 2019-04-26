import React from 'react';
import styled from 'styled-components';
import {UserHistoryPosition} from "./UserHistoryPosition";

const StyledDiv = styled.div`

		width: 80%;
		margin: 0 auto;
	ol {
		list-style: none;
		background: white;
		padding: 0;
		border: solid 1px gray;
		border-radius: 6px;
	 	li {
	 		padding: 5px 15px;
	 		border-bottom: solid 1px gray;
	 		transition: background-color .3s linear, font-weight .3s linear;
	 		display: flex;
	 		:last-child{
	 			border-bottom: none;
	 		}
	 		.head{
	 			font-weight: 600;
	 		}
	 		.col2{
	 			width: 20%;
	 		}
	 	}
	}
	
`;

export const UserHistory = props => {
	return <StyledDiv>

		<h2>Historia Twoich transakcji</h2>
		<ol>
			{props.history.length === 0 ?
				<li>Brak historii na koncie</li> : <UserHistoryPosition history={props.history}/>}
		</ol>

	</StyledDiv>
}