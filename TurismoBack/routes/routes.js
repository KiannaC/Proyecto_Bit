// rutas para el producto 
const express = require('express');
const router = express.Router();
const productoController = require ('../controllers/productoController');
const usuarioController = require ('../controllers/usuarioController');
const ciudadesController = require ('../controllers/ciudadesController')

//productos
router.post('/productos/registrarData', productoController.registrarData);


//usuarios
router.post('/create', usuarioController.registrarUsuario);
router.get('/get', usuarioController.obtenerUsuarios);
router.put('/update/ :id', usuarioController.actualizarUsuarios);
router.delete('/delete/ :id', usuarioController.eliminarUsuario);
router.get('/getOne', usuarioController.buscarUsuario);

router.post('/create-city', ciudadesController.registrarCiudad);


module.exports = router;