const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username:{type:String, required:true},
    lastName:{type:String, required:true},
    name:{type:String, required: true},
    password:{type:String, required:true},
    urlPic:{type:String, required:true},
    rol:{type:String, default:"userLog"},
    // country:{type:Array, required:true},

})

const User = mongoose.model('user', userSchema)

module.exports = User

// »»» Nombre  xx
// »»» Apellido
// »»» Username (puede coincidir con el email)x
// »»» Email (puede coincidir con el username)
// »»» Passwordx
// »»» URLPicx