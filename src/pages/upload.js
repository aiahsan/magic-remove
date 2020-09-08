import React, { useState,useEffect } from 'react';
import Nav from '../components/Navbar'
import { FaUpload } from 'react-icons/fa'
import UploadImg from '../img/picture 1.png';
import UploadBox from '../components/uploadBox';
import NewId from '../utiles/newId';
import ImageBox from '../components/imageBox';
import { useLocation } from "react-router-dom";

export default (props) => {

    
    const [images, setImages] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        
        if(location.state)
        if(location.state.newImages)
        {
            console.log(location.state.newImages)
            const newImagesx = [{ id: NewId(), orignalImage: location.state.newImages[0].orignalImage, removedImage: location.state.newImages[0].removedImage }]
            newImagesx.push(...images);
            setImages(newImagesx);
        }
     //setImages([...images.push(location.state.newImages[0])]);
    },[])

    const [reangeVal,setreangeVal]=useState(5);
    const handleClick = (event) => {

        /* call prompt() with custom message to get user input from alert-like dialog */
        const enteredName = prompt('Please enter your name')

        /* update state of this component with data provided by user. store data
           in 'enteredName' state field. calling setState triggers a render of
           this component meaning the enteredName value will be visible via the
           updated render() function below */
        // this.setState({ enteredName : enteredName })

    }

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
                    newImages.push(...images);
                    setImages(newImages);
                }
            }

        }
    };


    const handleRemove=id=>{
        const filterdImages=images.filter(x=>x.id!=id);
        setImages(filterdImages);
    }

    if (images.length > 0) {
        return <div className={'drag-drop-zone'} onDrop={e => handleDrop(e)}
            onDragOver={e => handleDragOver(e)}
            onDragEnter={e => handleDragEnter(e)}
            onDragLeave={e => handleDragLeave(e)}>
            <Nav />
            <div className="upload-parent">
                <button className="remove-backgroundBtn btn btn-primary mb-2 p-2"><span className="pr-2 pl-2"><FaUpload /></span>Upload Image</button>
                <p>or drop a file, paste an image or <a className="cursor" onClick={handleClick}>URL</a></p>
            </div>
            {
                images.map(x=><ImageBox key={x.id} img={x} handleRemove={handleRemove} />)
            }
        </div>

    }

    else
        return <>
            <div className={'drag-drop-zone'} onDrop={e => handleDrop(e)}
                onDragOver={e => handleDragOver(e)}
                onDragEnter={e => handleDragEnter(e)}
                onDragLeave={e => handleDragLeave(e)}>
                <Nav />

                <div className="upload-parent">
                    <h1 class="mt-3 upload-title txt-center f-26" >Upload an image to remove the  <span class="upload-title__color">background</span></h1>
                    <UploadBox img={UploadImg} page="upload" txt="Supported formats: .jpg, .jpeg, .png" />

                </div>
              
            </div>

        </>



}