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
      pageNumbers: [],
      currentPage: 1,
      cryptocurrencyData: exampleData,
      lastUpdated: '0'
    }

    this.handlePageClick = this.handlePageClick.bind(this);    
  }

  componentDidMount() { 
    this.socket.on('get_cryptocurrency_data', (lastUpdated) => {
      Meteor.call('getData', (error, response) => {
        if (error) {
          throw err;
        }

        const data = response.data;
        let temp = [];
        
        for (var i = 1; i <= Math.ceil(data.length / 10); i++) {
          temp.push(i);
        }

        this.setState({
          pageNumbers: temp,         
          cryptocurrencyData: data,
          lastUpdated: lastUpdated          
        });

        Meteor.call('cryptocurrencyData.insert', data);      
      });
    });
  }

  handlePageClick(pageNumber) {
    this.setState({
      currentPage: Number(pageNumber)
    });
  }

  render() {
    const { cryptocurrencyData, currentPage, pageNumbers, lastUpdated } = this.state;
    
    const indexOfLastPage = currentPage * 10;
    const indexOfFirstPage = indexOfLastPage - 10;
    const currentPages = cryptocurrencyData.slice(indexOfFirstPage, indexOfLastPage);

    return (
      <div>
        <ul>
          {currentPages.map((todo, index) => (
            <List 
              data = { todo } 
              key = { index }
            />
          ))}
        </ul>
        Updated: { lastUpdated }        
        <ul>
          {pageNumbers.map(number => (
            <li onClick = {() => this.handlePageClick(number)  } key = { number }> { number } </li>
          ))}
        </ul>
      </div>
    );
  };
}

export default Display;