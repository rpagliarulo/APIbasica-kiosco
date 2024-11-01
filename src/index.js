const express= require("express")
const app= express()
const PORT= 3003

const routes= require("./routes/index.route")

app.use(express.json())
//se puede agregar prefijo 
//app.use("/tienda", route)
app.use(routes.productosRoute)

app.listen(PORT, ()=> {
    console.log(`La aplicación está corriendo en el puerto ${PORT} `)
})