import React, { Component } from 'react';
import {Breadcrumb, Button} from 'react-bootstrap';
import PhoneIcn from '../img/phone.png';
import MailIcn from '../img/sign@.png';
import Clock from '../img/wall-clock 1.png';
import BuildIcn from '../img/office-building 1.png';
import BreadCrum from './breadCrum';
import Header from './FunctionalityText';

class Contact_Us extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <BreadCrum />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="contact_title-head mt-5" />
                            <div className="contct_head" >
                                <Header
                                    head="Contact US"
                                    para="We would love to listen your problems. Don’t be confused we’ll come back to you shortly."
                                />
                            </div>
                            <div className="col-md">
                                <input type="text" id="" name="" placeholder="Name" className="textbox mr-2 ml-1 mt-3"></input>
                                <input type="number" id="" name="" placeholder="Phone" className="textbox ml-1 mt-3"></input>
                                <input type="text" id="" name="" placeholder="Company" className="textbox mr-2 ml-1 mt-3"></input>
                                <input type="email" id="" name="" placeholder="Email" className="textbox ml-1 mt-3"></input>
                                <input type="text" id="" name="" placeholder="Subject" className="textbox textbox5 ml-1 mt-3"></input>
                                <textarea id="" name="" className="textbox textbox6 ml-1 mt-3" placeholder="Message"></textarea>
                                <button type="button" className="ml-1 mt-3 submit_btn">Submit Request</button>
                            </div>
                            <div className="col-md"></div>
                        </div>
                        <div className="col-lg-5">
                            <div className="contact-detail_box">
                                <h3 className="contact_details-head pt-5 pb-0">Need Support</h3>
                                <hr className="white_line ml-5" />
                                <div className="contact_details-text mt-5 ml-5">
                                    <p className="contact_info">
                                        <span className="mt-4 mr-4">
                                            <img src={PhoneIcn} className="detail_icon" alt="phone icon" />
                                        </span>+91 123 456 7890
                                    </p>
                                    <p className="contact_info">
                                        <span className="mt-4 mr-4">
                                            <img src={MailIcn} className="detail_icon" alt="@ icon" />
                                        </span>
                                        info@magicremove.ch
                                    </p>
                                    <p className="contact_info">
                                        <span className="mt-4 mr-4">
                                            <img src={BuildIcn} className="detail_icon" alt="building icon" />
                                        </span>
                                        Complax Switzerland
                                    </p>
                                    <p className="contact_info">
                                        <span className="mt-4 mr-4">
                                            <img src={Clock} className="detail_icon" alt="clock icon" />
                                        </span>
                                        09:00 - 18:00
                                    </p>                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
// <div className="white_line" />

 
export default Contact_Us;
// <div className="container">
// <div className="row">
//     <div className="col-md-7">
//         <h3 className="login-title contact-title">Contact Us</h3>
//         <div className="back-box contact_back-box"></div>
//         <p className="login-title_min contact-title2">We would love to listen your problems. Don’t be confused we’ll come back to you shortly.</p>
//         <input type="text" id="" name="" placeholder="Name" className="textbox textbox1"></input>
//         <input type="number" id="" name="" placeholder="Phone" className="textbox textbox2"></input>
//         <input type="text" id="" name="" placeholder="Company" className="textbox textbox3"></input>
//         <input type="email" id="" name="" placeholder="Email" className="textbox textbox4"></input>
//         <input type="text" id="" name="" placeholder="Subject" className="textbox textbox5"></input>
//         <textarea id="" name="" className="textbox textbox6" placeholder="Message"></textarea>
//         <button type="button" className="submit_btn">Submit Request</button>
//     </div>
//     <div className="col-md-5">
//     </div>
// </div>
// </div>
