import React,{useState,useEffect} from "react";
import TableTr from "./TableTr";
import CountingRows from "./countRows/CountingRows"
import Pagination from "react-js-pagination";
import PaginatorTr from "./paginator";
import Seacrh from "./seacrh/search"
import UploadDiv from "./uploadDiv";
    
require("bootstrap-less/bootstrap/bootstrap.less");






const Position = ()=>{
    const products = [
        {trade_id: "1", client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
        {trade_id: 1, client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
    ];
    // const [data,setData] = useState(products)
    // const [row,setRows] = useState()
    // const [pageIsLoad,setPageIsLoad]= useState(0)   
    const [currentPageNumber,setCurrentPageNumber] = useState(1);
    const [{limitCountPage,pages,setPages,trades,pageIsLoad,setPageIsLoad,setTrades,countPage,setCountPage,countRow,setCountRow},CountingRowsByData] = CountingRows("url"); 
    // const [countRow,setCountRow]=useState(2)
    // const limitCountPage =20;
    let CP;

    const [searchValue,setSearchValue] = useState()



    const currentPage =(pg)=>{
        setCurrentPageNumber(pg)    
     
    }

    
    const onSearchValue = () =>{
        if(!searchValue){
            return trades
        } 

        
        let dd = trades.filter(
             
            // el.quantity.toString().includes(searchValue)
            el=>{
                return el.client.includes(searchValue) 
                ||  el.instrument.includes(searchValue)
                ||  el.quantity.toString().includes(searchValue)
            }

        )
        return dd
    }

    const filterData = onSearchValue()
    const lastBlockRow = limitCountPage * currentPageNumber;
    // console.log("lastBlockRow",lastBlockRow)
    const firstBlockRow = lastBlockRow-limitCountPage+1; 
    const currentBlockRows = filterData.length<=9?filterData:filterData.slice(firstBlockRow,lastBlockRow)

    // console.log(currentBlockRows)

   
    return (
    
    <div>
      {
          pageIsLoad?
          <div className="table-div">
            <Seacrh searchValue={searchValue} setSearchValue={setSearchValue} onSearchValue={onSearchValue}/>

            <TableTr data={currentBlockRows} direction="true"/>
           
            <PaginatorTr pages={pages} currentPage={currentPage} currentPageNumber={currentPageNumber} direction="true"/>
          </div>

          : <div className="row" id="">    
          <div className="container">
              <div style={{textAlign:"center"}}>
                  <h1 style={{color:"black"}}>You need to uploud file</h1>
              </div> 

                  <UploadDiv/>
          </div>
      </div>
      }

    </div>
      
    )
}

export default Position