import React from "react";  
import Logo from "../image/tmdb-icono.jpg"
import "../styles/menu-barra.css"

const MenuBarra = () =>{

    const handleClick = (e)=>{
        e.preventDefault();
    }

    return(
            <nav className="navbar navbar-expand-sm navbar-dark text-white">
                <div className="container">
                    {/* ahora ponemos el brand con el logo y el texto que querramos */}
                    <a href="http://localhost:3000" className="navbar-brand" onClick={handleClick}>
                        <img src={Logo} alt="logo" loading="lazy" className="rounded-pill estilo-menu-barra"></img>
                    </a>
                    {/* boton collapse --> btn sandwich para cuando colapsa la pantalla al tamaño lg declarado en nav */}
                    <button 
                        className="navbar-toggler"
                        data-toggle="collapse"
                        data-target="#contenido-nav"
                        aria-controls="contenido-nav"
                        aria-expanded="false"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* dentro de un div class=collapse navbar-collapse van los ul + li + a 
                    el id debe ser igual al data-target del button*/}
                    <div className="container collapse navbar-collapse" id="contenido-nav">
                        <ul className="navbar-nav">

                            {/* Peliculas */}
                            <li className="nav-item dropdown mx-3">
                                <a href="http://localhost:3000" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Peliculas</a>

                                {/* sub-menu Peliculas */}
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Popular</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>En cartelera hoy</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Proximamente</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Mejor valoradas</a></li>
                                </ul>
                            </li>

                            {/* Programas de television */}
                            <li className="nav-item dropdown mx-3">
                                <a href="http://localhost:3000" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Programas de television</a>

                                {/* sub-menu Programas de television */}
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Popular</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Se emiten hoy</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>En television</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Mejor valorados</a></li>
                                </ul>
                            </li>

                            {/* Personas */}
                            <li className="nav-item dropdown mx-3">
                                <a href="http://localhost:3000" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Personas</a>

                                {/* sub-menu Personas */}
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="http://localhost:3000" onClick={handleClick}>Personas populares</a></li>
                                </ul>
                            </li>

                            {/* Mas */}
                            <li className="nav-item dropdown">
                                <a href="http://localhost:3000" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">Mas</a>

                                {/* sub-menu Mas */}
                                <ul className="dropdown-menu">
                                    <li> <a className="dropdown-item" href="http://localhost:3000"onClick={handleClick}>Discuciones</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000"onClick={handleClick}>Tabla de calificacion</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000"onClick={handleClick}>Soporte</a></li>
                                    <li> <a className="dropdown-item" href="http://localhost:3000"onClick={handleClick}>API</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default MenuBarra