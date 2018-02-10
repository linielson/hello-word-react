import React from 'react'

class Button extends React.Component {
  onClick = () => {
    this.props.clickHandler(this.props.symbol)
  }

  render () {
    return (
      <button
        onClick={this.onClick}
      >
        {this.props.symbol}
      </button>
    )
  }
}

export default Button