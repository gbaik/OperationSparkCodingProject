import React from 'react';

const Pagination = ({ currentPage, handlePageClick, lastUpdated, pageNumbers }) => (
  <div className = 'nav_bar'>
    <ul>
      { currentPage > 1 && <div onClick = {() => handlePageClick(currentPage - 1)}> prev </div> }
      {pageNumbers.map(number => (
        <li onClick = {() => handlePageClick(number) } key = { number }> { number } </li>
      ))}
      { currentPage < pageNumbers.length && <div onClick = {() => handlePageClick(currentPage + 1)}> next </div> }
    </ul>
    <div className = 'last_updated'>
      Updated: { lastUpdated }
    </div>       
  </div>
);

export default Pagination;