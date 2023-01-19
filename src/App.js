import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      data: null,
    }
  }
  render() {
    return (
      <div className="container">
        <textarea onChange={(e)=>this.setState({data:e.target.value})} rows="3">{this.state.data}</textarea>
        <div className="counter">{this.state.data ? this.state.data.length: '0'}</div>
      </div>
    );
  }
}

export default App;
