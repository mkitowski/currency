import React from 'react';
import StyledDiv from "./StyledDiv";
import styled from 'styled-components';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {UserPasswordInfo} from "./UserPasswordInfo";
import {StyledButton} from "../Styled/StyledButton";
import {StyledInputFull} from "../Styled/StyledInputFull";


const StyledPe = styled.p`
	font-size: 10px;
	color: blue;
	cursor: pointer;
	text-decoration: underline;
`;

const StyledLabel = styled.label`
	font-size: 14px;
	color: red;
`;

export class UserLogin extends React.Component {
	state = {
		InfoVisible: false,
		email: '',
		password: '',
		error: false
	}

	handlerPasswordInfo =() => {
		let result;
		this.state.InfoVisible ? result = false : result = true;
		console.log(result);
		this.setState({
			InfoVisible: result
		})
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	validation = () => {
		const email = this.state.email;
		const password = this.state.password;

		firebase.auth().signInWithEmailAndPassword(email, password)
		.catch(error => {
			console.log('bed');
			this.setState({
				error: true
			})
		}).then(() => {
			console.log('good')
			this.props.userLogin()
		})
		// if(name === this.props.userInfo.name && password === this.props.userInfo.password){
		// 	this.props.userLogin();
		// } else {
		// 	console.log('pudlo');
		// 	this.setState({
		// 		error: true
		// 	})
		// }
	}

	render() {
		return (
      <StyledDiv top={"15%"}>
        <h3>Zaloguj się</h3>
        <StyledInputFull
          type={"email"}
          placeholder={"Twój e-mail"}
          name={"email"}
          value={this.state.email}
          onChange={this.handleInputChange}
        />
        <StyledInputFull
          type={"password"}
          placeholder={"Hasło"}
          name={"password"}
          value={this.state.password}
          onChange={this.handleInputChange}
        />
		{this.state.error && <StyledLabel>Chyba pomyliłeś hasło lub login</StyledLabel>}
        <StyledButton onClick={this.validation}>Zaloguj</StyledButton>
        <StyledPe onClick={this.handlerPasswordInfo}>
          Nie pamiętam hasłą :(
        </StyledPe>
        <UserPasswordInfo
          visible={this.state.InfoVisible}
          action={this.handlerPasswordInfo}
          userInfo={this.props.userInfo}
        />
      </StyledDiv>
    );
	}

}