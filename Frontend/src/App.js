import './App.css';
import Navbar from './src/Navbar/navbar.js';
import Inicio from "./src/Inicio/Inicio.js";
import Alta from './src/Alta/Index.js';
import Carrito from './src/Carrito/Index.js';
import Contacto from './src/Contacto/Contacto.js';
import Nosotros from './src/Nosotros/Nosotros.js';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RutaNoValida } from './src/Navbar/RutaNoValida.js';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>

          <Routes>
          <Route index element={<Inicio/>}/>

          <Route path="inicio" element={<Inicio/>}/>
          <Route path="alta" element={<Alta/>}/>
          <Route path="carrito" element={<Carrito/>}/>
          <Route path="contacto" element={<Contacto/>}/>
          <Route path="nosotros" element={<Nosotros/>}/>

          <Route path='*' element={<RutaNoValida/>}/>
          </Routes>
      </BrowserRouter>
      <footer>
        &copy;Copyright 2023
      </footer>
    </div>
  );
}

export default App;
