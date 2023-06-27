const mongoose = require('mongoose');

const Ciudades = new mongoose.Schema({
    nombre: {type:String, required: true},
    descripcion: {type:String, required: true},
    clima: {type:String, required: true},
    preferencias_gastronomicas: {type:String}
},
{
    timestamps: true
})

module.exports = mongoose.model('Ciudades', Ciudades)