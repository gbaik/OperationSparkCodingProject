import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.methods({
  getData(callback) {
    return HTTP.get('https://api.coinmarketcap.com/v1/ticker/', {}, callback)
  }
});