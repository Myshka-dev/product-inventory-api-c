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

// Data storage for products (in-memory) (by Pauline Michael: branch name: develop-pauline)
let products = [
    // INSERT SAMPLE PRODUCTS HERE FOR TESTING PURPOSES (LIKE 3)
    //
    //
    //
    // EXAMPLE: {id: 1, name: "Product 1", price: 10.99, quantity: 100, category: "Category 1"  }
];

// API ENDPOINTS


//1. GET ALL PRODUCTS (by Pauline Michael: branch name: develop-pauline)

     // YOUR CODE COMES HERE



//2. GET A SINGLE PRODUCT BY ID (by Nkono precious: branch name: develop-precious)

    // YOUR CODE COMES HERE




//3. CREATE A NEW PRODUCT (by myshka)

    // YOUR CODE COMES HERE 




//4. UPDATE AN EXISTING PRODUCT BY ID(USE PATCH METHOD) (by Jubril Olaoluwa: branch name: develop-jubril)

    // YOUR CODE COMES HERE




//5. DELETE A PRODUCT BY ID(by Favour Edafe: branch name: develop-favour)

    // YOUR CODE COMES HERE




//HANDLER FOR UNDEFINED ROUTES (by ......: branch name:........ )

    // YOUR CODE COMES HERE




//HANDLER FOR INTERNAL SERVER ERRORS (by ......: branch name:........ )

    // YOUR CODE COMES HERE


//simple route to test the server
app.get('/', (req, res) => {
  res.send('Product inventory is working!');
});

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on: http://localhost:${PORT}`);
});