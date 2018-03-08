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
    const { loading, cryptocurrency } = this.props;

    const indexOfLastPage = currentPage * 10;
    const indexOfFirstPage = indexOfLastPage - 10;
    let currentPages = examplecryptocurrencyData.slice(indexOfFirstPage, indexOfLastPage);
    let pageNumbers = examplePageNumbers;
    let lastUpdated = '0';

    if (!loading) {
      currentPages = cryptocurrency[0]['data'].slice(indexOfFirstPage, indexOfLastPage);
      lastUpdated = cryptocurrency[0]['lastUpdated'];

      let temp = [];

      for (var i = 1; i <= Math.ceil(cryptocurrency[0]['data'].length / 10); i++) {
        temp.push(i);
      }

      pageNumbers = temp;
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