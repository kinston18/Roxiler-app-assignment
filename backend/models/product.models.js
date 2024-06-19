const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    dateOfSale: Date,
    category: String,
    sold: Boolean,
},{
    timestamps:true
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
