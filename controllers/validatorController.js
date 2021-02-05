const Joi = require ('joi')

const validatorController = {

    validarCuenta :( req , res , next) =>{
        const Schema = Joi.object({
            username: Joi.string().trim().required(),
            urlPic: Joi.string().trim(),
            password:Joi.string().trim().required().min(6),
            name: Joi.string().trim().required().min(2).max(15),
            lastName:Joi.string().trim().required().min(2).max(15),
            rol:Joi.string().trim(),
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