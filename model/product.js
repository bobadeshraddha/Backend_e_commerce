const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity:{
    type: Number,
    required: false
  },
  discontedPrice: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: false,
    default: 2,
  },
  Image: {
    type: String,
    required: false
  },
  discription: {
    type: String,
    required: true
  },
  categaryType: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "categary"
  },
});

module.exports = mongoose.model("product", productSchema);
