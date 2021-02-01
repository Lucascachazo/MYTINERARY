const express = require('express')
const router = express.Router()
const cityController = require ('../controllers/cityController')
const itineraryController = require('../controllers/itinerariesController')
// RUTA PARA CIUDADES

router.route('/cities')
.get(cityController.allCities)
.post(cityController.addCity)

router.route('/cities/:id')
.get(cityController.oneCity)


// RUTA PARA ITINERARIOS
 router.route('/itineraries')
.get(itineraryController.alItineraries)
.post(itineraryController.agregarItineraries)


router.route('/itineraries/:id')
.get(itineraryController.findItenerary)


module.exports = router