import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import DisplayContainer from '../src/components/DisplayContainer.js';

Meteor.startup(() => {
  render(<DisplayContainer />, document.getElementById('root'));
});