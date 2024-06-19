const axios = require('axios');
const Product = require('../models/Product');

const fetchData = async () => {
    try {
        const response = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        await Product.insertMany(response.data);
        console.log('Data fetched and saved');
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

module.exports = fetchData;
