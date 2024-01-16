import { useEffect } from 'react'

import "./Carrito.css"

import { Carrito } from './Carrito.js'
import { useLocalStorage } from '../Hooks/useLocalStorage.js'
import { enviarCarrito } from '../Servicios/carrito'

export default function Index(props) {
    const [carrito, setCarrito] = useLocalStorage('carrito', [])

    useEffect(() => {
        console.log('Componente Index Carrito (montado)')

        return () => {
            console.log('Componente Index Carrito (desmontado)')
        }
    }, [])

    
    function borrarAll() {
        setCarrito([])
    }

    function borrarID(id) {
        const carritoClon = [...carrito]
        const index = carritoClon.findIndex(p => p.id === id)
        carritoClon.splice(index,1)
        setCarrito(carritoClon)
    }
    
    function incrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad < producto.stock) {
            producto.cantidad++
            setCarrito(carritoClon)
        }
    }
    
    function decrementarCantID(id) {
        const carritoClon = [...carrito]
        const producto = carritoClon.find(p => p.id === id)
        if(producto.cantidad > 1) {
            producto.cantidad--
            setCarrito(carritoClon)
        }
    }

    async function pedir() {
        console.log('pedir')

        const carritoEnviado = await enviarCarrito(carrito)
        console.log(carritoEnviado)
        setCarrito([])
    }

    return (
        <div className="main-carrito">
            <div>
                <div>
                    <h1 className="carrito-h1">Carrito</h1>

                    {carrito.length === 0 && <p className="no-pedidos">No se encontraron pedidos</p>}
                    {carrito.length > 0 &&
                        <>
                            <button className="borrar" onClick={borrarAll}>Borrar</button>
                            <Carrito 
                                carrito={carrito} 
                                borrarID={borrarID}
                                incrementarCantID={incrementarCantID}
                                decrementarCantID={decrementarCantID}
                            />
                            <button className="pedir" onClick={pedir}>Pedir</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}