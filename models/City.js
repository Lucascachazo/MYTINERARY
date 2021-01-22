const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    cityName: {type: String, required: true},
    cityPic: {type: String, required: true}
})

const City = mongoose.model('city', productSchema)

module.exports = City