
import React, { useState,useEffect } from "react";

const Seacrh =({searchValue,setSearchValue})=>{


    // useEffect(()=>{
    //     console.log("searchValue",searchValue)
    // },[searchValue])
    return(
        <>
         <div className="input-group mb-3">
            <input 
            type="text" 
            className="form-control" 
            placeholder="Recipient's username" 
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2"
            value={searchValue}
            onChange={(event)=>{setSearchValue(event.target.value)}}
            />
        </div>
        </>
    )
}

export default Seacrh