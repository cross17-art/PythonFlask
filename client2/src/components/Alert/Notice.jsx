
import React from "react"


const Notice = ({text})=>{
    const DIV_STYLE={
        width: "200px",
        margin: "auto",
        marginBottom: "11px"
      }
    
    return(
        <>
        <div id = "notice-div" className="alert alert-success" style={DIV_STYLE} role="alert">
            File upload success
        </div>
        </>
    )
}

export default Notice