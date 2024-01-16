import { useState } from "react"
import Alta from "./Alta.js"
import { guardarProducto } from "../Servicios/productos.js"

export default function AltaIndex(){
    const [productos, setProductos] = useState([]) 
    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        stock: '',
        marca: '',
        categoria: '',
        descripcion: '',
        envio: '',
        foto:''
    })

    function onChange(e) {
        const { type, id, value, checked } = e.target
        setProducto({ ...producto, [id]: type === 'checkbox' ? checked : value })
    }

    function borrarFormulario() {
        setProducto({
            nombre: '',
            precio: '',
            stock: '',
            marca: '',
            categoria: '',
            descripcion: '',
            envio: '',
            foto:''
            
        })
    }

    async function onSubmit(e) {
        e.preventDefault()

        const productosClon = [...productos]

        const productoGuardado = await guardarProducto(producto)

        productosClon.push(productoGuardado)
            
        setProductos(productosClon)

        borrarFormulario()
    }

return (
    <div className="Alta">
            <Alta
                producto={producto}
                onSubmit={onSubmit}
                onChange={onChange}
            />
        </div>
)}
