const http = require('http');

// Define the port and host
const PORT = 1245;
const HOST = 'localhost';

// Create a new HTTP server instance
const app = http.createServer();

// Handle incoming requests
app.on('request', (req, res) => {
  // Define the response text
  const responseText = 'Hello Holberton School!';

  // Set response headers
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the status code to 200 (OK)
  res.statusCode = 200;

  // Write the response text to the response stream
  res.write(Buffer.from(responseText));

  // End the response
  res.end();
});

// Start listening on the defined port and host
app.listen(PORT, HOST, () => {
  // Log the server URL
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

// Export the app module for testing purposes
module.exports = app;
