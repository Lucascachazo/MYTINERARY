const express = require('express')
const router = express.Router()
const cityController = require ('../controllers/cityController')
const itineraryController = require('../controllers/itinerariesController')
const userController = require('../controllers/userController')
const validatorController = require ('../controllers/validatorController')

// RUTA PARA CIUDADES----------------------------
router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.oneCity)


// RUTA PARA ITINERARIOS-------------------------
 router.route('/itineraries')
.get(itineraryController.alItineraries)
.post(itineraryController.agregarItineraries)

// RUTA PARA UN SOLO ITINERARIO POR ID------------
router.route('/itineraries/:id')
.get(itineraryController.findItenerary)

// RUTA PARA OBTENER UN USUARIO
 router.route('/user/register')
.get(userController.obtenerUser)
.post(validatorController.validarCuenta,userController.cargarUser)



module.exports = router