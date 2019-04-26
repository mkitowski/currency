import bck from "../img/background-land.jpg";
import styled from "styled-components";
import React from "react";
import InternalContainer from '../components/Styled/InternalContainer';
import {StyledButton} from "../components/Styled/StyledButton";

const StyledContactPage = styled.div`
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

class Contact extends React.Component {
	render() {
		let email = this.props.data.email || '';
		let name = this.props.data.name || '';
		return <StyledContactPage>
			<InternalContainer>
				<h2>Skontaktuj się z nami</h2>
				<form>
					<input type={'text'} value={name} placeholder={'Twoje imię'} required/>
					<input type={'email'} value={email} placeholder={'Twój@email'} required></input>
					<input type={'text'} value={''} placeholder={'W czym możemy pomóc'} required />
					<textarea value={''}/>
					<StyledButton>Wyślij</StyledButton>
				</form>
			</InternalContainer>
		</StyledContactPage>
	}
}

export default Contact;