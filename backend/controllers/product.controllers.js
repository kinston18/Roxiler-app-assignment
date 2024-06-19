const Product = require('../models/Product');
const fetchData = require('../utils/fetchData');

const initializeDatabase = async (req, res) => {
    try {
        await fetchData();
        res.status(200).json({ message: 'Database initialized successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Database initialization failed', error });
    }
};

const listTransactions = async (req, res) => {
    const { page = 1, perPage = 10, search = '', month } = req.query;
    try {
        const query = {
            dateOfSale: { $regex: new RegExp(`-${month}-`, 'i') },
            $or: [
                { title: { $regex: search, $options: 'i' } },
                { description: { $regex: search, $options: 'i' } },
                { price: { $regex: search, $options: 'i' } },
            ]
        };

        const transactions = await Product.find(query)
            .skip((page - 1) * perPage)
            .limit(parseInt(perPage));

        const total = await Product.countDocuments(query);

        res.status(200).json({ transactions, total, page, perPage });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching transactions', error });
    }
};



module.exports = {
    initializeDatabase,
    listTransactions,
};
