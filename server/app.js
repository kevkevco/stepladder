import express from 'express';
const app = express();

import { fileURLToPath } from 'url';
import { dirname, join } from 'path'; // Import 'join' from 'path'

// Import and execute the code in db.js to establish the database connection
import db from './db.js';

// Middleware
app.use(express.json());

// Construct the absolute path to the "client/dist" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const clientDirectory = join(__dirname, '../client/dist');

// Serve static files from the "client/dist" directory
app.use(express.static(clientDirectory));

// Handle client-side routing
app.get('*', (req, res) => {
  // Send the 'index.html' file from the "client/dist" directory
  res.sendFile(join(clientDirectory, 'index.html'));
});

// TODO Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
