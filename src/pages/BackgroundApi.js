import React, { Component } from "react";
import Navbar1 from "../components/Navbar";
import BreadCrumb from "../components/breadCrum";
import Head from "../components/headingComp";
import FuncText from "../components/FunctionalityText";
import { Button } from "react-bootstrap";
import DeskImg from "../img/desktopSS.png";
import MarketMan from "../img/Marketing.png";
import Footer1 from "../components/footer1";

class BackAPI extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar1 />
        <BreadCrumb />
        <div className="back_api">
          <Head
            head="Windows / Mac / Linux"
            para="Add automatic bulk background removal to your desktop"
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
                      head="Background Removal API"
                      para="Remove backgrounds from as many files as you want: Drag them into the window, click 'Start' and watch as each image gets cut out 100% automatically."
                    />
                    <Button variant="" active className="option-btn">
                      Download
                    </Button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src={DeskImg}
                  className="market_man"
                  alt="Desktop Screenshot"
                />
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-lg-6">
                <img
                  className="market_man"
                  src={MarketMan}
                  alt="Marketing Man"
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
                      head="Choose Background and Size"
                      para="Define once, apply to all files: Whether you need transparent or colored backgrounds, small or large images – you are in control. Select your preferences and they will apply to all files automatically."
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 container">
                <div className="row">
                  <div className="col-lg">
                    <div className="mt-2 tall_card"></div>
                  </div>
                  <div className="col-lg">
                    <div className="mt-2 short_card"></div>
                    <div className=" mt-2 short_card"></div>
                  </div>
                </div>
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

export default BackAPI;
