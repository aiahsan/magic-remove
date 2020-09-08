import React from 'react';
import Upload from "../components/Upload";
import Procedure from "../components/Procedure";
import Matchless_Result from "../components/Matchless_Results";
import Review from "../components/Review";
import Footer1 from "../components/footer1";
import Nav from '../components/Navbar';
import NewId from '../utiles/newId';
import "../App.css";
import { useHistory } from "react-router-dom";


export default ()=>{
  let history = useHistory();

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

//drag over not drop
const handleDragEnter = e => {

    e.preventDefault();
    e.stopPropagation();
};
const handleDragLeave = e => {
    e.preventDefault();
    e.stopPropagation();
};
const handleDragOver = e => {


    e.preventDefault();
    e.stopPropagation();
};
const handleDrop = async e => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.files) {
        if (e.dataTransfer.files.length > 0) {
            if (e.dataTransfer.files.length == 1) {

                const dropedImage = await toBase64(e.dataTransfer.files[0]);
                const newImages = [{ id: NewId(), orignalImage: dropedImage, removedImage: dropedImage }]
                history.push( {
                  pathname: '/upload',
                  
                  state: {newImages }
              })
              }
        }

    }
};
    return <div  onDrop={e => handleDrop(e)}  onDragOver={e => handleDragOver(e)}
    onDragEnter={e => handleDragEnter(e)}
    onDragLeave={e => handleDragLeave(e)}>
        <Nav/>
      <Upload/>
     <div className="mt-5 pt-2">
     <div style={{width:'90%',margin:'auto'}}>
        <hr/>
      </div>
     </div>
     <Procedure/>
     <Matchless_Result/>
     <Review/>

     <Footer1/>

      </div>
}

/*
<Procedure/>
      <Footer1/>
    
      */