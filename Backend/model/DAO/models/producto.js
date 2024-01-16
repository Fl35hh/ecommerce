import mongoose from 'mongoose'

const productoSchema = mongoose.Schema({
    nombre: String,
    precio: Number,
    stock: Number,
    marca: String,
    categoria: String,
    descripcion: String,
    envio: Boolean,
    foto: String
},{versionKey: false})

export const ProductoModel = mongoose.model('productos', productoSchema)