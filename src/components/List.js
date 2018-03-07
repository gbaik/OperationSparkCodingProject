import React from 'react';

const List = ({ currentPages }) => (
  <div className = 'main_content'>
    <div>
      Name
      {currentPages.map((data, index) => (
        <div>
          { data['name'] }
        </div>
      ))}
    </div>
    <div>
      Id
      {currentPages.map((data, index) => (
        <div>
          { data['id'] }
        </div>
      ))}
    </div>
    <div>
      USD Price
      {currentPages.map((data, index) => (
        <div>
          { data['price_usd'] }
        </div>
      ))}
    </div>
    <div>
      Quantity
      {currentPages.map((data, index) => (
        <div>
          { data['available_supply'] }
        </div>
      ))}
    </div>
    <div>
      Market Cap USD
      {currentPages.map((data, index) => (
        <div>
          { data['market_cap_usd'] }
        </div>
      ))}
    </div>
    <div>
      24hr Volume USD
      {currentPages.map((data, index) => (
        <div>
          { data['24h_volume_usd'] }
        </div>
      ))}
    </div>
  </div>
);

export default List;