import React from 'react';
import {StyledDiv} from "./StyledDiv";
import styled from 'styled-components';
import {UserPasswordInfo} from "./UserPasswordInfo";
import {StyledButton} from "../Styled/StyledButton";
import {StyledInputFull} from "../Styled/StyledInputFull";


const StyledPe = styled.p`
	font-size: 10px;
	color: blue;
	cursor: pointer;
	text-decoration: underline;
`;

export class UserLogin extends React.Component {
	state = {
		InfoVisible: false
	}

	handlerPasswordInfo =() => {
		let result;
		this.state.InfoVisible ? result = false : result = true;
		console.log(result);
		this.setState({
			InfoVisible: result
		})
	}

	render() {
		return <StyledDiv top={'15%'}>
			<h3>Zaloguj się</h3>
			<StyledInputFull type={'text'} placeholder={'Nazwa użytkownika'}/>
			<StyledInputFull type={'password'} placeholder={'Hasło'}/>
			<StyledButton>Zaloguj</StyledButton>
			<StyledPe onClick={this.handlerPasswordInfo}>Nie pamiętam hasłą :(</StyledPe>
			<UserPasswordInfo visible={this.state.InfoVisible} action={this.handlerPasswordInfo} userInfo={this.props.userInfo} />
		</StyledDiv>
	}

}