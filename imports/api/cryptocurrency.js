import { Meteor } from 'meteor/meteor';
import http from 'http';
import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';
import socket_io from 'socket.io';

export const CryptocurrencyData = new Mongo.Collection('cryptocurrencyData');

if (Meteor.isServer) {
  // const PORT = parseInt(process.env.SOCKET_PORT) || 5000;  
  // const server = http.createServer().listen(PORT);
  // const io = socket_io.listen(server);
  
  // io.on('connection', function(socket) {
  //   const getCryptocurrencyData = function () {
  //     let lastUpdated = new Date().toLocaleString();      
  //     socket.emit('get_cryptocurrency_data', lastUpdated); 
  //   };

  //   getCryptocurrencyData();
  //   setInterval(getCryptocurrencyData, 300010);
  // });

  Meteor.publish('cryptocurrency', function cryptocurrencyPublication() {
    return CryptocurrencyData.find();
  });

  // const getCryptocurrencyData = function () {
  
  // };

  // getCryptocurrencyData();
  // setInterval(getCryptocurrencyData, 5000);
}

Meteor.methods({
  getData(callback) {
    return HTTP.get('https://api.coinmarketcap.com/v1/ticker/', {}, callback);
  },
  'cryptocurrencyData.insert'(data) {
    CryptocurrencyData.insert({
      data,
      createdAt: new Date()
    });
  },
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