import React, {useState,useEffect} from "react";
import Hat from "./components/hat";
import Trader from "./components/trader";
import Position from "./components/position";
import HomePage from "./components/homepage";
import {Routes,Route,Link} from "react-router-dom";


function App (){

  const [data,setData] = useState([{}])
  let dd = {
    user_name:"Ivan"
  }
     return (
            <>

            <Routes>
               <Route path ="/" element={<Hat/>}> 
                  <Route index element={< HomePage/>}/>
                  <Route path="/Traders" element={<Trader/>}/>
                  <Route path="/Position" element={<Position/>}/>
               </Route>
            </Routes>
            {/* <h1>{JSON.stringify(data["1"])}</h1>
            <h1>{JSON.stringify(data)}</h1> */}

             </>
        )
}

export default App;
