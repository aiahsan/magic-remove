import React, { Component } from "react";
import BorderCut from "../img/Vector 1.png";
import Logo from "../img/logo 2 (1).png";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import FbIcon from "../img/facebook.png";
import MailLogo from "../img/mail.png";
import GIcon from "../img/google.png";
import hideIcon from "../img/eyeview.png";
import UserIcon from "../img/userIcon.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
class Signup extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo" className="ml-5 mt-2 rem-logo" />
          </Navbar.Brand>
        </Navbar>
        <div className="login-div container">
          <div className="row">
            <div className="col-lg-2" />
            <div className="col-lg-4">
              <div className="back-box"></div>
              <h3 className="login-title">Signup</h3>
              <p className="mt-2 login-title_min">
                It will not take too long. Fill in the following information to
                register your self and enjoy the services life time free
              </p>
              <Form.Group className="form-section">
                <div className="mail-div">
                  <Form.Control
                    className="form-input mt-4"
                    type="text"
                    placeholder="Name"
                  />
                  <button className="img-btn_icon">
                    <img className="form-logo" src={UserIcon} alt="User icon" />
                  </button>
                  <Form.Control
                    className="mt-3 form-input form-input-2"
                    size="md"
                    type="text"
                    placeholder="Email"
                  />
                  <button className="img-btn_icon">
                    <img className="form-logo" src={MailLogo} alt="Mail icon" />
                  </button>
                  <Form.Control
                    className="mt-3 form-input form-input-3"
                    size="md"
                    type="text"
                    placeholder="Password"
                  />
                  <button className="img-btn_icon">
                    <img className="form-logo" src={hideIcon} alt="hide icon" />
                  </button>
                  <Form.Control
                    className="mt-3 form-input form-input-4"
                    size="md"
                    type="text"
                    placeholder="Confirm Password"
                  />
                  <button className="img-btn_icon">
                    <img className="form-logo" src={hideIcon} alt="hide icon" />
                  </button>
                </div>
              </Form.Group>
              <Button active variant="outline-success signin-btn">
                Register
              </Button>
              <Button
                variant="outline-success signin-btn"
                as={Link}
                to="/login"
              >
                Login
              </Button>
            </div>
            <div className="col-lg-2">
              <hr className="v-line2" />
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
        <div className="upload-div" />
      </React.Fragment>
    );
  }
}

export default Signup;
// <img src={BorderCut} className="border-cut2" alt="border cut" />
