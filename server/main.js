import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';

export const CryptocurrencyData = new Mongo.Collection('cryptocurrencyData');

Meteor.methods({
  getData(callback) {
    return HTTP.get('https://api.coinmarketcap.com/v1/ticker/', {}, callback);
  },
  'cryptocurrencyData.insert'(data) {
    CryptocurrencyData.insert({
      data,
      createdAt: new Date()
    });
  }
});