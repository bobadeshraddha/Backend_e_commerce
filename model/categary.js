const mongoose = require('mongoose');

const categarySchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    }
})

    module.exports = mongoose.model('categary' , categarySchema);