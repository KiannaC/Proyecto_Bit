const Informacion = require("../models/Producto");

exports.registrarData = async (req, res) => {
    //console.log('creando producto desde el controlador')
    console.log(req.body);
    try {
        let data;
        data = new Informacion(req.body);
        await data.save();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.status(500).send('Comuníquese con el administrador')
    }
}

exports.obtenerData = async (req,res) => {
    try {
        const data = await Informacion.find();
        res.json(data);

    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador');
    }
}

exports.eliminarData = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            let informacion_data = await Informacion.findById(req.params.id)
            if (!informacion_data) {
                res.status(404).send('Información no encontrada')
            } else {
                await Informacion.findOneAndRemove({ _id: req.params.id })
                res.status(200).send('Registro de datos eliminado correctamente')
                // res.status(200).json({ msg: "Registro eliminado" })
            }
        } else {
            res.status(400).send('Información incorrecta')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}

exports.actualizarData = async(req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            let informacion_data = await Informacion.findById(req.params.id)
            if (!informacion_data) {
                res.status(404).send('Información no encontrada')
            }
            const { Tipo_de_destino, Tipo_de_clima, Actividades, Preferencias_gastronomicas, Tiempo_de_viaje, Cantidad_de_turistas, Presupuesto, Hobbies } = req.body
            informacion_data.Tipo_de_destino = Tipo_de_destino
            informacion_data.Tipo_de_clima = Tipo_de_clima
            informacion_data.Actividades = Actividades
            informacion_data.Preferencias_gastronomicas = Preferencias_gastronomicas
            informacion_data.Tiempo_de_viaje = Tiempo_de_viaje
            informacion_data.Cantidad_de_turistas = Cantidad_de_turistas
            informacion_data.Presupuesto = Presupuesto
            informacion_data.Hobbies = Hobbies
            informacion_data = await Informacion.findOneAndUpdate({ _id: req.params.id }, informacion_data, { new: true })
            res.json(informacion_data)
        } else {
            res.status(400).send('La información propuesta no es correcta')
        }
    } catch (error) {
        console.log(error)
        res.status(500).send('Comuníquese con el administrador')
    }
}