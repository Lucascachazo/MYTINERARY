const express = require('express')
const router = express.Router()
const cityController = require ('../controllers/cityController')
const itineraryController = require('../controllers/itinerariesController')
const userController = require('../controllers/userController')
const validatorController = require ('../controllers/validatorController')
const passport = require('passport')
require('../config/passport')

// RUTA PARA CIUDADES----------------------------
router.route('/cities')
.get(cityController.allCities)
.post(passport.authenticate('jwt', {session: false}), cityController.addCity)

router.route('/cities/:id')
.get(cityController.oneCity)


// RUTA PARA ITINERARIOS-------------------------
 router.route('/itineraries')
.get(itineraryController.alItineraries)
.post(itineraryController.addComment)

router.route('/itineraries/addItineraries')
.post(itineraryController.agregarItineraries)


// RUTA PARA UN SOLO ITINERARIO POR ID------------
router.route('/itineraries/:id')
.get(itineraryController.findItenerary)

// RUTA PARA CARGAR/OBRENER USUARIO
 router.route('/user/register')
.get(userController.obtenerUser)
.post(validatorController.validarCuenta,userController.cargarUser)

//RUTA
router.route('/user/signin')
.post(userController.signIn)




router.route('/user/lstorage')
.post(passport.authenticate('jwt', {session: false}),userController.logFromLS)



module.exports = router