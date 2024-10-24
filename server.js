// server.js
require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');

// Middleware
app.use(express.json()); // Parse JSON requests

// Environment variables
const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 4000;

// Routers
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'about.html'));
});

// Use the product routes
app.use('/api', require('./Routes/Products.route.js')); // Adjusted path

async function main() {
    try {
        await mongoose.connect(dbURI);
        console.log('Connected to MongoDB');
        
        app.listen(PORT, () => {
            console.log(`Server running on port: ${PORT}`);   
        });
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

main().catch(err => {
    console.error(`Error: ${err}`);
});
