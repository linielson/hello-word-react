import React, { Component } from 'react';

class Button extends React.Component {
  onClick = () => {
    console.log(`Clicked at ${this.props.symbol}`)
  }

  render() {
    return (
      <button
        onClick={ this.onClick }
      >
        { this.props.symbol }
      </button>
    );
  }
}

export default Button;