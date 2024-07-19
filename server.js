const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// CORS Middleware
app.use(cors({
    origin: 'https://simplefrontend-three.vercel.app/' // Replace with your frontend URL
}));

// Simple in-memory data store
let items = [];

// API endpoint to get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// API endpoint to add a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body.item;
  items.push(newItem);
  res.status(201).json(newItem);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
