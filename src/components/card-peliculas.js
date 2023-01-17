import React from "react";
import "../styles/estilo-card.css"
import axios from 'axios';


var arregloPeliculas = [];

const cargarPeliculas = async ()=>{

    try{

        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a9c430f2b7790ae359c7c5e016f0223&Languaje=es-MX');

        if(response.status===200){

            console.log(response)
    
            arregloPeliculas = response.data.results;
        
        }else{

            console.log("algo salio mal...")
        }

    }catch(error){

        console.log(error)

    }

}

cargarPeliculas();






const Card = ()=>{

    /**manejador de evento click en link */
    const handleClick=(e)=>{
        e.preventDefault();
    }

    return(

        arregloPeliculas.map((pelicula)=>{

            
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