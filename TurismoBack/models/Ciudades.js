const mongoose = require('mongoose');

const ciudades = new mongoose.Schema({
    nombre: {type:String, required: true},
    descripcion: {type:String, required: true},
    clima: {type:String, required: true},

})