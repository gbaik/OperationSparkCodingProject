import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { examplePageNumbers, examplecryptocurrencyData } from '../data/example';
import List from './List.js';
import Pagination from './Pagination.js';

class Display extends Component { 
  constructor(props) { 
    super(props);
  
    this.state = {
      currentPage: 1,
      pageNumbers: examplePageNumbers,
      cryptocurrencyData: examplecryptocurrencyData,
      lastUpdated: '0'
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentWillReceiveProps() {
    const { data, lastUpdated } = this.props.cryptocurrency;
    if (data) {
      let tempArray = [];

      for (var i = 1; i <= Math.ceil(data.length / 10); i++) {
        tempArray.push(i);
      }

      this.setState({
        pageNumbers: tempArray,         
        cryptocurrencyData: data,
        lastUpdated: lastUpdated
      });
    }
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
      <div className = 'display'>
        <div className = 'title'>
          <h1>Cryptocurrency Market</h1>
        </div>
        <List 
          currentPages = { currentPages }
        />
        <Pagination 
          currentPage = { currentPage }
          handlePageClick = { this.handlePageClick }
          lastUpdated = { lastUpdated }
          pageNumbers = { pageNumbers }
          />
      </div>
    );
  };
}

export default Display;