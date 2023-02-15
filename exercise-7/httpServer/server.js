
const http = require('http');
const router = require('./router');

const server = http.createServer(router);

server.listen(8000, () => {
  console.log('Server running on port 8000');
});
