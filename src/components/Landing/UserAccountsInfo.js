import React from "react";
import StyledContainer from "../Styled/StyledContainer";
import { StyledButton } from "../Styled/StyledButton";

export class UserAccountsInfo extends React.Component {
  checkAccounts() {
    const acc = this.props.accountsInfo;
    const result = [];

    for (let key in acc) {
      result.push(
        <p key={key}>
          <span> {acc[key]}</span> {key}
        </p>
      );
    }
    return result;
  }

  render() {
    const user = this.props.userInfo;

    return (
      <StyledContainer top={"15%"}>
        <p>Witaj <span className={'bold'}>{user.name}</span></p>
        <p>Stan Twojego konta:</p>
        <div>{this.checkAccounts()}</div>
        <StyledButton onClick={this.props.userLogin}>Wyloguj</StyledButton>
      </StyledContainer>
    );
  }
}
