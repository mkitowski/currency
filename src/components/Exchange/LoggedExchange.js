import React from "react";
import styled from "styled-components";
import { CurrencyInput } from "./CurrencyInput";
import { StyledButton } from "../Styled/StyledButton";
import { AccountsList } from "./AccountsList";
import ErrorMessage from "./ErrorMessage";
import currencies from "../../Data/currencies";
import ConfirmDialog from "./ConfirmDialog";

const StyledExchange = styled.div`
  background: #efefef;
  height: 100vh;
  width: 100vw;
  padding-top: 80px;
  text-align: center;
  input {
    margin-bottom: 10px;
  }
  .rate {
    font-weight: 700;
  }
`;

export class LoggedExchange extends React.Component {
  state = {
    valueInput1: 0,
    valueInput2: 0,
    selected1: Object.keys(this.props.accountsInfo)[0],
    selected2: currencies[0],
    rate: this.props.currentRates[0].ask,
    error: false,
		dialogVisible: 0
  };

  handleChangeInput1 = event => {
    let rate = this.state.rate;

    if (event.target.value > this.props.accountsInfo[this.state.selected1]) {
      this.setState({
        valueInput1: this.props.accountsInfo[this.state.selected1],
        valueInput2:
          Math.round(
            this.props.accountsInfo[this.state.selected1] * rate * 100
          ) / 100,
        error:
          "Nie masz wystarczająco środków, to jest wszystko co moeżesz wymienić"
      });
    } else {
      this.setState({
        valueInput1: event.target.value,
        valueInput2: Math.round(event.target.value * rate * 100) / 100,
        error: false
      });
    }
  };

  handleChangeInput2 = event => {
    let rate = this.state.rate;

    this.setState({
      valueInput1: Math.round(event.target.value * rate * 100) / 100,
      valueInput2: event.target.value
    });
  };

  handleSelected1 = event => {
    const array2 = [...currencies, "PLN"];
    let oldIndex = array2.indexOf(event.target.value);
    let index, valueInput1;

    if (this.state.valueInput1 > this.props.accountsInfo[event.target.value]) {
      this.setState({
        valueInput1: this.props.accountsInfo[event.target.value],
        error:
          "Nie masz wystarczająco środków, to jest wszystko co moeżesz wymienić"
      });
      valueInput1 = this.props.accountsInfo[event.target.value];
    } else {
      valueInput1 = this.state.valueInput1;
    }

    if (this.state.selected2 === event.target.value) {
      if (oldIndex === 0) {
        index = array2.length - 1;
      } else if (oldIndex === array2.length - 1) {
        index = 0;
      } else {
        index = oldIndex - 1;
      }
      let rate = this.updateRate(event.target.value, array2[index]);

      this.setState({
        selected1: event.target.value,
        selected2: array2[index],
        rate: this.updateRate(event.target.value, array2[index]),
        valueInput2: Math.round(valueInput1 * rate * 100) / 100
      });
    } else {
      let rate = this.updateRate(event.target.value, this.state.selected2);

      this.setState({
        selected1: event.target.value,
        rate: this.updateRate(event.target.value, this.state.selected2),
        valueInput2: Math.round(valueInput1 * rate * 100) / 100
      });
    }
  };

  handleSelected2 = event => {
    const array1 = Object.keys(this.props.accountsInfo);
    let oldIndex = array1.indexOf(event.target.value);
    let index;
    if (this.state.selected1 === event.target.value) {
      if (oldIndex === 0) {
        index = array1.length - 1;
      } else if (oldIndex === array1.length - 1) {
        index = 0;
      } else {
        index = oldIndex - 1;
      }
      let rate = this.updateRate(array1[index], event.target.value);

      this.setState({
        selected2: event.target.value,
        selected1: array1[index],
        rate: this.updateRate(array1[index], event.target.value),
        valueInput2: Math.round(this.state.valueInput1 * rate * 100) / 100
      });
    } else {
      let rate = this.updateRate(this.state.selected1, event.target.value);

      this.setState({
        selected2: event.target.value,
        rate: this.updateRate(this.state.selected1, event.target.value),
        valueInput2: Math.round(this.state.valueInput1 * rate * 100) / 100
      });
    }
  };

  updateRate(first, second) {
    if (first === "PLN") {
      return (
        Math.floor(
          (1 /
            this.props.currentRates.filter(el => {
              return el.code === second;
            })[0].bid) *
            1000
        ) / 1000
      );
    } else if (second === "PLN") {
      return (
        Math.floor(
          this.props.currentRates.filter(el => {
            return el.code === first;
          })[0].ask * 10000
        ) / 10000
      );
    } else {
      return (
        Math.floor(
          (this.props.currentRates.filter(el => {
            return el.code === first;
          })[0].bid /
            this.props.currentRates.filter(el => {
              return el.code === second;
            })[0].ask) *
            10000
        ) / 10000
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRates === this.props.currentRates) {
      this.setState({
        rate: this.updateRate(this.state.selected1, this.state.selected2),
        valueInput2:
          Math.round(
            this.state.valueInput1 *
              this.updateRate(this.state.selected1, this.state.selected2) *
              100
          ) / 100
      });
    }
  }

  handleDialog = () => {
  	this.setState({dialogVisible: !this.state.dialogVisible});
	}

  render() {
    return (
      <StyledExchange>
        <h2>Twoje transakcje</h2>
        <p>Wymień:</p>
        <ErrorMessage message={this.state.error} />
        <CurrencyInput
          currenciesArray={Object.keys(this.props.accountsInfo)}
          handleChange={this.handleChangeInput1}
          value={this.state.valueInput1}
          handleSelect={this.handleSelected1}
          selected={this.state.selected1}
        />
        <p>na:</p>
        <CurrencyInput
          currenciesArray={[...currencies, "PLN"]}
          handleChange={this.handleChangeInput2}
          value={this.state.valueInput2}
          handleSelect={this.handleSelected2}
          selected={this.state.selected2}
        />
        <StyledButton onClick={this.handleDialog}>Wymień</StyledButton>
        <p>
          Tranzakcja zostanie wykonana po kursie:
          <span className={"rate"}>
            {" "}
            1 {this.state.selected1} = {this.state.rate} {this.state.selected2}
          </span>
        </p>
        <AccountsList accountsInfo={this.props.accountsInfo} />
        <ConfirmDialog visible={this.state.dialogVisible} close={this.handleDialog}/>
      </StyledExchange>
    );
  }
}
