import React from "react"
import {Routes,Route,NavLink, Outlet} from "react-router-dom";
import Trader from "./trader";
import Position from "./position";

const Hat = ()=>{
    
    return(
        <>
         <div className="row hat">
         <div className="into_row">
              <NavLink to="/">Home</NavLink>
            </div>
            <div className="separator"></div>
            <div className="into_row">
              <NavLink to="/Position">Position</NavLink>
            </div>
            <div className="separator"></div>
            <div className="into_row">
                <NavLink to="/Traders">Traders</NavLink>
            </div>
            
        </div>    
        <Outlet/> 

        </>
        

    )


}

export default Hat