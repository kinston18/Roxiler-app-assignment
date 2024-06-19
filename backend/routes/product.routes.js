const express = require('express');
const { initializeDatabase, listTransactions,  } = require('../controllers/productController');

const router = express.Router();

router.get('/initialize-db', initializeDatabase);
router.get('/transactions', listTransactions);


module.exports = router;
