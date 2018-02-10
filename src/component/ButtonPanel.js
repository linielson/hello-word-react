import React, { Component } from 'react';
import Button from './Button';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Button symbol='AC'/>
          <Button symbol='+/-'/>
          <Button symbol='%'/>
          <Button symbol='/'/>
        </div>
        <div>
          <Button symbol='7'/>
          <Button symbol='8'/>
          <Button symbol='9'/>
          <Button symbol='x'/>
        </div>
        <div>
          <Button symbol='4'/>
          <Button symbol='5'/>
          <Button symbol='6'/>
          <Button symbol='-'/>
        </div>
        <div>
          <Button symbol='1'/>
          <Button symbol='2'/>
          <Button symbol='3'/>
          <Button symbol='+'/>
        </div>
        <div>
          <Button symbol='0'/>
          <Button symbol=','/>
          <Button symbol='='/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;