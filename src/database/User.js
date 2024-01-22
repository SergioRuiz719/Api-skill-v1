const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    id_estilo: {
        type: String,
        required: false,
    },
    nombre: {
        type: String,
        required: false,
    },
    edad: {
        type: Number,
    },
});

const User = mongoose.model('User', userSchema);


module.exports = User;