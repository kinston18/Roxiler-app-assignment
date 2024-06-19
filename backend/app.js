const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const PORT = 3000;
const MONGO_URI = 'your_mongo_connection_string';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    // Define your schema based on the JSON data structure
    // For example:
    title: String,
    description: String,
    price: Number,
    dateOfSale: Date,
    category: String,
    // ... other fields
});

const Product = mongoose.model('Product', productSchema);

// Fetch and initialize database
app.get('/initialize-db', async (req, res) => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        const products = response.data;
        
        // Save products to database
        await Product.insertMany(products);
        res.status(200).send('Database initialized successfully');
    } catch (error) {
        res.status(500).send('Error initializing database');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
