const mongoose = require('mongoose')

const itinerarySchema = new mongoose.Schema({
    title: {type: String, required: true},
    userPic: {type: String, required: true},
    userName: {type: String, required: true},
    likes: {type: Number, default: 0},
    hours: {type: Number, required: true},
    price:{type: Number, required: true},
    hashtag:[String],
    activities :[{img:{type: String , required: true}, title:{type: String , required:true}}],
    coments : [{userName:{type: String} ,coment:{type: String} }],
    cityId:{type: mongoose.Schema.ObjectId , ref : 'city'}

})

const Itinerary = mongoose.model('itinerary', itinerarySchema)

module.exports = Itinerary