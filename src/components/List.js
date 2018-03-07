import React from 'react';

const List = ({ currentPages }) => (
  <div className = 'main_content'>
    <div>
      Name
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['name'] }
        </div>
      ))}
    </div>
    <div>
      Id
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['id'] }
        </div>
      ))}
    </div>
    <div>
      USD Price
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['price_usd'] }
        </div>
      ))}
    </div>
    <div>
      Quantity
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['available_supply'] }
        </div>
      ))}
    </div>
    <div>
      Market Cap USD
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['market_cap_usd'] }
        </div>
      ))}
    </div>
    <div>
      24hr Volume USD
      {currentPages.map((data, index) => (
        <div key = { index }>
          { data['24h_volume_usd'] }
        </div>
      ))}
    </div>
  </div>
);

export default List;