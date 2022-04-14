import React from "react"



const TableTr = ({data})=>{

    return(
        <>
          <table >
                <thead>
                <tr>
                <th value="" direction="true"> Trade_id</th>
                <th value="" direction="true">Client</th>
                <th value="" direction="true">Instrument</th>
                <th value="" direction="true">Quantity</th>
                <th value="" direction="true">Direction</th>
            </tr>
                </thead>
                <br></br>
                <tbody>
                {data.map(home => <tr>
            <th value="" direction="true" >{home.trade_id}</th>
            <th value="" direction="true" >{home.client}</th>
            <th value="" direction="true">{home.instrument}</th>
            <th value="" direction="true">{home.quantity}</th>
            <th value="" direction="true">{home.direction}</th>
         </tr>)}
                </tbody>
            </table>
        </>
    )
}


export default TableTr