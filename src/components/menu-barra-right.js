import React from "react";


const MenuBarraRight = () =>{

    const handleClick = (e) =>{
        e.preventDefault();
    }

    return(
        <nav className="navbar navbar-expand-sm navbar-dark text-white">
            <div className="container text-white d-flex justify-content-center">
                <ul className="navbar-nav ">
                    <li className="navbar-item mx-3">
                        <a className="nav-link" href="http://localhost:3000" onClick={handleClick}><i className="fa-solid fa-plus"></i></a>
                    </li>
                    <li className="navbar-itemmx-3">
                        <a className="nav-link" href="http://localhost:3000" onClick={handleClick}>
                            <button type="button" className="btn btn-outline-primary" onClick={handleClick}>ES</button>
                        </a>
                    </li>
                    <li className="navbar-item mx-3">
                        <a className="nav-link" href="http://localhost:3000" onClick={handleClick}>Acceder</a>
                    </li>
                    <li className="navbar-item mx-3">
                        <a className="nav-link" href="http://localhost:3000" onClick={handleClick}>Unete a TMDB</a>
                    </li>
                    <li className="navbar-item mx-3">
                        <a className="nav-link" href="http://localhost:3000" onClick={handleClick}><i className="fa-solid fa-magnifying-glass"></i></a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default MenuBarraRight