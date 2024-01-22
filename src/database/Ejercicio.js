const mongoose = require('mongoose');

const ejercicioSchema = mongoose.Schema({
    id_estilo: {
        type: String,
        required: true,
    },
    Ejercicio: {
        type: String,
        required: true,
    },
});

const Ejercicio = mongoose.model('Ejercicio', ejercicioSchema);


module.exports = Ejercicio;