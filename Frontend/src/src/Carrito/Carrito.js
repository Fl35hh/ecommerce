import "./Carrito.css"
export function Carrito(props){
    const { carrito, borrarID, incrementarCantID, decrementarCantID } = props

    return (
        <div>

            <div>
                <table className="tabla-carrito">
                    <thead className="tabla-head">
                        <tr>
                            <th className="numero-producto">#</th>

                            <th>Nombre</th>

                            <th>Precio</th>

                            <th>Marca</th>

                            <th>Foto</th>

                            <th>Cantidad</th>

                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody className="tabla-body">
                        {
                            carrito.map((producto, index) =>
                                <tr key={index}>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>${producto.precio}</td>
                                    <td>{producto.marca}</td>
                                    <td><img width="100px" src={producto.foto} alt={"foto de " + producto.nombre} /></td>
                                    <td>
                                        
                                        <button onClick={() => decrementarCantID(producto.id)}>-</button>
                                        <span className="cantidad-producto">{producto.cantidad}</span>
                                        <button onClick={() => incrementarCantID(producto.id)}>+</button>
                                    </td>
                                    <td>
                                        <button className="borrar-producto" onClick={() => borrarID(producto.id)}>Borrar</button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
