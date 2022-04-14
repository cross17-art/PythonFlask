import React,{useState,useEffect} from "react";
import TableTr from "./TableTr";
import Seacrh from "./seacrh/search"
import CountTrades from "./countRows/CountTrades"
import UploadDiv from "./uploadDiv";




const Trader = ()=>{
    const products = [
        {trade_id: "1", client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
        {trade_id: 1, client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
    ];
    // const [data,setData] = useState(products)
    // const [pageIsLoud,setPageIsLoud] = useState(0)
   
    const [{trades,pageIsLoad}] = CountTrades("url"); 

    let rows;

    // useEffect(()=>{
    //     fetch("/selectTr",{
    //         method:"GET",
            
    //     }).then(
    //         res=>res.json()
    //     ).then(data=>{
    //         console.log(data)
           
    //         if(data.end==="2412"){
    //             setPageIsLoud(false)
    //         }else{
    //             setData(data.end)
    //             setPageIsLoud(true)

    //         }

    //     })
    // },[])
    const [searchValue,setSearchValue] = useState()

    const onSearchValue = () =>{
        if(!searchValue){
            return trades
        } 

        if(searchValue.length==1){
            let dd = trades.filter(
             
                // el.quantity.toString().includes(searchValue)
                el=>{
                    return el.direction.includes(searchValue)
                }
    
            )
            return dd
        }else{

            
            let dd = trades.filter(
             
                // el.quantity.toString().includes(searchValue)
                el=>{
                    return el.client.includes(searchValue) 
                    ||  el.instrument.includes(searchValue)
                    ||  el.direction.includes(searchValue)
                    ||  el.quantity.toString().includes(searchValue)
                }
    
            )
            return dd
        }
       
    }
    
    let filterData = onSearchValue()
    return (
        <div>
        <>
        {
            pageIsLoad?
                <div className="table-div">
     
                    <Seacrh searchValue={searchValue} setSearchValue={setSearchValue} onSearchValue={onSearchValue}/>
                    <TableTr data={filterData}/>
                
      
                </div>
            :<div className="row" id="">    
            <div className="container">
                <div style={{textAlign:"center"}}>
                    <h1 style={{color:"black"}}>You need to uploud file</h1>
                </div> 
  
                    <UploadDiv/>
            </div>
        </div>
        }  
          </>
        </div>
        // <Table data={data}/>
   )
}

export default Trader