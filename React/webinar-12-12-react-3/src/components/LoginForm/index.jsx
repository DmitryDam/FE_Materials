import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  static propTypes = {};
// Значение input равно текущему состоянию формы
  state = {
    loginInptValue: '',
    passInptValue: ''
  };

  _handleLoginInputChange = evt => {
    // операция асинхронная и ивент отпущен
    // поэтому нужно его сохранить. (синтетическ ивент который 1)
    const value = evt.target.value;

    this.setState({
      loginInptValue: value
    });
  };

  _handlePassInputChange = evt => {
    // операция асинхронная и ивент отпущен
    // поэтому нужно его сохранить. (синтетическ ивент который 1)
    const value = evt.target.value;

    this.setState({
      passInptValue: value
    });
  };

  _handleFormSubmit = evt => {
    evt.preventDefault();
// Записывает значения в объект
    const userData = {
      login: this.state.loginInptValue,
      pass: this.state.passInptValue
    };

    console.log(JSON.stringify(userData));
  };

  render() {
    const { loginInptValue, passInptValue } = this.state;
    return (
      <form onSubmit={this._handleFormSubmit}>
        <input
          type="text"
          value={loginInptValue}
          // событие onChange
          onChange={this._handleLoginInputChange}
        />
        <input
          type="password"
          value={passInptValue}
          onChange={this._handlePassInputChange}
        />
        <button type="submit">login</button>
      </form>
    );
  }
}
