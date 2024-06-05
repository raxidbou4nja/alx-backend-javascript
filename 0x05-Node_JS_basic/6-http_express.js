const express = require('express');

const app = express();
const PORT = 1245;

// Define route for root URL
app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

// Start server on specified port
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

// Export the Express app for testing
module.exports = app;
