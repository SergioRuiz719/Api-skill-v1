const mongoose = require('mongoose');

const tareaSchema = mongoose.Schema({
    id_usuario: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        required: true,
    },
    Tarea: {
        type: String,
        required: true,
    },
    estado: {
        type: Number,
        default: 1,
    },
});

module.exports = mongoose.model('Tarea', tareaSchema);