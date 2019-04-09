import React from "react";
import styled from "styled-components";
import { CurrencyInput } from "./CurrencyInput";
import { StyledButton } from "../Styled/StyledButton";
import { AccountsList } from "./AccountsList";
import currencies from "../../Data/currencies";

const StyledExchange = styled.div`
  background: #efefef;
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  text-align: center;
  input {
    margin-bottom: 10px;
  }
`;

export class LoggedExchange extends React.Component {
  state = {
    valueInput1: "",
    valueInput2: ""
  };
  handeChangeInput1 = event => {
    this.setState({
      valueInput1: event.target.value
    });
  };
  handeChangeInput2 = event => {
    this.setState({
      valueInput2: event.target.value
    });
  };

  render() {
    return (
      <StyledExchange>
        <h2>Wymień</h2>
        <p>Sprzedaj:</p>
        <CurrencyInput
          first={0}
          currenciesArray={Object.keys(this.props.accountsInfo)}
          handleChange={this.handeChangeInput1}
          value={this.state.valueInput1}
        />
        <p>Kup:</p>
        <CurrencyInput
          first={0}
          currenciesArray={currencies}
          handleChange={this.handeChangeInput2}
          value={this.state.valueInput2}
        />
        <StyledButton>Wymień</StyledButton>
        <p>Tranzakcja zostanie wykonana po kursie:</p>
        <AccountsList accountsInfo={this.props.accountsInfo} />
      </StyledExchange>
    );
  }
}
