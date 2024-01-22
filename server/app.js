const express = require('express');
const app = express();

// Import and execute the code in db.js to establish the database connection
const db = require('./db.js');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling
// ...

module.exports = app;