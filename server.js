// This is a simple Express server that listens on port 3000 and responds with "Hello World!" when the root URL is accessed.

require('dotenv').config();

const express = require('express');
const app = express();

// middlewear to parse json body
app.use(express.json());

// custom middlewear to log request method and url. meaning that every time a request is made to the server, it will log the method (GET, POST, etc.) and the URL of the request to the console.
app.use((req,res,next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// API ENDPOINTS

//simple route to test the server
app.get('/', (req, res) => {
  res.send('Product inventory is working!');
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});