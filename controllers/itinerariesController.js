const Itinerary = require('../models/Itinerary')

const itineraryController = {

    alItineraries : (req, res) => {
        Itinerary.find()
        .then(data => {
            return res.json({success: true, respuesta: data})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    } ,

    agregarItineraries: (req, res) => {

        const itineraryAGrabar = new Itinerary({
           title : req.body.title,
           userPic: req.body.userPic,
           userName : req.body.userName,
           likes : req.body.likes,
           hours : req.body.hours ,
           price: req.body.price ,
           hashtag :req.body.hashtag,
           activities : req.body.activities ,
           comments : req.body.comments ,
           cityId : req.body.cityId

        })
    
        itineraryAGrabar.save()
        .then(itineraryAGrabar => {
            return res.json({success: true, respuesta: itineraryAGrabar})
        })
        .catch(error => {
            return res.json({success: false, error: error})
        })
    },

    findItenerary : async (req , res) =>{
        console.log("aca estoy")

        try {const {id} = req.params ;
        Itinerary.find({cityId:id})
        .then ((city)=> res.json ({ success:true , respuesta: city}))
    }
        catch(error){
            console.log(error)    
        }   
    } 
}
module.exports = itineraryController



// .populate('cityId')


  