import express from 'express';
const app = express();

// Import and execute the code in db.js to establish the database connection
import db from './db.js';

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling
// ...

export default app;