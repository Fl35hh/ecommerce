import "./Alta.css"


export default function Alta(props){
    const { nombre, precio, stock, marca, categoria, descripcion, foto, envio } = props.producto
    const {onChange, onSubmit} = props

    return(
        <main>
        <h1 className="alta">Alta de Productos</h1>
        <div id="inputs">
            <form onSubmit={onSubmit}>
            <label for="nombre">Nombre del producto</label>
            <input type="text" id="nombre" value={nombre} onChange={onChange} required placeholder="Campo requerido"/>

            <label for="precio">Precio</label>
            <input type="number" id="precio" value={precio} onChange={onChange} required placeholder="Campo requerido"/> 

            <label for="stock">Stock</label>
            <input type="number" id="stock" value={stock} onChange={onChange} required placeholder="Campo requerido"/>

            <label for="marca">Marca</label>
            <input type="text" id="marca" value={marca} onChange={onChange} required placeholder="Campo requerido"/>

            <label for="categoria">Categoria</label>
            <input type="text" id="categoria" value={categoria} onChange={onChange} required placeholder="Campo requerido"/>

            <label for="descripcion">Descripcion</label>
            <input type="text" id="descripcion" value={descripcion} onChange={onChange} required placeholder="Campo requerido"/>

            <label for="envio">Envío sin Cargo</label>
            <input type="checkbox" checked={envio} onChange={onChange} id="envio"/>

            <label for="foto">Foto (URL)</label>
            <input type="text" id="foto" value={foto} onChange={onChange}required placeholder="Campo requerido"/>

            <input type="submit" id="enviar"/>
        </form>
        </div>
    </main>
    )
}

