import bck from "../img/background-land.jpg";
import styled from "styled-components";
import React from "react";
import Rates from "../components/Landing/Rates";
import {UserLogin} from "../components/Landing/UserLogin";
import {UserAccountsInfo} from "../components/Landing/UserAccountsInfo";
import {TransactionConfirmed} from "../components/Landing/TransactionConfirmed";
import MovedContainer from "../components/Landing/MovedContainer/MovedContainer"


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


class Landing extends React.Component{
	state = {
		AIx:'120px',
		AIy:'120px',
		ULx:'120px',
		ULy:'120px',
		Rx:'120px',
		Ry:'60px'
	}

	AImoved = (x,y) =>{
		this.setState({
			AIx:x,
			AIy:y
		})
		this.props.handleMoved({
			...this.props,
			AIx:x,
			AIy:y
		})
	};

	ULmoved = (x,y) =>{
		this.setState({
			ULx:x,
			ULy:y
		})
		this.props.handleMoved({
			...this.props,
			ULx:x,
			ULy:y
		})
	};

	Rmoved = (x,y) =>{
		this.setState({
			Rx:x,
			Ry:y
		})
		this.props.handleMoved({
			...this.props,
			Rx:x,
			Ry:y
		})
	}

	render() {
		return (
			<StyledLanding>
				{this.props.userInfo.logged ? (
					<MovedContainer action={this.AImoved} x={this.props.moved.AIx} y={this.props.moved.AIy}>
						<UserAccountsInfo
							accountsInfo={this.props.accountsInfo}
							userInfo={this.props.userInfo}
							userLogin={this.props.userLogin}
						/>
					</MovedContainer>
				) : (
					<MovedContainer action={this.ULmoved} x={this.props.moved.ULx} y={this.props.moved.ULy} >
						<UserLogin
							userInfo={this.props.userInfo}
							userLogin={this.props.userLogin}
						/>
					</MovedContainer>
				)}
				<MovedContainer action={this.Rmoved} x={this.props.moved.Rx} y={this.props.moved.Ry}>
					<Rates currentRates={this.props.currentRates} error={this.props.error}/>
				</MovedContainer>
				{this.props.showConfirmationDialog && <TransactionConfirmed history={this.props.history} close={this.props.closeConfirmationDialog}/>}
			</StyledLanding>
		);
	}
}

export default Landing;