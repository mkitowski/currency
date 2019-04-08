import React from "react";
import { StyledDiv } from "./StyledDiv";
import { StyledButton } from "../Styled/StyledButton";

export class UserAccountsInfo extends React.Component {
  checkAccounts() {
    const acc = this.props.accountsInfo;
    const result = [];

    for (let key in acc) {
      result.push(
        <p key={key}>
          {key}
          <span> {acc[key]}</span>
        </p>
      );
    }
    return result;
  }

  render() {
    const user = this.props.userInfo;

    return (
      <StyledDiv top={"15%"}>
        <p>Witaj {user.name}</p>
        <p>Stan Twojego konta:</p>
        <div>{this.checkAccounts()}</div>
        <StyledButton onClick={this.props.userLogin}>Wyloguj</StyledButton>
      </StyledDiv>
    );
  }
}
