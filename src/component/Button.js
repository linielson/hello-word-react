import React, { Component } from 'react';

class Button extends React.Component {
  render() {
    return <button>{this.props.symbol}</button>;
  }
}

export default Button;