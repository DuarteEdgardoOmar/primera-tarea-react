import React from "react";
import "../styles/menu-popular.css"

const MenuMasPopular = () =>{

    const handleClick =(e) => {
        e.preventDefault();
    }

    return(
        <div className="container-fluid mt-1 d-flex">

            <div className="container col-2">
                <h4 className="h3 pt-2 ms-4">Lo mas popular</h4>
            </div>

            <div className="container col-10">
                <nav className="navbar navbar-expand-md bg-ligth ">

                    <div className="container col-6 mimenu ">
                    
                        {/* lista del menu */}
                        <ul className="navbar-nav border border-dark rounded-pill w-100">
                            <li className="nav-item col">
                                <a className="nav-link text-center" href="http://localhost:3000" onClick={handleClick}>En streaming</a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link text-center" href="http://localhost:3000" onClick={handleClick}>En television</a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link text-center" href="http://localhost:3000" onClick={handleClick}>En alquiler</a>
                            </li>
                            <li className="nav-item col">
                                <a className="nav-link text-center" href="http://localhost:3000" onClick={handleClick}>En cines</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>    
        </div>
    )
}

export default MenuMasPopular