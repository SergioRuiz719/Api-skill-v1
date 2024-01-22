const mongoose = require('mongoose');

const consejoSchema = mongoose.Schema({
    id_estilo: {
        type: String,
        required: true,
    },
    Consejo: {
        type: String,
        required: true,
    },
});

const Consejo = mongoose.model('Consejo', consejoSchema);


module.exports = Consejo;