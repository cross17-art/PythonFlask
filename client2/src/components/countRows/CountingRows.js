import { useState,useEffect } from "react";


const CountingRows = (url)=>{
    const products = [
        {trade_id: "1", client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
        {trade_id: 1, client: 'Shoes',instrument: 'Running Shoes.',quantity:"asdasd",direction:"asdasd" },
    ];
    const [trades,setTrades] = useState(products)
    const [pageIsLoad,setPageIsLoad]= useState(0)   
    const [countPage,setCountPage]=useState(1)
    const [countRow,setCountRow]=useState(0)
    const limitCountPage =10;
    const [pages,setPages] = useState([1,2])
    
    const getData=()=>{
       
    }
    useEffect(()=>{
        fetch("/selectTr",{
            method:"GET",
            
        }).then(
            res=>res.json()
        ).then(data=>{
            
            
            let d = CountingRowsByData(data)
            // setRows(d)
            // console.log(d)
            setTrades(d)
            setCountRow(d.length)
            let pages =  d.length / limitCountPage
            setCountPage(pages)
            setPageIsLoad(true)
            let p=[]
            for(let i=1;i<=pages;i++){
                p.push(i)
            }
            setPages(p)
            // console.log("countRow=>"+countRow)
        })
    },[])

    
    function CountingRowsByData(data){
        data.end.sort(function(a,b){
            return a.instrument.localeCompare(b.instrument)
        })
        data.end.sort(function(a,b){
            return a.client.localeCompare(b.client)
        })
        let rows = [];
            // Check first direction
        if (data.end[0].direction==="B"){
            rows.push(data.end[0])
        }
        else{
            data.end[0].quantity=0-parseInt(data.end[0].quantity)
            rows.push(data.end[0])
        }
        
        data.end.shift()
        let j = 0;
        
            // Count quantity 
        data.end.forEach((element,index)=>{
            if(rows[j].client === element.client && rows[j].instrument === element.instrument){
                if (element.direction==="B"){
                    rows[j].quantity+=parseInt(element.quantity)
                }
                else{
                    rows[j].quantity-=parseInt(element.quantity)
                }
            }else{
                if (element.direction==="B"){
                    rows.push(element)
                }
                else{
                    element.quantity=0-parseInt(element.quantity)
                    rows.push(element)
                }
                j++;
    
            }
        })
        console.log("rows",rows)
        return rows   
    }
    
   
    
    return [{limitCountPage,pages,setPages,trades,setTrades,pageIsLoad,setPageIsLoad,countPage,setCountPage,countRow,setCountRow},getData,CountingRowsByData]

   
}
    

export default CountingRows