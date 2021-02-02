const City = require('../models/City')

const cityController = {
addCity: (req,res) => {

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
    // console.log(req.body)
    const data = await City.find()
    res.json({ respuesta: data })
    
},
    oneCity :  async (req, res) => {

     const id = req.params.id
     try{
        const data = await City.findById(id)
        res.json({
            success :true ,
            respuesta : data
        }) 
     }
    catch (error) {
        res.json({
            success :false ,
            respuesta: "No se puede concretar el pedido "+ error
        })
    } 
}
}
module.exports = cityController

