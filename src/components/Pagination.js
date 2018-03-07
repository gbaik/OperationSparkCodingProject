import React, { Component } from 'react';
import { exampleData } from '../data/example';
import List from './List.js';
import PageNumberList from './PageNumberList.js';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cryptocurrencyData: exampleData,      
      pageNumbers: [],
      currentPage: 1
    };

    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
    const { cryptocurrencyData } = this.state;
    let temp = [];

    for (var i = 1; i <= Math.ceil(cryptocurrencyData.length / 10); i++) {
      temp.push(i);
    }

    this.setState({
      pageNumbers: temp
    });
  }

  handlePageClick(pageNumber) {
    this.setState({
      currentPage: Number(pageNumber)
    });
  }

  render() {
    const { cryptocurrencyData, currentPage, pageNumbers } = this.state;

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
        <ul>
          {pageNumbers.map(number => (
            <PageNumberList 
              handlePageClick = { this.handlePageClick } 
              number = { number } 
              key = { number }
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default Pagination;