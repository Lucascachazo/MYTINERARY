const Joi = require ('joi')
// Controlador para validar los datos del usuario
// validacion que llega antes de que se ejecute el controlador ,si todo esta bien pasa al controlador y graba
const validatorController = {

    validarCuenta :( req , res , next) =>{
        const Schema = Joi.object({
            username: Joi.string().trim().required(),
            urlPic: Joi.string().trim(),
            password:Joi.string().trim().required().min(6),
            name: Joi.string().trim().required().min(2).max(15),
            lastName:Joi.string().trim().required().min(2).max(15),
            email:Joi.string().required().email(),
            rol:Joi.string().trim(),
            country:Joi.string().required().trim()
        })
        const validacion = Schema.validate(req.body ,{abortearly : false})

        if (!validacion.error) {
            next()
        } else {
            res.json({success: false, errores: ['Hubo un error en los datos, verifique.']})
        }
        console.log(validacion)

    }

}


module.exports = validatorController