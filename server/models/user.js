const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    admin_email:{
        type: String,
        required: true
    },
    admin_name: {
        type: String,
        required: true
    },
    admin_tel:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
})
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;