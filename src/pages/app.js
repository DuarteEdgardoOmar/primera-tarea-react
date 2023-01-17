import React from "react";
import Barra from "../components/barranav"
import Jumbotron from "../components/jumbotron";
import MenuMasPopular from "../components/menu-mas-popular";
import Card from "../components/card-peliculas";
// import axios from 'axios';


/**llamada a la api de the movie data base para pedir las pelis mas populares */

// var arregloPeliculas = [];

// const cargarPeliculas = async ()=>{

//     try{

//         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a9c430f2b7790ae359c7c5e016f0223&Languaje=es-MX');

//         if(response.status===200){

//             console.log(response)
    
//             arregloPeliculas = response.data.results;
        
//         }else{

//             console.log("algo salio mal...")
//         }

//     }catch(error){

//         console.log(error)

//     }

// }

// cargarPeliculas();

const App = ()=>{

    return(
        <div className="container-fluid d-flex-column">
            <div className="row bg-dark">
                <Barra/>
            </div>
            <div className="row">
                <div className="container">
                    <Jumbotron/>
                </div>
            </div>
            <div className="row">
                <MenuMasPopular/>
            </div>

            <div className="row d-flex d-wrap">
                <Card/>
            </div>
        </div>
 
    )
}

export default App