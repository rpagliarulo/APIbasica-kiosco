const Joi = require("joi");


const schema = Joi.object({
    nombre: Joi.string().min(3).required(),
    peso: Joi.string().min(1).required(),
    precio: Joi.number().min(2).required()
})

module.exports= schema