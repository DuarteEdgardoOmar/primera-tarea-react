import React from "react";
import "../styles/estilo-card.css"


const Card = (props)=>{


   
    /**manejador de evento click en link */
    const handleClick=(e)=>{
        e.preventDefault();
    }

    return(

        props.arreglo1.map((pelicula)=>{
            
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