const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    category: {
        type: "string",
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    inStock: {
        type: Boolean,
        required: true
    }
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
