//uso de node module system
const http = require('http');
const routes = require('./routesv7');

const server = http.createServer(routes.handler);

server.listen(3005);