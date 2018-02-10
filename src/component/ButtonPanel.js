import React from 'react'
import Button from './Button'

class ButtonPanel extends React.Component {
  handleClick = (buttonName) => {
    this.props.clickHandler(buttonName)
  }

  render () {
    return (
      <div>
        <div>
          <Button symbol='AC' clickHandler={this.handleClick}/>
          <Button symbol='+/-' clickHandler={this.handleClick}/>
          <Button symbol='%' clickHandler={this.handleClick}/>
          <Button symbol='÷' clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button symbol='7' clickHandler={this.handleClick}/>
          <Button symbol='8' clickHandler={this.handleClick}/>
          <Button symbol='9' clickHandler={this.handleClick}/>
          <Button symbol='x' clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button symbol='4' clickHandler={this.handleClick}/>
          <Button symbol='5' clickHandler={this.handleClick}/>
          <Button symbol='6' clickHandler={this.handleClick}/>
          <Button symbol='-' clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button symbol='1' clickHandler={this.handleClick}/>
          <Button symbol='2' clickHandler={this.handleClick}/>
          <Button symbol='3' clickHandler={this.handleClick}/>
          <Button symbol='+' clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button symbol='0' clickHandler={this.handleClick}/>
          <Button symbol=',' clickHandler={this.handleClick}/>
          <Button symbol='=' clickHandler={this.handleClick}/>
        </div>
      </div>
    )
  }
}

export default ButtonPanel