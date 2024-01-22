const mongoose = require('mongoose');

const estrategiaSchema = mongoose.Schema({
    id_estilo: {
        type: String,
        required: true,
    },
    Estrategia: {
        type: String,
        required: true,
    },
});

const Estrategia = mongoose.model('Estrategia', estrategiaSchema);


module.exports = Estrategia;