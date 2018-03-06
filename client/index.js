import React from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
 
import Foo from '../src/components/Foo.js';
 
Meteor.startup(() => {
  ReactDOM.render(<Foo />, document.getElementById('root'));
});
