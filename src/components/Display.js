import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import List from './List.js';
import { exampleData } from '../data/example';
import io from 'socket.io-client';

class Display extends Component { 
  constructor(props) { 
    super(props);
    
    this.port = process.env.port || 5000;
    this.socket = io(`http://localhost:${this.port}`);

    this.state = {
      cryptocurrencyData: exampleData,
      lastUpdated: '0'
    }
  }

  componentDidMount() { 
    this.socket.on('get_cryptocurrency_data', (lastUpdated) => {
      Meteor.call('getData', (error, response) => {
        if (error) {
          throw err;
        }

        const data = response.data;

        this.setState({
          cryptocurrencyData: data,
          lastUpdated: lastUpdated
        });

        Meteor.call('cryptocurrencyData.insert', data);      
      });
    });
  }

  render() {
    const { cryptocurrencyData, lastUpdated } = this.state;

    return (
      <div>
        {cryptocurrencyData.map((data, index) => (
          <List data = { data} key = { index } num = { index } />
        ))}
        Updated: { lastUpdated }
      </div>
    );
  };
}

export default Display;