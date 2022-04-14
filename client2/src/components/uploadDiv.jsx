import React,{useState} from "react";
import fontawesome from '@fortawesome/fontawesome'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt} from '@fortawesome/fontawesome-free-solid'
import { Button } from 'react-bootstrap';
import axios from 'axios'
import Notice from "./Alert/Notice";

const UploadDiv =()=>{
    const [csvfile,setSCV] = useState();
    const [textFile,setTextFile] =useState("Click by me");
    const [ValidFile,setValidFile] =useState(0);
    const [success,setSuccess] = useState(0);
    const [textAlert,setTextAlert] = useState("File upload success");

    function ver (e){
        if(e.target.files[0].type==="application/vnd.ms-excel"){
            console.log("Its scv file")
            setSCV(e.target.files[0])
            setTextFile("File name:"+e.target.files[0].name)
            setValidFile(1)

        }else{
            console.log("Its not scv file")
            setTextFile("The file type does not correspond to reality")
            setValidFile(0)
        } 
    }
    const SendRequest = ()=>{
        if(csvfile!=undefined){
            let form = new FormData();
            form.append("arrFile", csvfile);


            fetch("/create_db", {
                method: 'POST',
                body: form
              })
              .then(
                  res=>{
                      console.log(res)
                      setSuccess(true)
                      setTimeout(()=>{
                        window.location.reload(false);
                        setSuccess(false)

                      },1500)
                    //   window.location.reload(false);
                      
                }
                  
                );
        }else{
            setTextFile("You need to download the file first")
        }

      
    
    }

    return(
    <>
    <div>
        {
            success? <Notice data={"text upload success"}/>:""
        }
       <div className="uploud-file">
            <input className="input-file" type="file" accept=".csv" id = "file" onChange={(e)=>{ver(e)}}></input>
            {ValidFile?
                <label for="file" className="" >{textFile}</label>:
                <label for="file" className="" >{textFile}</label>
            }
            <label for="file" className="display-icon-lable">
                
                <FontAwesomeIcon icon="cloud-upload-alt" />
            </label>
        </div>
    
         <button className="btn" onClick={SendRequest}>Send file</button>

    </div>
     
     </>       
         
    )
}

export default UploadDiv