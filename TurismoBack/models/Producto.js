const mongoose = require('mongoose');

const ProductoSchema = mongoose.Schema({
    Tipo_de_destino: {type: String, required: true},
    Tipo_de_clima: {type: String, required: true},
    Actividades: {type: String, required: true},
    Preferencias_gastronomicas: {type: String, required: true},
    Tiempo_de_viaje: {type: String, required: true},
    Cantidad_de_turistas: {type: String, required: true},
    Presupuesto: {type: Number, required: true},
    Hobbies: {type: String, required: true},
});

module.exports = mongoose.model('Producto', ProductoSchema);
