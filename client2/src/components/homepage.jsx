import React,{useState} from "react";
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/fontawesome-free-solid'
import UploadDiv from "./uploadDiv";

const HomePage = ()=>{

    // const [csvfile,setSCV] = useState();
    // const [textFile,setTextFile] =useState("Click by me");
    // const [ValidFile,setValidFile] =useState(0);

    // function ver (e){
    //     if(e.target.files[0].type==="application/vnd.ms-excel"){
    //         console.log("Its scv file")
    //         setSCV(e.target.files[0])
    //         setTextFile("Successfully uploaded file")
    //         setValidFile(1)

    //     }else{
    //         console.log("Its not scv file")
    //         setTextFile("The file type does not correspond to reality")
    //         setValidFile(0)
    //     } 
    // }

   
    // (e)=>{setSCV(e.target.files[0])}
    return (
        <div className="row" id="">    
            <div className="container">
                <div style={{textAlign:"center"}}>
                    <h1 style={{color:"black"}}>You need to uploud file</h1>
                </div> 

                    <UploadDiv/>
            </div>
        </div>
    )

}

export default HomePage