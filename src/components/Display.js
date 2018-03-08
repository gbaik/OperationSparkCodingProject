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
      currentPage: 1
    }

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  handlePageClick(pageNumber) {
    this.setState({
      currentPage: Number(pageNumber)
    });
  }

  render() {
    const { currentPage } = this.state;
    const { cryptocurrency } = this.props;

    const indexOfLastPage = currentPage * 10;
    const indexOfFirstPage = indexOfLastPage - 10;

    let data = cryptocurrency[0] ? cryptocurrency[0]['data'] : examplecryptocurrencyData;
    let lastUpdated = cryptocurrency[0] ? cryptocurrency[0]['lastUpdated'] : '0';
    let currentPages = data.slice(indexOfFirstPage, indexOfLastPage);
    let pageNumbers = [];

    for (var i = 1; i <= Math.ceil(data.length / 10); i++) {
      pageNumbers.push(i);
    }

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