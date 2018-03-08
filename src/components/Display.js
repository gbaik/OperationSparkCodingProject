import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';

import { examplePageNumbers, examplecryptocurrencyData } from '../data/example';
import { CryptocurrencyData } from '../../imports/api/cryptocurrency.js';

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
    let lastUpdated = cryptocurrency[0] ? cryptocurrency[0]['lastUpdated'] : '0000-0-0 00:00:00';
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

export default withTracker(() => {
  const cryptocurrencyHandle = Meteor.subscribe('cryptocurrency');
  const loading = !cryptocurrencyHandle.ready();
  const cryptocurrency = CryptocurrencyData.find({}, {sort: {'lastUpdated': -1}, limit: 1}).fetch();

  return {
    loading,
    cryptocurrency: loading ? [] : cryptocurrency
  };
})(Display);
