import React from 'react';
import styled from 'styled-components';

const StyledAccountList = styled.div`
	list-style: none;
	border: 1px solid #777;
	border-radius: 6px;
	text-align: left;
	width: 80%;
	margin: 0 auto;
	background: white;
	div {
		padding:5px 10%;
		border-bottom: 1px solid #777;
		display: flex;
		justify-content: space-between;
		:last-child{
					border-bottom: none;
		}
	}
`;

export class AccountsList extends React.Component {
	checkAccounts() {
		const acc = this.props.accountsInfo;
		const result = [];
		let cur,word;
		for (let key in acc) {
			switch (key) {
				case 'PLN':
					cur = 'zł';
					word = 'złotówkowe';
					break;

				case 'USD':
					cur = '$';
					word = 'walutowe - dolary amerykańskie';
					break;

				case 'EUR':
					cur = '€';
					word = 'walutowe - Euro';
					break;

				case 'CHF':
					cur = 'Chf';
					word = 'walutowe - Frank szwajcarski';
					break;
				default:

			}

			result.push(
				<div key={key}> <span>Konto {word} : </span><span>{acc[key]}{cur}</span>
				</div>
			);
		}
		return result;
	}

	render() {
		return <StyledAccountList>
			{this.checkAccounts()}
		</StyledAccountList>
	}
}