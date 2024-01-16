import "./Contacto.css"
function Contacto(){
    return(
        <main>
        <h1 className="contacto">Contacto</h1>
        <div id="inputs">
            <form action="#">
                <label for="nombre">Nombre</label><input type="text" id="nombre"/>
                <label for="email">E-mail</label><input type="email" id="email"/>
                <label for="comentarios">Comentarios</label><textarea id="comentarios"></textarea>
                <input type="submit" id="enviar"/>
            </form>
        </div>
    </main>

    )
}
export default Contacto