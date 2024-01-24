const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    product: String,
    quantity: Number,
    price: Number,
    date: Date,
  });
  
const SaleModel = mongoose.model('Sale', salesSchema);

module.exports = SaleModel