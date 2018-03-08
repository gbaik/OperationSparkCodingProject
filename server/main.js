import { Meteor } from 'meteor/meteor';

Meteor.setInterval(function () {
  Meteor.call('cryptocurrency.get');
}, 300005);