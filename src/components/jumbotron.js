import React from "react";
import "../styles/jumbotron.css"

const Jumbotron = () =>{

    const handleClick = (e) =>{
        e.preventDefault()
    }

    return(
        <div className="container-fluid estilo-imagen-fondo estilo-contenedor p-5">
            <h1 className="h1 text-white">Bienvenidos.</h1>
            <h3 className="h3 text-white">
                Millones de peliculas, programas de television y personas por descubrir. Explora ahora.    
            </h3>
            <form action="http://localhost:3000">
            <div className="input-group mt-3">
                <input type="text" className="form-control rounded-pill" placeholder="Buscar una pelicula, programa de television, persona..."></input>
                <button className="btn btn-primary rounded-pill" onClick={handleClick}>Serch</button>
            </div>
            </form>
        </div>
    )
}

export default Jumbotron