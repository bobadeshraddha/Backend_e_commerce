const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', 
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product', 
                required: true,
            },
            addedAt: {
                type: Date,
                default: Date.now,
            },
        },
    ],
});

module.exports = mongoose.model('Wishlist', wishlistSchema);