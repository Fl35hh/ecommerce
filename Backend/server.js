import express from 'express'
import config from './config.js'

import CnxMongoDB from './model/DBMongo.js'

import RouterProductos from './router/productos.js'
import RouterCarrito from './router/carrito.js'

import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.static('public'))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

///////////////////  RUTAS
app.use('/api/productos', new RouterProductos().start())
app.use('/api/carrito', new RouterCarrito().start())
///////////////////
if(config.MODO_PERSISTENCIA == 'MONGODB') {
    await CnxMongoDB.conectar()
}

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor de ECommerce escuchando en http://localhost:${PORT}`))
server.on('error', error => console.log(`Error en servidor: ${error.message}`))
