const golosinas= require("../../data/productos.json")
const controllers= {}

const getAllProducts = (_, res) => {
    res.status(200).send(golosinas)
}
controllers.getAllProducts= getAllProducts

const getProductById = (req, res) => {
    const id= req.params.id
    const producto= golosinas.filter( golosina => golosina.id == id)
    if (producto.length > 0) {
      return res.status(200).send(producto)
    } else {
        return res.status(404).send({ message: `El producto con ID ${id} no fue encontrado.`})
    } 
} 
controllers.getProductById= getProductById

const createProduct= (req, res) => {
    const { nombre, precio, peso } = req.body
    const ids= golosinas.map( golosina => golosina.id)
    const id= golosinas.length < 0 ? 1 : Math.max(...ids) + 1 
    const newProduct = {
        //id:id --> el nombre de la propiedad y de la variable coninciden, entonces:
        id,
        nombre,
        precio
    }
    golosinas.push(newProduct)
    res.status(201).json(newProduct)
} 
controllers.createProduct = createProduct

module.exports= controllers

