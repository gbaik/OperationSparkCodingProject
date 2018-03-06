import { Meteor } from 'meteor/meteor';
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
    Meteor.call('getData', (error, response) => {
      if (error) {
        throw err;
      }

      this.setState({
        cryptocurrencyData: response.data
      });
    });
  }

  render() {
    const { cryptocurrencyData } = this.state;

    return (
      <div>
        <ul>
          <li className = 'disabled'>
            Test
          </li>
        </ul>
        {cryptocurrencyData.map((data, index) => (
          <Bar data = { data} key = { index } num = { index } />
        ))}
      </div>
    );
  };
}

export default Foo;
