import React, { useEffect, useState } from "react";
import Barra from "../components/barranav"
import Jumbotron from "../components/jumbotron";
import MenuMasPopular from "../components/menu-mas-popular";
import Card from "../components/card-peliculas";
import axios from 'axios';


/**creamos un contexto y lo exportamos para poder ser usado en cualquier lado de la app */
export const mobieContext = React.createContext();

 const App = (props)=>{

    const [arregloMobie, setArregloMobie] = useState([])

    /**useEffect se dispara cada vez que se renderiza el objeto, si el segundo argumento es un array vacio
     * solo se ejecuta una vez
     */
    useEffect(()=>{
        async function cargarPeliculas(){
            try{
            
                const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a9c430f2b7790ae359c7c5e016f0223&Languaje=es-MX');
                    if(response.status===200){
        
                        console.log(response)
        
                        setArregloMobie(response.data.results) ;
                        
                    }else{
                        console.log("algo salio mal...");
                    }
       
            }catch(error){
       
                 console.log(error)
       
             }

        }
        cargarPeliculas();
        
    },[])

    return(
        <mobieContext.Provider value={arregloMobie}>
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
                    <Card />
                </div>
            </div>
        </mobieContext.Provider>
    )
}

export default App