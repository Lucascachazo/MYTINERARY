const User = require('../models/User')
const bcryptjs = require('bcryptjs')


const userController = {
 

  cargarUser : async (req, res) => {
    const errores = []
    
    const {username,urlPic,password,name,lastName,rol} = req.body
      const userExist = await User.findOne({
          username : username})

          if(userExist ){
              errores.push("el usuario ya existe")

          }
          if(errores.length === 0){
           const hashPass = bcryptjs.hashSync(password,10)
           var newUser  = new User ({
            username,urlPic,password:hashPass,name,lastName,rol
           }) 
           var usuarioAGrabar = await newUser.save()
           
          }
          return res.json ({success: errores.length === 0 ? true : false , errores: errores , response: usuarioAGrabar})


   
  },   

  obtenerUser : async (req, res) => {
    console.log("estoy aca")
      
      try {
          const data = await User.find()
          res.json({
              success: true,
              response:data})
      }
       catch { 
           res.json({
               success: false,
               response:"Error al obtener el usuario"})
       }
},

    

} 

module.exports = userController

// »»» Nombre  xx
// »»» Apellido
// »»» Username (puede coincidir con el email)x
// »»» Email (puede coincidir con el username)
// »»» Passwordx
// »»» URLPicx