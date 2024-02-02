const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firtsName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    emai: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 7
    },

});

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel