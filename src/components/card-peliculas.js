import React from "react";
import "../styles/estilo-card.css"
// import Imagen from "../image/tmdb-icono.jpg"

const Card = (props)=>{

    /**manejador de evento click en link */
    const handleClick=(e)=>{
        e.preventDefault();
    }

    // const titulo = props.arreglo[3].title

    return(

        props.arreglo.map((pelicula)=>{

            var path = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`

            return(

                <div className="card estilo-card rounded shadow">

                <img className="card-image-top rounded" src={path} alt="poster-pelicula"></img>

                <div className="card-body">
                    <a href="http://localhost:3000" className="card-link" onClick={handleClick}>{pelicula.title}</a>
                    <p className="card-text">texto explicativo</p>
                </div>

            </div>
            )
        })


    )
}

export default Card