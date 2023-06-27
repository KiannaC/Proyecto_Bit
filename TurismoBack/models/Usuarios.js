const mongoose = require ('mongoose');

const Usuarios = new mongoose.Schema({
    nombre: {type: String, required: true},
    apellido: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    contraseña:  {type: String, required: true},
    edad: {type: String, select: false},
    telefono: {type: Number, required: false},
    lugar_de_residencia: {type: String, required: false},
    contraseña: {type: String, required: true},
},
{
    timestamps: true
})

module.exports = mongoose.model('Usuarios', Usuarios)