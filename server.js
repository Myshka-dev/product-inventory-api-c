// This is a simple Express server that listens on port 3000 and responds with "Hello World!" when the root URL is accessed.

require('dotenv').config();

const express = require('express');
const app = express();


// Define a route for the root URL that sends "Hello World!" as the response
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});