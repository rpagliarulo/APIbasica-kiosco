const schema = require("../schemas/index.schema")
 
const validador = (req, res, next) => {
    const result= schema.productosSchema.validate(req.body)
    if(result.error) {
        return res.status(404).json({message: result.error.details[0].message})
    }
    next()
}

module.exports =  validador