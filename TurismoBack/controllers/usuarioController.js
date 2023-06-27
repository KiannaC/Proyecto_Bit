const UsuarioModel = require('../models/Usuarios');
const route = require('../routes/routes');

exports.registrarUsuario = async(req, res) => {
    console.log(req.body);
    try {
        let NuevoUsuario = (req.body)
        const UsuarioCreado = await UsuarioModel.create(NuevoUsuario)
        if (UsuarioCreado) {
            return console.log('Usuario Creado')
        }
        throw ('Ha ocurrido un error')
    } catch (error) {
        console.log(error);
    }
}

exports.obtenerUsuarios = async(req, res) => {
    try { 
        const Usuarios = await  UsuarioModel.find()
        console.log(Usuarios);
        return res.status(200).json({Usuarios})
    } catch (error) {
        return res.status(400).json({msg: 'Sea serio ome', error})
    }
}

exports.actualizarUsuarios = async(req,res) => {
    try {

        let data,_id = (req.body)
        const updateData = await UsuarioModel.findByIdAndUpdate(_id,data)
        console.log(updateData);
        return console.log('Actualizado')
        
    } catch (error) {
        console.log(error, "Que paso papi");
    }
}

exports.eliminarUsuario = async (req, res) => {
    try {
        const id  = req.params;
        const usuarioEliminado = await UsuarioModel.findByIdAndDelete(id);
        if (usuarioEliminado) {
            return console.log('Usuario eliminado');
        }
        throw 'No se pudo encontrar el usuario';
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

exports.logIn = async (req,res) => {
    let email, password 
}