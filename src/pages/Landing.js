import bck from "../img/background-land.jpg";
import styled from "styled-components";
import React from "react";
import Rates from "../components/Landing/Rates";
import { UserLogin } from "../components/Landing/UserLogin";
import { UserAccountsInfo } from "../components/Landing/UserAccountsInfo";
import { TransactionConfirmed } from "../components/Landing/TransactionConfirmed";
import MovedContainer from "../components/Landing/MovedContainer/MovedContainer"
import UserHistoryLanding from "../components/Landing/UserHistory/UserHistory";


const StyledLanding = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bck}), no-repeat, center;
  background-size: cover;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 0;
`;


class Landing extends React.Component {

	render() {
		return (
			<StyledLanding>
				{this.props.userInfo.logged ? (
					<MovedContainer action={this.props.AImoved} x={this.props.moved.AIx} y={this.props.moved.AIy}>
						<UserAccountsInfo
							accountsInfo={this.props.accountsInfo}
							userInfo={this.props.userInfo}
							userLogin={this.props.userLogin}
						/>
					</MovedContainer>
				) : (
						<MovedContainer action={this.props.AImoved} x={this.props.moved.AIx} y={this.props.moved.AIy} >
							<UserLogin
								userInfo={this.props.userInfo}
								userLogin={this.props.userLogin}
							/>
						</MovedContainer>
					)}
				<MovedContainer action={this.props.Rmoved} x={this.props.moved.Rx} y={this.props.moved.Ry}>
					<Rates currentRates={this.props.currentRates} error={this.props.error} />
				</MovedContainer>
				{this.props.showConfirmationDialog && <TransactionConfirmed history={this.props.history} close={this.props.closeConfirmationDialog} />}
				{this.props.userInfo.logged && <MovedContainer
					action={this.props.UHmoved}
					x={this.props.moved.UHx}
					y={this.props.moved.UHy}>
					<UserHistoryLanding history={this.props.history} /></MovedContainer>}
			</StyledLanding>
		);
	}
}

export default Landing;