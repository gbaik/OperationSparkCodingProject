import React from 'react';

const PageNumberList = ({ number, handlePageClick }) => (
  <div>
    <li onClick = {() => handlePageClick(number)  } > { number } </li>
  </div>
);

export default PageNumberList;