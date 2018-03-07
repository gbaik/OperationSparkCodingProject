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
          ${ data['price_usd'] }
        </div>
      ))}
    </div>
    <div>
      <h3>Quantity</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['available_supply'] }
        </div>
      ))}
    </div>
    <div>
      <h3>Market Cap (USD)</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          ${ data['market_cap_usd'] }
        </div>
      ))}
    </div>
    <div>
      <h3>24hr Volume (USD)</h3>
      {currentPages.map((data, index) => (
        <div key = { index }>
          ${ data['24h_volume_usd'] }
        </div>
      ))}
    </div>
  </div>
);

export default List;