import React from 'react';
import './styles.css';

class Header extends React.Component {
  render() {
    const { text } = this.props;
    console.log(this.props.children);

    return (
      <header className="Header">
        <div className="Header__logo">
// import Logo from 'components/Logo';
// Импорт Logo идет сразу в APP
//         Header text="Socialbook"
//           Logo  ребенок Header
//         Header
          {this.props.children}
        </div>
        <h1 className="Header__text">{text}</h1>
      </header>
    );
  }
}

export default Header;
