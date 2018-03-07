import React from 'react';

const List = ({ currentPages }) => (
  <div className = 'main_content'>
    <div>
      <h3>Name</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['name'] }
        </div>
      ))}
    </div>
    <div>
      <h3>ID</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['id'] }
        </div>
      ))}
    </div>
    <div>
      <h3>Price (USD)</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          ${ Number(data['price_usd']).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }
        </div>
      ))}
    </div>
    <div>
      <h3>Quantity</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          { Number(data['available_supply']).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }
          {' '}
          { data['symbol'] }
        </div>
      ))}
    </div>
    <div>
      <h3>Market Cap (USD)</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          ${ Number(data['market_cap_usd']).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }
        </div>
      ))}
    </div>
    <div>
      <h3>24hr Volume (USD)</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          ${ Number(data['24h_volume_usd']).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') }
        </div>
      ))}
    </div>
  </div>
);

export default List;