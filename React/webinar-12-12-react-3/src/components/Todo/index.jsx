import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Это отдельный экземпляр каждого ТоДо
export default class Todo extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };

  static defaultProps = {
    onClick: () => {}
  };

  render() {
    const { text, onClick } = this.props;

    return (
      <div
        style={{
          display: 'flex'
        }}
      >
        <p>{text}{555555555555555}</p>
        <button onClick={onClick}>-</button>
      </div>
              // В скобках - это проп, не в скобках - ивент
    );
  }
}
