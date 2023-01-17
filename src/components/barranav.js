import React from "react";
import MenuBarra from "./menu-barra";
import MenuBarraRight from "./menu-barra-right";

const barra = () =>{

    return(
            <div className="row">
                <div className="col-8">
                    <MenuBarra/>
                </div>
                <div className="col-4">
                    <MenuBarraRight/>                   
                </div>
            </div>
    )
}

export default barra