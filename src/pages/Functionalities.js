import React, { Component } from "react";
import Navbar1 from "../components/Navbar";
import BreadCrumb from "../components/breadCrum";
import Head from "../components/headingComp";
import FuncText from "../components/FunctionalityText";
import { Button } from "react-bootstrap";
import Trace from '../img/trace 1.png';
import AnimLS from "../img/animation-light-square 1.png";
import GrnBckgrnd from "../img/green-screen-blog 1.png";
import Footer1 from "../components/footer1";
import Tick from '../img/tick.png';

class Functionalities extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar1 />
        <BreadCrumb />
        <div className="back_api">
            <Head
                head="Spend your time taking pictures, Not picking pixels!"
            />
                
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 mt-0">
                    <FuncText
                      head="Automatically remove photo backgrounds"
                      para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"
                    />
                    <p className="proc-title_min font-work-all"><img className="pl-0 pr-2" src={Tick} alt="tick" />For many professional photographers, removing backgrounds from photos is a familiar yet time-consuming task.</p>
                    <p className="proc-title_min font-work-all "><img className="pl-0 pr-2" src={Tick} alt="tick" />But why spend your days clicking pixels when Artificial Intelligence could finish the task for you in just 5 seconds?</p>
                    <p className="proc-title_min font-work-all"><img className="pl-0 pr-2" src={Tick} alt="tick" />Save your hours to grab great shots - leave the pixel-work to us.</p>

                </div>
              <div className="col-lg-6">
                <img
                  src={Trace}
                  className="market_man"
                  alt="Trace"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="market_man"
                  src={AnimLS}
                  alt="Animation Light Square"
                />
              </div>
              <div className="col-lg-6 mt-5 pt-2">
                    <FuncText
                      head="Speed up your workflow!"
                      para="Unleash your creativity with Company Name Instead of losing hours with repetitive work, removing backgrounds is now as quick as clicking a button.
                      Company Name integrates with Photoshop so you can use our AI to fine-tune and speed-up your workflow.
                      Why not give it a try?"
                    />
                    <Button variant="" active className="option-btn">
                      Try it for free
                    </Button>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 mt-5 pt-5">
                    <FuncText
                      head="No green screen required"
                      para="With Company Name, there is no need for chroma-keying environments under those perfectly tuned lighting conditions.
                      In fact, you can do something else entirely while our Artificial Intelligence gets rid of your image backgrounds.."
                    />
              </div>
              <div className="col-lg-6 mt-5">
                <img
                    className="market_man mt-5"
                    src={GrnBckgrnd}
                    alt="Green Background"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <Footer1 />
        </div>
      </React.Fragment>
    );
  }
}

export default Functionalities;
