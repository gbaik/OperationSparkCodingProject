import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Display from '../src/components/Display.js';

Meteor.startup(() => {
  render(<Display />, document.getElementById('root'));

  Meteor.call('getCollectionCount', function (error, result) {
    if(error) {
      console.error(error);
    }
    
    if (result === 0) {
      Meteor.call('cryptocurrency.get');
    }
  });
});

