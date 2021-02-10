const User = require('../models/User')
const bcryptjs = require('bcryptjs')
const jwt = require ('jsonwebtoken')

const userController = {
 
  // Cargar un usuario nuevo
    cargarUser : async (req, res) => {
      const errores = []
      const {username,urlPic,password,name,lastName,rol,country} = req.body
        const userExist = await User.findOne({
            username : username})

            if(userExist){
                errores.push("el usuario ya existe")

            }
            if(errores.length === 0){
            const hashPass = bcryptjs.hashSync(password,10) 
            var newUser  = new User ({
              username,urlPic,password:hashPass,name,lastName,rol,country
            }) 
            var usuarioAGrabar = await newUser.save()
            var token = jwt.sign({...usuarioAGrabar}, process.env.SECRET_KEY, {})

            }

            return res.json ({success: errores.length === 0 ? true : false ,
               errores: errores , 
               response: errores.length === 0 && {token, name: usuarioAGrabar.name}})


    },   
      // Controlador para obtener un usuario

    obtenerUser : async (req, res) => {
      // console.log("estoy aca")
        
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

    signIn: async (req , res) => {


      const {username ,password} = req.body 
      const userExists = await User.findOne({username:username})
      // console.log(userExists)

      if (!userExists){
        return res.json({success: false , mensaje:"contraseña y/o usuario no coincide"})
      }
      const passwordMatches = bcryptjs.compareSync( password , userExists.password)
        if(!passwordMatches){
            return res.json ({success: false , mensaje: "contraseña y/o usuario no coincide"})
        }
        var token =jwt.sign({...userExists},process.env.SECRET_KEY,{})

        return res.json({success: true, response: {token , name: userExists.name , urlPic: userExists.urlPic}})


  

  },
  logFromLS: async (req,res) => {
    res.json({success: true, response: {token: req.body.token, username: req.username }})
}
      

  } 

module.exports = userController



// »»» Nombre  xx
// »»» Apellido
// »»» Username (puede coincidir con el email)x
// »»» Email (puede coincidir con el username)
// »»» Passwordx
// »»» URLPicx