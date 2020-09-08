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
                <div className="foot-div">
                    <div className="container">
                    
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <img src={Logo} alt="Site Logo" className="footer_logo" />
                                <div className="footer_links">
                                    <a href="#" className="match-title_min p-2">About</a>
                                    <Link to="/contactus" className="match-title_min p-2 match-title_min2">Contact Us</Link>
                                    <Link to="/Blog" href="#" className="match-title_min p-2 match-title_min3">Blog</Link>
                                    <a href="#" className="match-title_min p-2 match-title_min4">Faqs</a>
                                    <a href="#" className="match-title_min p-2 match-title_min5">Terms & Conditions</a>
                                    <a href="#" className="match-title_min p-2 match-title_min5">Privacy Policy</a>
                                </div>
                                <div className="app-logos">
                                    <img src={FbLogo} alt="Fb Logo" className="match-title_min p-3" />
                                    <img src={LIn} alt="LinkedIn Logo" className="match-title_min p-3" />
                                    <img src={TwLogo} alt="Twitter Logo" className="match-title_min p-3" />
                                </div>
                                <p className="match-title_min copyright_tag">Copyright © 2020 MagicRemove</p>
                            </div>
                            <div className="col-md-3">
                        </div>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Footer1;