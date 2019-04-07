import bck from '../../img/background-land.jpg';
import styled from 'styled-components';
import React from 'react';
import Rates from './Rates';
import {UserLogin} from './UserLogin'
import {UserAccountsInfo} from "./UserAccountsInfo";


const StyledLanding = styled.div`
position: absolute;
top: 0;
left: 0;
	background: url(${bck}), no-repeat, center;
	background-size: cover;
	width: 100vw;
	height: 100vh;
	z-index: 0;
`;

export default class Landing extends React.Component {
	render() {
		return <StyledLanding>
			{this.props.userInfo.logged ?
				<UserAccountsInfo
					accountsInfo={this.props.accountsInfo}
					userInfo={this.props.userInfo} /> :
				<UserLogin userInfo={this.props.userInfo}/>}
			<Rates currentRates={this.props.currentRates}/>
		</StyledLanding>
	}
}