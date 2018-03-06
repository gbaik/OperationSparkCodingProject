import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Foo from '../src/components/Foo.js';

Meteor.startup(() => {
  render(<Foo />, document.getElementById('root'));
});