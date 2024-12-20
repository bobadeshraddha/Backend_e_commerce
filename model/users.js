const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    password :{
        type : String,
        required : true
    },
    profileImg :{
        type : String,
        required : true
    },
    phone :{
        type : Number,
        unique:true,
        required : true
    },
    address :{
        type : String,
        required : false
    },
    cart :{
        type : mongoose.Schema.Types.ObjectId,
        required : false,
        ref: 'users'
    },
    wishlist :{
        type : mongoose.Schema.Types.ObjectId,
        required : false,
        ref: 'users'
    }
})

module.exports = mongoose.model('users' , userSchema);