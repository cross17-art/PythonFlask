import { useState,useEffect } from "react";


const CountTrades = (url)=>{
    const products = [
        {trade_id: "1", client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
        {trade_id: 1, client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
    ];
    const [trades,setTrades] = useState(products)
    const [pageIsLoad,setPageIsLoad]= useState(0)   
 
 
    useEffect(()=>{
        fetch("/selectTr",{
            method:"GET",
            
        }).then(
            res=>res.json()
        ).then(data=>{
            
            
            // setRows(d)
            // console.log(d)
            setTrades(data.end)
            setPageIsLoad(true)
            // console.log("countRow=>"+countRow)
        })
    },[])

    
    
    return [{trades,pageIsLoad}]

   
}
    

export default CountTrades