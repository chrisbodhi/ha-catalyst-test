'use strict';

const Hapi = require('hapi');
const squareSeconds = require('./lib/square-root-time');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.route({
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply(`Hello, ha-catalyst-test! A number: ${squareSeconds()}`);
  }
});

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});
