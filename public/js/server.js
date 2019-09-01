const http = require('http');

http
  .createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Hello Node!\n');
  })
  .listen(8080);

console.log('My first Node.js on port 8080');
