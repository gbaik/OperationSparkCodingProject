import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';

export const CryptocurrencyData = new Mongo.Collection('cryptocurrencyData');

if (Meteor.isServer) {
  Meteor.publish('cryptocurrency', function cryptocurrencyPublication() {
    return CryptocurrencyData.find()
  });
}

Meteor.methods({
  'cryptocurrency.get'(lastUpdated) {
    try {
      const { data } = HTTP.get('https://api.coinmarketcap.com/v1/ticker/');

      CryptocurrencyData.insert({
        data,
        lastUpdated: lastUpdated
      });
    } catch(error) {
      console.error(error);
    }
  }
});