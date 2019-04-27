import React from 'react';
import StyledInfoWindow from '../Styled/StyledInfoWindow/StyledInfoWindow';
import StyledCloseButton from '../Styled/StyledClosedButton/StyledClosedButton';
import StyledButton from '../Styled/StyledButton/StyledButton';
import ConfirmationMessage from './ConfirmationMessage';
import CancelationMessage from './CancelationMessage';

export default class ConfirmDialog extends React.Component {
  state = {
    disabled: false,
  };
  componentDidMount() {
    this.setState({
      disabled: false,
    });
  }

  componentWillReceiveProps(next) {
    if (next.timer === 1) {
      setTimeout(() => {
        this.setState({ disabled: true });
      }, 900);
    }
  }
  componentWillUnmount() {
    this.setState({
      disabled: false,
    });
  }

  close = () => {
    this.setState({
      disabled: false,
    });
    this.props.close();
  };

  render() {
    return (
      <StyledInfoWindow>
        <StyledCloseButton onClick={this.close}>X</StyledCloseButton>
        {this.state.disabled ? (
          <CancelationMessage
            valueInput1={this.props.valueInput1}
            valueInput2={this.props.valueInput2}
            selected1={this.props.selected1}
            selected2={this.props.selected2}
            rate={this.props.rate}
            confirmDisabled={this.state.disabled}
          />
        ) : (
          <ConfirmationMessage
            valueInput1={this.props.valueInput1}
            valueInput2={this.props.valueInput2}
            selected1={this.props.selected1}
            selected2={this.props.selected2}
            rate={this.props.rate}
            timer={this.props.timer}
            confirmDisabled={this.state.disabled}
          />
        )}
        <div>
          <StyledButton
            disabled={this.state.disabled}
            onClick={this.props.confirm}
          >
            Zatwierdź
          </StyledButton>{' '}
          <StyledButton onClick={this.close}>Anuluj</StyledButton>
        </div>
      </StyledInfoWindow>
    );
  }
}
