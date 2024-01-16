import Joi from 'joi'

const validar = producto => {
    const productoSchema = Joi.object({
        nombre: Joi.string().min(2).max(30).required(),
        precio: Joi.number().required(),
        stock: Joi.number().required(),
        marca: Joi.string().required(),
        categoria: Joi.string().required(),
        descripcion: Joi.string().required(),
        envio: Joi.boolean(),
        foto: Joi.string().required()
    })
    const { error } = productoSchema.validate(producto)
    return error
}

export default validar