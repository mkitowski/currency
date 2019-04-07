import {StyledInfo} from "./StyledInfo";
import {StyledButton} from "../../Styled/StyledButton";
import React from 'react';

export const UserInfo = props => {
	return <StyledInfo>
		<h3>Zapomniane hasło ??</h3>
		<p>Napewno jakoś sobie z tym poradzimy...</p>
		<p>To jest wersja demonatsracyjna, aby się zalogować i przetestować system użyj poniższych danych</p>
		<p className={'bold'}>Nazwa użytkownika: <span>{props.userInfo.name}</span></p>
		<p className={'bold'}>Hasło: <span>{props.userInfo.password}</span></p>
		<StyledButton onClick={props.action}>Zrozumiałem</StyledButton>
	</StyledInfo>
};