import { Meteor } from 'meteor/meteor';

Meteor.setInterval(function () {
  let lastUpdated = new Date().toLocaleString();
  Meteor.call('cryptocurrency.get', lastUpdated);
}, 10000); //300005