import React, { useContext } from "react";
import "../styles/estilo-card.css"
import { mobieContext } from "../pages/app";

const Card = ()=>{

    const arreglo1 = useContext(mobieContext);//recupero contexto creado
   
    /**manejador de evento click en link */
    const handleClick=(e)=>{
        e.preventDefault();
    }

    return(

        arreglo1.map((pelicula)=>{
            
            var path = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`

            return(
                
                <div className="card estilo-card rounded shadow">

                <img className="card-image-top rounded" src={path} alt="poster-pelicula"></img>

                <div className="card-body">
                    <a href="http://localhost:3000" className="card-link text-left" onClick={handleClick}>{pelicula.title}</a>
                    <p className="card-text text-secondary pt-3 text-left">{pelicula.release_date}</p>
                </div>

            </div>
            )
        })

    )
}

export default Card