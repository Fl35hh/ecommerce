import "./Inicio.css"
import { useEffect, useState } from "react"
import { pedirProductos } from "../Servicios/productos.js"
import { useLocalStorage } from "../Hooks/useLocalStorage.js"
import { Card } from "./Cards.js"

export function Inicio(props){
        const [productos, setProductos] = useState([])
        const [carrito, setCarrito] = useLocalStorage('carrito', [])
        useEffect(() => {
            console.log('Componente Index Inicio (montado)')

            async function pedir() {
                const productos = await pedirProductos()
                console.log(await productos)
                setProductos(productos)
            }
            pedir()
    
            return () => {
                console.log('Componente Index Inicio (desmontado)')
            }
        }, [])


        function agregarCarritoID(id) {
            console.log('agregarCarritoID', id)
    
            const producto = productos.find(p => p.id === id)
            console.log(producto)
    
            const carritoClon = [...carrito]
    
            let pC = carritoClon.find(prodC => prodC.id === producto.id)
            if(!pC) {
                producto.cantidad = 1
                carritoClon.push(producto)
            }
            else {
                pC.cantidad++
            }
            setCarrito(carritoClon)
        }
        

        return (
            <main>
            <h1 className="productos">Productos</h1>
            
            <div className="contenedor-main">
                    { productos.map( (producto, index) => 
                        <Card key={index} producto={producto} agregarCarritoID={agregarCarritoID}/>
                                )
                            }
            </div>
        </main>
)
}
export default Inicio

