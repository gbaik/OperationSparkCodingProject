import React from 'react';
import { Meteor } from 'meteor/meteor';
import { CryptocurrencyData } from '../../imports/api/cryptocurrency.js';
import { withTracker } from 'meteor/react-meteor-data';

import Display from './Display.js';

export default DisplayContainer = withTracker(() => {
  const cryptocurrencyHandle = Meteor.subscribe('cryptocurrency');
  const loading = !cryptocurrencyHandle.ready();
  const cryptocurrency = CryptocurrencyData.find({}, {sort: {'lastUpdated': -1}, limit: 1});

  return {
    loading,
    cryptocurrency: !loading ? cryptocurrency.fetch() : [] 
  };
})(Display);