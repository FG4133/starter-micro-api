const http = require('http');

const server = http.createServer((request, response) => {
  console.log(request.url); // This line will print the requested URL in the console
  response.end();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
