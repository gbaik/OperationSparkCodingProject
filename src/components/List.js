import React from 'react';

const List = ({ data, num }) => (
  <div>
    <div>
      Name: { data['name'] }
    </div>
    <div>
      Id: { data['id'] }
    </div>
    <div>
      USD Price: { data['price_usd'] }
    </div>
    <div>
      Quantity: { data['avaiable_supply'] } 
    </div>
    <div>
      Market Cap USD: { data['market_cap_usd'] }
    </div>
    <div>
      24hr Volume USD: { data['24h_volume_usd'] } 
    </div>
    <hr />
  </div>
);

export default List;