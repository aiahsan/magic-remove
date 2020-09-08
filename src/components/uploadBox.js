import React,{useState} from 'react';
import { Button } from 'react-bootstrap';

import Uploadicn from '../img/upload 1.png';
export default ({img,txt,page})=> {

    return <div ondrop={()=>alert()} className={page=="upload"?"upd_box p-5 mt-5":"upd_box"}>
    <img src={img} alt="upload-img icon" className="upload-icon-cst" />
                           
    <Button className="upload_btn p-3"><img src={Uploadicn} alt="upload icon" /> Upload Image</Button>
    <p className="sm_txt mt-17">or drop a file</p>
    <hr className="div_seperator"/>
<p className="sm_txt">{txt}</p>

    </div>
   
    
}
 
