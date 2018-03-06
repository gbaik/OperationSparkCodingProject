import { Meteor } from 'meteor/meteor';
import http from 'http';
import { HTTP } from 'meteor/http';
import { Mongo } from 'meteor/mongo';
import socket_io from 'socket.io';

export const CryptocurrencyData = new Mongo.Collection('cryptocurrencyData');

if (Meteor.isServer) {
  const PORT = parseInt(process.env.SOCKET_PORT) || 5000;  
  const server = http.createServer().listen(PORT);
  const io = socket_io.listen(server);
  
  io.on('connection', function(socket) {
    function test() {
      socket.emit('get_cryptocurrency_data'); 
    };

    test();
    setInterval(test, 300010);
  });
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
  }
});
