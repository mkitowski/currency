import bck from '../img/background-land.jpg';
import styled from 'styled-components';
import React from 'react';
import InternalContainer from '../components/Styled/InternalContainer/InternalContainer';
import StyledButton from '../components/Styled/StyledButton/StyledButton';
import SentDialog from '../components/SentDialog/SentDialog';

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
  form {
    .inline {
      width: 80%;
      display: flex;
      //justify-content: space-between;
    }
    .input-container {
      min-width: 50%;
    }
    .email {
      margin-left: 10%;
    }
    input {
      width: 90%;
      margin-top: 15px;
      padding: 6px;
      border-radius: 6px;
      border: 1px solid #dcdcdc;
      transition: background-color 0.3s linear;
      :focus {
        box-shadow: none;
        outline: none;
        background-color: lightgray;
      }
    }
    .subject {
      display: block;
      width: 80%;
      margin-top: 15px;
    }
    textarea {
      display: block;
      width: 80%;
      height: 6em;
      padding: 6px;
      margin-top: 15px;
      border-radius: 6px;
      border: 1px solid #dcdcdc;
      transition: background-color 0.3s linear;
      :focus {
        box-shadow: none;
        outline: none;
        background-color: lightgray;
      }
    }
    button {
      margin-top: 15px;
    }
    span {
      display: block;
      color: red;
      font-size: 0.7em;
      font-weight: 400;
    }
  }
`;

class Contact extends React.Component {
  state = {
    name: this.props.data.name || '',
    nameAlert: false,
    email: this.props.data.email || '',
    emailAlert: false,
    subject: '',
    subjectAlert: false,
    message: '',
    messageAlert: false,
    validated: false,
  };

  validation(event) {
    switch (event.target.name) {
      case 'name':
        if (event.target.value.length < 3) {
          this.setState({
            nameAlert: true,
          });
        } else {
          this.setState({
            nameAlert: false,
          });
        }
        break;
      case 'email':
        const re = /\S+@\S+\.\S+/;
        this.setState({
          emailAlert: !re.test(String(event.target.value).toLowerCase()),
        });
        break;
      case 'subject':
        if (event.target.value.length < 6) {
          this.setState({
            subjectAlert: true,
          });
        } else {
          this.setState({
            subjectAlert: false,
          });
        }
        break;
      case 'message':
        if (event.target.value.length < 20) {
          this.setState({
            messageAlert: true,
          });
        } else {
          this.setState({
            messageAlert: false,
          });
        }
        break;
      default:
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    this.validation(event);
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.state.nameAlert ||
    this.state.emailAlert ||
    this.state.subjectAlert ||
    this.state.messageAlert ||
    this.state.name === '' ||
    this.state.email === '' ||
    this.state.subject === '' ||
    this.state.message === ''
      ? this.setState({
          validated: false,
        })
      : this.setState({
          validated: true,
        });
  };

  dialogClose = () => {
    this.setState({
      validated: false,
      name: this.props.data.name || '',
      email: this.props.data.email || '',
      subject: '',
      message: '',
    });
  };

  render() {
    return (
      <StyledContactPage>
        <InternalContainer>
          <h2>Skontaktuj się z nami</h2>
          <form onSubmit={this.onSubmit}>
            <div className="inline">
              <div className="input-container">
                <input
                  className={'name'}
                  type={'text'}
                  value={this.state.name}
                  onChange={this.handleChange}
                  placeholder={'Twoje imię'}
                  name={'name'}
                  required
                />
                {this.state.nameAlert && (
                  <span>Imię musi posiadać conajmniej 3 znaki</span>
                )}
              </div>
              <div className="input-container">
                <input
                  className={'email'}
                  type={'email'}
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder={'Twój@email'}
                  name={'email'}
                  required
                />
                {this.state.emailAlert && (
                  <span className={'email'}>E-mail nie poprawny</span>
                )}
              </div>
            </div>
            <div className="input-container">
              <input
                className={'subject'}
                type={'text'}
                value={this.state.subject}
                onChange={this.handleChange}
                placeholder={'W czym możemy pomóc'}
                name={'subject'}
                required
              />
              {this.state.subjectAlert && (
                <span>Temat musi posiadać conajmniej 6 znaki</span>
              )}
            </div>
            <div className="input-container">
              <textarea
                value={this.state.message}
                name={'message'}
                onChange={this.handleChange}
                placeholder={'Twoja wiadomość'}
              />
              {this.state.messageAlert && (
                <span> Wiadomość musi posiadać conajmniej 20 znaki</span>
              )}
            </div>
            <StyledButton onSubmit={this.onSubmit}>Wyślij</StyledButton>
          </form>
          <SentDialog open={this.state.validated} close={this.dialogClose} />
        </InternalContainer>
      </StyledContactPage>
    );
  }
}

export default Contact;
