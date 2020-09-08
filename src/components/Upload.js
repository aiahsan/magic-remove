import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Apilogo from '../img/002   API.png';
import MagicLogo from '../img/magic 1.png';
import PCLogo from '../img/Group.png';
import UploadImg from '../img/picture 1.png';
import UploadVid from '../img/video-player 1.png';
import Backboxes from '../img/background boxes.png';
import UploadBox from './uploadBox';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";

export default () => {
    return <div className="row">
        <div className="col-md-6">
            <div className="margin-Body">
                <div className="backBox-1"></div>
                <h1 className="mt-5 pt-5 upload-title">We edit your images & videos for <span className="upload-title__color">next level</span></h1>
                <p className="mt-3 light_bold">Its easy and free</p>
                <div className="marginT-39">
                    <Button variant="" as={Link} to="/toolapi"  active className="option-btn">Image Background</Button>
                    <Button variant="outline-success" className="option-btn ml-c-4">Video Background</Button>

                </div>
            </div>
        </div>
        <div className="col-md-6">
            <div className="row mt-5 pt-5">
                <div className="col-md-6 ">
                <div className="backBox-2"></div>

                <UploadBox img={UploadImg} txt="Supported formats: .jpg, .jpeg, .png" />
                   
                </div>
                <div className="col-md-6 rmp  ">
                    <div className="lt-box-2" >
                    <img src={Backboxes} className="backBox-3"/>

                    <UploadBox img={UploadVid} txt="Supported formats: .mp4, .webm, .ogg, .mov, .gif" />

                    </div>
                       
                    </div>
            </div>
            
        </div>
        <div className="margin-Body-1">
        <div className="row ">
                <div className="col-md-9">
                    <div className="row">
                    <div className="col-md-4">
                        <div className="function">
                        <img src={Apilogo} style={{width:46,height:46}} alt="API icon" />
                        <p className="function-titles">50 free previews
                        via API and apps per month</p>
                    </div>
                        </div> 

                         <div className="col-md-4">
                        <div className="function">
                        <img src={MagicLogo} style={{width:46,height:46}} alt="API icon" />
                        <p className="function-titles">Magicremove for adobe photoshop</p>
                    </div>
                        </div>  

                         <div className="col-md-4">
                        <div className="function">
                        <img src={PCLogo} style={{width:46,height:46}} alt="API icon" />
                        <p className="function-titles">App for Windows or Linux</p>
                    </div>
                        </div>      
                    </div>
                 
                </div>
                <div className="col-md-4"></div>
            </div>
 
        </div>
          </div>
}



/*

  <div className='upload-div'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={Backboxes} className="sm-boxes" alt="back design"/>
                            <div className="back-box__md"></div>
                            <h1 className="mt-5 pt-5 upload-title">We edit your images & videos for <span className="upload-title__color">next level</span></h1>
                            <div className="back-box__sm"></div>
                            <p className="mt-3 light_bold">Its easy and free</p>
                            <Button variant="" active className="p-3 option-btn">Image Background</Button>
                            <Button variant="outline-success" className="p-3 ml-4 option-btn">Video Background</Button>
                        </div>
                        <div className="col-md-7">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md">
                                        <div className="mt-5 pt-5 upload-card">
                                            <img src={UploadImg} alt="upload-img icon" className="upload-icon" />
                                            <Button className="upload_btn p-3"><img src={Uploadicn} alt="upload icon" /> Upload Image</Button>
                                            <p className="sm_txt">or drop a file</p>
                                            <hr className="div_seperator"/>
                                            <p className="sm_txt sm_txt-1">Supported formats: .jpg, .jpeg, .png</p>
                                        </div>
                                    </div>
                                    <div className="col-md">
                                        <div className="mt-5 pt-5 upload-card upload-card__2">
                                            <img src={UploadVid} alt="Video icon" className="upload-icon" />
                                            <Button className="upload_btn p-3"><img src={Uploadicn} alt="upload icon" /> Upload Video</Button>
                                            <p className="sm_txt">or drop a file</p>
                                            <hr className="div_seperator"/>
                                            <p className="sm_txt sm_txt-2">Supported formats: .mp4, .webm, .ogg, .mov, .gif</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-md-3 function">
                        <img src={Apilogo} alt="API icon" />
                        <p className="function-titles">50 free previews
                        via API and apps per month</p>
                    </div>
                    <div className="col-md-3 function">
                        <img src={MagicLogo} alt="Magic icon" />
                        <p className="function-titles">Magicremove for adobe photoshop</p>
                    </div>
                    <div className="col-md-3 function">
                        <img src={PCLogo} alt="PC icon" />
                        <p className="function-titles function-titles-1">App for Windows or Linux</p>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>

            <hr className="div_seperator-1"/>
            </div>



            */


