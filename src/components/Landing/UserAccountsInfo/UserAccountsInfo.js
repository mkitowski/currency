import React from 'react';
import StyledContainer from '../../Styled/StyledContainer/StyledContainer';
import StyledButton from '../../Styled/StyledButton/StyledButton';

class UserAccountsInfo extends React.Component {
  checkAccounts() {
    const acc = this.props.accountsInfo;
    const result = [];

    for (let key in acc) {
      result.push(
        <p key={key}>
          {acc[key]}
          <span> {key}</span>
        </p>,
      );
    }
    return result;
  }

  render() {
    const user = this.props.userInfo;
    return (
      <StyledContainer>
        <p>
          Witaj <span className={'bold'}>{user.name}</span>
        </p>
        <p>Stan Twojego konta:</p>
        <div className={'accounts'}>{this.checkAccounts()}</div>
        <StyledButton onClick={this.props.userLogin}>Wyloguj</StyledButton>
      </StyledContainer>
    );
  }
}
export default UserAccountsInfo;
