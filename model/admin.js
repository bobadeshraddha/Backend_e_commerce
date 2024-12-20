const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
   
    password :{
        type : String,
        required : true
    },
    
    contact :{
        type : Number,
        unique:true,
        required : true
    },
    role :{
        type : Number,
        required : false
    },
   
})

module.exports = mongoose.model('admin' , adminSchema);


