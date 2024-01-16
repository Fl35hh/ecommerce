
export const Card = props =>{
    const {producto, agregarCarritoID} = props
    
    return (
            <div className="card">
                <img src={producto.foto} alt="imagen"/>
                <h2>{producto.nombre}</h2>
                <h3>${producto.precio}</h3> <button onClick={() => agregarCarritoID(producto.id)}>Agregar al carrito</button>
                <p>{producto.descripcion}</p>
                    
            </div>
    )
}
