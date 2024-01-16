import axios from "axios"


const URL_API_CARRITO = "http://localhost:3002/api/carrito/"

export async function enviarCarrito(carrito) {
    try {
        const { data:carritoGuardado } = await axios.post(URL_API_CARRITO, {pedido: carrito})
        return carritoGuardado
    }
    catch(error) {
        console.error('Error Axios:', error.message)
        return {}
    }
}


