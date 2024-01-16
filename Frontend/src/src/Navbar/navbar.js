import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar(){
    return(
        <header>
            <div id="header">
                <img src={require("../img/Nike-Logo.png")} alt="Nike logo"/>
                <nav>
                    <form action="#">
                        <input type="text"/>
                    </form>
                </nav>
                <h3><NavLink to="/inicio">Inicio</NavLink></h3> <h3><NavLink to="/alta">Alta</NavLink></h3> <h3><NavLink to="/carrito">Carrito</NavLink></h3> <h3><NavLink to="/contacto">Contacto</NavLink></h3> <h3><NavLink to="/nosotros">Nosotros</NavLink></h3>
            </div>
        </header>
    )
}
export default Navbar