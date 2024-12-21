const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    productId:{
        type: mongoose.Schema.Types.ObjectId,
        require:true,
        ref :  "product"
    },
    Quantity:{
        type: Number,
        require:true
    },
   userId:{
    type: mongoose.Schema.Types.ObjectId,
    require:true,
    ref: "users"
   }

})

module.exports = mongoose.model('cart' , cartSchema);
    