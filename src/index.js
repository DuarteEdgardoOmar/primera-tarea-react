import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/app';
import axios from 'axios';

 // /**llamada a la api de the movie data base para pedir las pelis mas populares */
 var arregloPeliculas = [];

 const cargarPeliculas = async ()=>{
     try{
         const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=1a9c430f2b7790ae359c7c5e016f0223&Languaje=es-MX');
        if(response.status===200){

             console.log(response)

             arregloPeliculas = response.data.results;

             const root = ReactDOM.createRoot(document.getElementById('root'));

             root.render(<App arreglo={arregloPeliculas}/>,root);

        }else{

            console.log("algo salio mal...");
         }

     }catch(error){

          console.log(error)

      }

  }

  cargarPeliculas();


