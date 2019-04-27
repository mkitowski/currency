import React from 'react';
import styled from 'styled-components';
import bck from '../../img/background-land.jpg';
import CurrencyInput from './CurrencyInput';
import StyledButton from '../Styled/StyledButton/StyledButton';
import AccountsList from './AccountsList';
import ErrorMessage from './ErrorMessage';
import currencies from '../../Data/currencies';
import ConfirmDialog from './ConfirmDialog';
import { Redirect } from 'react-router';
import InternalContainer from '../Styled/InternalContainer/InternalContainer';
import InfoDialog from './InfoDialog';
import LinearTimerProgress from '../Progress/LinearTimerProgress/LinearTimerProgress';

const StyledExchange = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: url(${bck}), no-repeat, center;
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  text-align: center;
  input {
    margin-bottom: 10px;
  }
  .rate {
    font-weight: 700;
  }
`;

class LoggedExchange extends React.Component {
  state = {
    valueInput1: 0,
    valueInput2: 0,
    selected1: '',
    selected2: currencies[0],
    rate: Math.floor((1 / this.props.currentRates[0].bid) * 1000) / 1000,
    error: false,
    dialogVisible: false,
    disabledButton: false,
    finished: false,
    infoOpen: false,
  };

  componentWillMount() {
    let selected2 = currencies[0];
    if (Object.keys(this.props.accountsInfo)[0] === selected2) {
      selected2 = currencies[1];
    }
    this.setState({
      selected1: Object.keys(this.props.accountsInfo)[0],
      selected2,
      rate: this.updateRate(Object.keys(this.props.accountsInfo)[0], selected2),
    });
  }

  handleChangeInput1 = (event) => {
    let rate = this.state.rate;
    if (event.target.value <= +this.props.accountsInfo[this.state.selected1]) {
      this.setState({
        valueInput1: event.target.value,
        valueInput2: Math.round(event.target.value * rate * 100) / 100,
        error: false,
      });
    } else {
      this.setState({
        valueInput1: this.props.accountsInfo[this.state.selected1],
        valueInput2:
          Math.round(
            this.props.accountsInfo[this.state.selected1] * rate * 100,
          ) / 100,
        error:
          'Nie masz wystarczająco środków, to jest wszystko co możesz wymienić',
      });
    }
  };

  handleChangeInput2 = (event) => {
    let rate = this.state.rate;

    if (this.state.selected2 === 'PLN') {
      this.setState({
        valueInput1: Math.round((event.target.value / rate) * 100) / 100,
        valueInput2: event.target.value,
      });
    } else {
      this.setState({
        valueInput1: Math.round((event.target.value / rate) * 100) / 100,
        valueInput2: event.target.value,
      });
    }
  };

  handleSelected1 = (event) => {
    const array2 = [...currencies, 'PLN'];
    let oldIndex = array2.indexOf(event.target.value);
    let index, valueInput1;

    if (this.state.valueInput1 > this.props.accountsInfo[event.target.value]) {
      this.setState({
        valueInput1: this.props.accountsInfo[event.target.value],
        error:
          'Nie masz wystarczająco środków, to jest wszystko co moeżesz wymienić',
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
        valueInput2: Math.round(valueInput1 * rate * 100) / 100,
      });
    } else {
      let rate = this.updateRate(event.target.value, this.state.selected2);

      this.setState({
        selected1: event.target.value,
        rate: this.updateRate(event.target.value, this.state.selected2),
        valueInput2: Math.round(valueInput1 * rate * 100) / 100,
      });
    }
  };

  handleSelected2 = (event) => {
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
        valueInput2: Math.round(this.state.valueInput1 * rate * 100) / 100,
      });
    } else {
      let rate = this.updateRate(this.state.selected1, event.target.value);

      this.setState({
        selected2: event.target.value,
        rate: this.updateRate(this.state.selected1, event.target.value),
        valueInput2: Math.round(this.state.valueInput1 * rate * 100) / 100,
      });
    }
  };

  updateRate(first, second) {
    if (first === 'PLN') {
      return (
        Math.floor(
          (1 /
            this.props.currentRates.filter((el) => {
              return el.code === second;
            })[0].bid) *
            1000,
        ) / 1000
      );
    } else if (second === 'PLN') {
      return (
        Math.floor(
          this.props.currentRates.filter((el) => {
            return el.code === first;
          })[0].ask * 10000,
        ) / 10000
      );
    } else {
      return (
        Math.floor(
          (this.props.currentRates.filter((el) => {
            return el.code === first;
          })[0].ask /
            this.props.currentRates.filter((el) => {
              return el.code === second;
            })[0].bid) *
            10000,
        ) / 10000
      );
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentRates !== this.props.currentRates) {
      this.setState({
        rate: this.updateRate(this.state.selected1, this.state.selected2),
        valueInput2:
          Math.round(
            this.state.valueInput1 *
              this.updateRate(this.state.selected1, this.state.selected2) *
              100,
          ) / 100,
      });
    }
  }

  handleDialog = () => {
    if (this.state.valueInput1 !== 0) {
      this.setState({
        dialogVisible: !this.state.dialogVisible,
      });
    } else {
      this.setState({
        infoOpen: true,
      });
    }
  };

  closeInfo = () => {
    this.setState({
      infoOpen: false,
    });
  };

  confirm = () => {
    this.handleDialog();
    this.props.confirm(this.state);
    this.setState({
      finished: true,
    });
  };

  componentDidMount() {
    if (Object.keys(this.props.accountsInfo).indexOf('PLN') > -1) {
      this.arrayInput1 = [
        'PLN',
        ...Object.keys(this.props.accountsInfo).filter((e) => e !== 'PLN'),
      ];
    } else {
      this.arrayInput1 = Object.keys(this.props.accountsInfo);
    }

    this.setState({
      selected1: this.arrayInput1[0],
      rate: this.updateRate(this.arrayInput1[0], currencies[0]),
    });
  }

  render() {
    if (Object.keys(this.props.accountsInfo).indexOf('PLN') > -1) {
      this.arrayInput1 = [
        'PLN',
        ...Object.keys(this.props.accountsInfo).filter((e) => e !== 'PLN'),
      ];
    } else {
      this.arrayInput1 = Object.keys(this.props.accountsInfo);
    }
    return (
      <StyledExchange>
        <InternalContainer>
          {this.state.finished && <Redirect to="/" />}
          <h2>Twoje transakcje</h2>
          <p>Wymień:</p>
          <ErrorMessage message={this.state.error} />
          <CurrencyInput
            currenciesArray={this.arrayInput1}
            handleChange={this.handleChangeInput1}
            value={this.state.valueInput1}
            handleSelect={this.handleSelected1}
            selected={this.state.selected1}
          />
          <p>na:</p>
          <CurrencyInput
            currenciesArray={[...currencies, 'PLN']}
            handleChange={this.handleChangeInput2}
            value={this.state.valueInput2}
            handleSelect={this.handleSelected2}
            selected={this.state.selected2}
          />
          <StyledButton onClick={this.handleDialog}>Wymień</StyledButton>
          <p>
            Tranzakcja zostanie wykonana po kursie:
            <span className={'rate'}>
              {' '}
              1 {this.state.selected1} = {this.state.rate}{' '}
              {this.state.selected2}
            </span>
          </p>
          <div>
            <LinearTimerProgress
              width={'70%'}
              height={'10px'}
              timer={this.props.timer}
              text={''}
            />
          </div>
          <AccountsList accountsInfo={this.props.accountsInfo} />
          {this.state.dialogVisible && (
            <ConfirmDialog
              close={this.handleDialog}
              valueInput1={this.state.valueInput1}
              valueInput2={this.state.valueInput2}
              selected1={this.state.selected1}
              selected2={this.state.selected2}
              rate={this.state.rate}
              timer={this.props.timer}
              confirm={this.confirm}
            />
          )}
          <InfoDialog open={this.state.infoOpen} close={this.closeInfo} />
        </InternalContainer>
      </StyledExchange>
    );
  }
}

export default LoggedExchange;
