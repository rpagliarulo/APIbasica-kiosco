//const express = require("exoress") //const route= express.router()
const { Router } = require("express")
const route= Router()

const productosController= require("../controllers/productos.controller")
const productosMiddleware= require("../middlewares/index.middleware")

route.get("/productos", productosController.getAllProducts)

route.get("/productos/:id", productosController.getProductById)

route.post("/productos", productosMiddleware.middlewareProductos,  productosController.createProduct)

module.exports= route