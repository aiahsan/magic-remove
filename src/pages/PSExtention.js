import React, { Component } from "react";
import Navbar1 from "../components/Navbar";
import BreadCrumb from "../components/breadCrum";
import Head from "../components/headingComp";
import FuncText from "../components/FunctionalityText";
import { Button } from "react-bootstrap";
import PS from '../img/PS.png';
import Pstunning from "../img/Pstunning.png";
import PSlayer from "../img/PSlayer.png";
import Footer1 from "../components/footer1";

class PSExtention extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar1 />
        <BreadCrumb />
        <div className="back_api">
          <Head
            head="Photoshop Extension"
            para="Remove Backgrounds in Photoshop with a single click"
          />
          <div className="container mt-5">
            <div className="row">
              <div className="container col-lg-6">
                <div className="row">
                  <div className="col-2">
                    <div className="sm_crcle mt-5">
                      <span className="crcl_no">1</span>
                    </div>
                    <hr className="vert_green-line mt-5" />
                  </div>
                  <div className="col-10 text_func">
                    <FuncText
                      head="Speed up your workflow"
                      para="Unleash your creativity – instead of wasting your time with repetitive work: Removing backgrounds is now as simple as clicking a button!"
                    />
                    <Button variant="" active className="option-btn">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={PS}
                  className="market_man"
                  alt="PS Screenshot"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="market_man"
                  src={Pstunning}
                  alt="PS Man"
                />
              </div>
              <div className="container col-lg-6 mt-5 pt-2">
                <div className="row">
                  <div className="col-2">
                    <div className="sm_crcle mt-5">
                      <span className="crcl_no">2</span>
                    </div>
                    <hr className="vert_green-line mt-5" />
                  </div>
                  <div className="col-10 text_func">
                    <FuncText
                      head="Stunning Results"
                      para="Get Artificial Intelligence powered cut-outs - whether you edit product photos or portrait shots. Even challenging edges, like hair, and other tricky conditions are handled exceptionally well."
                    />
                    <Button variant="" active className="option-btn">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6 mt-5 pt-2 container">
                <div className="row">
                  <div className="col-2">
                    <div className="sm_crcle mt-5">
                      <span className="crcl_no">3</span>
                    </div>
                    <hr className="vert_green-line mt-5" />
                  </div>
                  <div className="col-10 text_func">
                    <FuncText
                      head="Layer Mask Editing"
                      para="Adjustments are easy: Use the layer mask to remove or restore regions of the image. Just as you normally would, but with a one-click starting point."
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5">
                <img
                    className="market_man mt-5"
                    src={PSlayer}
                    alt="PS Layer"
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

export default PSExtention;
