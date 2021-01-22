const City = require('../models/City')

const cityController = {
addCity: (req,res) => {
//   const{cityName ,cityPic}=req.body    
    const ciudadGrabar = new City({
        cityName: req.body.cityName,
        cityPic: req.body.cityPic
    })
    ciudadGrabar.save()
    .then(ciudadGrabada => {
        return res.json({success: true, respuesta: ciudadGrabada})
    })
    .catch(error => {
        return res.json({success: false, error: error})
    })
},

allCities: async (req,res) => {
const data = await City.find()


        res.json({
            respuesta: data 
        })
    
    },

oneCity :(req, res) => {
        const id = req.params.id
           data.map(city => {
               if (city._id === id) { 
                   res.json({
                       respuesta : city
                   })   
               }
           })
        }

}

module.exports = cityController

