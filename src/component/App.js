import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends Component {
  render() {
    return (
      <div>
        <Display value="17"/>
        <ButtonPanel/>
      </div>
    );
  }
}

export default App;
