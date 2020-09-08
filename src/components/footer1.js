import React, { Component } from 'react';
import Logo from '../img/logo 2 (1).png';
import FbLogo from '../img/fb.png';
import LIn from '../img/LinkedIn.png';
import TwLogo from '../img/tweet.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";

class Footer1 extends Component {
    render() { 
        return ( 
            <React.Fragment>
                <div className="foot-div1 footer_Box">
                <img src={Logo} alt="Site Logo" className="footer_logo" />
                <div className="footerNav">
                <Link to="/" className="foot_Font">About</Link>
                <Link to="/contactus" className="foot_Font">Contact Us</Link>
                <Link to="/blog" className="foot_Font">Blog</Link>
                <Link to="/" className="foot_Font">Faqs</Link>
                <Link to="/" className="foot_Font">Terms & Conditions</Link>
                <Link to="/" className="foot_Font">Privacy Policy</Link>
            
                </div>
                <div className="footerNav">
                <img src={FbLogo} alt="Fb Logo" className="match-title_min p-3" />
                                    <img src={LIn} alt="LinkedIn Logo" className="match-title_min p-3" />
                                    <img src={TwLogo} alt="Twitter Logo" className="match-title_min p-3" />
                                
                </div>
                   <p className="foot_Font mt-4" >Copyright © 2020 MagicRemove</p>
                    </div>
            </React.Fragment>
        );
    }
}
 
export default Footer1;