// Load the built-in 'http' module
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;                      // HTTP status code OK
  res.setHeader('Content-Type', 'text/plain'); // Content type
  res.end('Hello, World!\n');                // Send response
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
