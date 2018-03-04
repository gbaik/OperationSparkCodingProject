import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Bar from './Bar.js';
import { exampleData } from '../data/example';

class Foo extends Component { 
  constructor(props) { 
    super(props);
    
    this.state = {
      cryptocurrencyData: []
    }
  }

  componentDidMount() {
    this.setState({
      cryptocurrencyData: exampleData
    })
  }

  render() {
    const { cryptocurrencyData } = this.state;

    return (
      <div>
        {cryptocurrencyData.map((data, index) => (
          <Bar data = { data} key = { index } />
        ))}
      </div>
    );
  };
}

export default Foo;
