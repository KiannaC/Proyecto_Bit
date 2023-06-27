const destino = require("../models/Ciudades")

exports.registrarCiudad = async(req, res) => {
    console.log(req.body);
    try {
        let NuevaCiudad = (req.body)
        const CiudadCreada = await destino.create(NuevaCiudad)
        if (CiudadCreada) {
            return console.log('CiudadCreada')
        }
        throw ('Ha ocurrido un error')
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerCiudades = async(req, res) => {
    try { 
        const ciudades = await  destino.find()
        console.log(ciudades);
        return res.status(200).json({ciudades})
    } catch (error) {
        return res.status(400).json({msg: 'Sea serio ome', error})
    }
}

exports.actualizarCiudades = async(req,res) => {
    try {

        let data = (req.body)
        const updateData = await destino.findByIdAndUpdate(_id,data)
        console.log(updateData);
        return console.log('Actualizado')
        
    } catch (error) {
        console.log(error, "Ah ocurrido un error, contacte a su administrador");
    }
}

exports.eliminarCiudad = async (req, res) => {
    try {
        const id  = req.params;
        const ciudadEliminada = await destino.findByIdAndDelete(id);
        if (ciudadEliminada) {
            return console.log('Ciudad eliminada');
        }
        throw 'No se pudo encontrar la ciudad';
    } catch (error) {
        console.log(error);
    }
}

exports.buscarUsuario = async (req, res) => {
    try {
    let _id  = req.body;
    const usuario = await UsuarioModel.findById(_id);
    if (usuario) {
        return res.status(200).json(usuario);
    } else {
        return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }
    } catch (error) {
    return res.status(500).json({ mensaje: 'Error en el servidor', error });
    }
}