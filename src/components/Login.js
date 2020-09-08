import React, { Component } from 'react';
import BorderCut from '../img/Vector 1.png'
import Logo from '../img/logo 2 (1).png';
import {Navbar, Nav, Form,  Button} from 'react-bootstrap';
import FbIcon from '../img/facebook.png';
import MailLogo from '../img/mail.png';
import SecuredIcon from '../img/lock.png';
import GIcon from '../img/google.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,useHistory
  } from "react-router-dom";

class Login extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar>
                    <Navbar.Brand as={Link} to="/">
                        <img src={Logo} alt="Logo"  className="ml-5 mt-2 rem-logo" />
                    </Navbar.Brand>
                </Navbar>
                <div className="login-div container">
                <div className="row">
                  <div className="col-lg-2" />
                  <div className="col-lg-4">
                    <div className="back-box"></div>
                    <h3 className="login-title">Login</h3>
                    <p className="mt-2 login-title_min">
                        Welcome back! Login to access the most powerful <strong>AI</strong> tool. Did you <Link to="#" className="gr-txt">Forget your password?</Link>
                    </p>
                    <Form.Group className="form-section">
                      <div className="mail-div">
                        <Form.Control
                          className="form-input mt-4"
                          type="email"
                          placeholder="ali@gmail.com"
                        />
                        <button className="img-btn_icon">
                          <img className="form-logo" src={MailLogo} alt="User icon" />
                        </button>
                        <Form.Control
                          className="mt-3 form-input"
                          size="md"
                          type="password"
                          placeholder="Password"
                        />
                        <button className="img-btn_icon">
                          <img className="form-logo" src={SecuredIcon} alt="Mail icon" />
                        </button>
                      </div>
                    </Form.Group>
                    <Button active variant="outline-success signin-btn">
                      Sign in
                    </Button>
                    <Button
                      variant="outline-success signin-btn"
                      as={Link}
                      to="/signup"
                    >
                      Register
                    </Button>
                  </div>
                  <div className="col-lg-2">
                    <hr className="v-line" />
                  </div>
                  <div className="col-lg-4">
                    <Button variant="outline-success fbsign-btn">
                      <img src={FbIcon} className="p-1 pr-3" alt="Fb Icon" />
                      Facebook
                    </Button>
                    <Button variant="outline-success fbsign-btn gsign-btn">
                      <img src={GIcon} className="p-1 pr-3" alt="Google Icon" />
                      Google
                    </Button>
                  </div>
                </div>
              </div>
              <div className="upload-div upload-div_login" />
      
            </React.Fragment>
         );
    }
}
 
export default Login;

// <div className="upload-div login-div container">
// <div className="row">
//     <div className="col-md">
//         <h3 className="login-title">Login</h3>
//         <div className="back-box"></div>
//         <p className="login-title login-title_min">Welcome back! Login to access the most powerful <strong>AI</strong> tool.</p>
//         <p className="login-title login-title_min login-title_min2">Did you <a href="#" className="forget_link">Forget your password?</a></p>
//         <Form.Group className="form-section">
//             <div className="mail-div">
//                 <img className="form-logo" src={MailLogo} alt="Mail icon" />
//                 <Form.Control className="form-input" size="md" type="text" placeholder="ali@gmail.com" />
//                 <Form.Control className="form-input form-input-2" size="md" type="text" placeholder="Password"/>
//                 <img className="form-logo form-logo-1" src={SecuredIcon} alt="lock icon" />
//             </div>
//         </Form.Group>
//         <Button active variant="outline-success signin-btn" >Sign In</Button>
//         <Button as={Link} to="/signup" variant="outline-success signin-btn register-btn" >Register</Button>
//         <hr className="v-line"/>
//     </div>
//     <div className="col-md">
//         <Button variant="outline-success fb-btn" ><img src={FbIcon} className="p-1 pr-3" alt="Fb Icon" />Facebook</Button>
//         <Button variant="outline-success fb-btn g-btn" ><img src={GIcon} className="p-1 pr-3" alt="Google Icon" />Google</Button>
//     </div>
// </div>
// </div>
