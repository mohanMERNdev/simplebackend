const express = require('express');
const cors = require('cors');

const app = express();

// Use the cors middleware
app.use(cors());

// OR if you want to allow requests from a specific origin
app.use(cors({
    origin: 'https://simplefrontend-three.vercel.app'
}));

// Your existing code to set up routes and start the server
app.get('/api/items', (req, res) => {
    res.json({ message: 'This is your data' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
