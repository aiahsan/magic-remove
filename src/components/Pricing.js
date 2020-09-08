import React, { Component } from "react";
import Apilogo from "../img/002   API.png";
import MagicLogo from "../img/magic 1.png";
import PCLogo from "../img/Group.png";
import Infinity from "../img/forever 1.png";
import HeadingComp from "./headingComp";
import Breadcrumb from "./breadCrum";
import Footer from "./footer1";
import { BsPlus } from "react-icons/bs";

import { Accordion, Card, Button } from "react-bootstrap";

class Pricing extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="api_div">
          <Breadcrumb />
          <HeadingComp
            head="Choose Your Business Plan"
            para="We would love to listen your problems. Don’t be confused we’ll come back to you shortly."
          />
          <div className="mt-5 ml-4 mr-4">
            <div className="row">
              <div className="col-md-4 col-xl-4 mt-5 priceing_left">
                <div className="pricing_card">
                  <p className="priceBox-Head">Free Account</p>
                  <div>
                    <p className="pricing_price_head">
                      <sup className="pricing_price_head-sup">$</sup>00
                      <sub className="pricing_price_head-sub">/Image</sub>
                    </p>
                  </div>
                  <div className="gray_line" />
                  <div className="features">
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        200 credits / month = ₹ 2,650 / ₹ 13.25
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        200 credits / month = ₹ 2,650 / ₹ 13.25{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        500 credits / month = ₹ 5,950 / ₹ 11.9
                      </p>
                    </div>
                  </div>
                  <button type="button" className="sub-btn-buy-now">
                    Buy Now
                  </button>
                </div>
              </div>

              <div className="col-md-4 col-xl-4 padding-0 ">
                <div className="pricing_card pricing_card-center">
                  <div className="recomended-P-box">
                    <p>Recomended</p>
                  </div>
                  <p className="priceBox-Head">Subscription Plan</p>
                  <div>
                    <p className="pricing_price_head">
                      <sup className="pricing_price_head-sup">$</sup>109.0
                      <sub className="pricing_price_head-sub">/Image</sub>
                    </p>
                  </div>
                  <div className="gray_line" />
                  <div className="features">
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        200 credits / month = ₹ 2,650 / ₹ 13.25
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        200 credits / month = ₹ 2,650 / ₹ 13.25{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        500 credits / month = ₹ 5,950 / ₹ 11.9
                      </p>
                    </div>
                  </div>
                  <div style={{ marginTop: "18%" }}>
                    <button type="button" className="sub-btn-buy-now">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-xl-4 mt-5 priceing_right">
                <div className="pricing_card">
                  <p className="priceBox-Head">Pay as you go </p>
                  <div>
                    <p className="pricing_price_head">
                      <sup className="pricing_price_head-sup">$</sup>59.9
                      <sub className="pricing_price_head-sub">/Image</sub>
                    </p>
                  </div>
                  <div className="gray_line" />
                  <div className="features">
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        200 credits / month = ₹ 2,650 / ₹ 13.25
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        40 credits / month = ₹ 599 / ₹ 14.98{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        200 credits / month = ₹ 2,650 / ₹ 13.25{" "}
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        40 credits / month = ₹ 599 / ₹ 14.98
                      </p>
                    </div>
                    <div className="features-line">
                      <div className="check_circle"></div>
                      <p className="features-line-head">
                        {" "}
                        500 credits / month = ₹ 5,950 / ₹ 11.9
                      </p>
                    </div>
                  </div>
                  <button type="button" className="sub-btn-buy-now">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 ml-5 mr-5">
          <div className="row">
            <div className="col-md-3 col-lg-3 specs_hight">
              <div className="specs_details">
                <img
                  src={Infinity}
                  alt="infinity icon"
                  className="specs_img-box"
                />
                <p className="spaces_details_p">
                  Unlimited free previews on remove.bg
                </p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 specs_hight">
              <div className="specs_details">
                <img
                  src={Apilogo}
                  alt="infinity icon"
                  className="specs_img-box"
                />
                <p className="spaces_details_p">
                  50 free previews via API and apps per month
                </p>
              </div>
            </div>

            <div className="col-md-3 col-lg-3 specs_hight">
              <div className="specs_details">
                <img
                  src={MagicLogo}
                  alt="infinity icon"
                  className="specs_img-box"
                />
                <p className="spaces_details_p">
                  Magicremove for adobe photoshop
                </p>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 specs_hight">
              <div className="specs_details">
                <img
                  src={PCLogo}
                  alt="infinity icon"
                  className="specs_img-box"
                />
                <p className="spaces_details_p">App for Windows or Linux</p>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 100 }}>
          <HeadingComp head="Frequently asked questions" para="" />
        </div>
        <div
          className="accordian-specs"
        >
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="0"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="1"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="2"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="3"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="4"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
            <Card>
              <Card.Header className="accordian-Header">
                <Accordion.Toggle
                  className="accordian-toggle-specs"
                  variant="link"
                  eventKey="5"
                >
                  <div><p className="accoridan-specs-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p></div>
                  <div><BsPlus style={{color:'#A6C94A'}}/> </div>
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="5">
                <Card.Body>Hello! I'm the body</Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>

        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default Pricing;

/*

    <div className="container">
            <div className="pricing_card">
              <p className="contact_info contact_info-pricing">Free Account</p>
              <h1 className="price_tag">
                <sup>$</sup>00<sub>/image</sub>
              </h1>
              <div className="gray_line" />
              <div className="check_circle" />
              <div className="check_circle check_circle2" />
              <div className="check_circle check_circle3" />
              <div className="check_circle check_circle4" />
              <div className="check_circle check_circle5" />
              <div className="check_circle check_circle6" />
              <div className="check_circle check_circle7" />
              <div className="check_circle check_circle8" />
              <p className="pricing_text-context pricing_details">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details2">
                200 credits / month = ₹ 2,650 / ₹ 13.25
              </p>
              <p className="pricing_text-context pricing_details3">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details4">
                500 credits / month = ₹ 5,950 / ₹ 11.9
              </p>
              <p className="pricing_text-context pricing_details5">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details6">
                200 credits / month = ₹ 2,650 / ₹ 13.25
              </p>
              <p className="pricing_text-context pricing_details7">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details8">
                500 credits / month = ₹ 5,950 / ₹ 11.9
              </p>
              <button type="button" className="submit_btn buynow_btn">
                Buy Now
              </button>
            </div>
            <div className="pricing_card pricing_card3">
              <p className="contact_info contact_info-pricing">Pay As you go</p>
              <h1 className="price_tag">
                <sup>$</sup>59.9<sub>/image</sub>
              </h1>
              <div className="gray_line" />
              <div className="check_circle" />
              <div className="check_circle check_circle2" />
              <div className="check_circle check_circle3" />
              <div className="check_circle check_circle4" />
              <div className="check_circle check_circle5" />
              <div className="check_circle check_circle6" />
              <div className="check_circle check_circle7" />
              <div className="check_circle check_circle8" />
              <p className="pricing_text-context pricing_details">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details2">
                200 credits / month = ₹ 2,650 / ₹ 13.25
              </p>
              <p className="pricing_text-context pricing_details3">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details4">
                500 credits / month = ₹ 5,950 / ₹ 11.9
              </p>
              <p className="pricing_text-context pricing_details5">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details6">
                200 credits / month = ₹ 2,650 / ₹ 13.25
              </p>
              <p className="pricing_text-context pricing_details7">
                40 credits / month = ₹ 599 / ₹ 14.98
              </p>
              <p className="pricing_text-context pricing_details8">
                500 credits / month = ₹ 5,950 / ₹ 11.9
              </p>
              <button type="button" className="submit_btn buynow_btn">
                Buy Now
              </button>
            </div>
            <div className="pricing_card2">
              <div className="recommended_tag">
                <p className="rec_title">Recommended</p>
              </div>
              <div className="subs_plan">
                <p className="contact_info contact_info-pricing subs_info-pricing">
                  Subscription Plan
                </p>
                <h1 className="price_tag">
                  <sup>$</sup>109.9<sub>/image</sub>
                </h1>
                <div className="gray_line" />
                <div className="check_circle" />
                <div className="check_circle check_circle2" />
                <div className="check_circle check_circle3" />
                <div className="check_circle check_circle4" />
                <div className="check_circle check_circle5" />
                <div className="check_circle check_circle6" />
                <div className="check_circle check_circle7" />
                <div className="check_circle check_circle8" />
                <div className="check_circle check_circle9" />
                <p className="pricing_text-context pricing_details">
                  40 credits / month = ₹ 599 / ₹ 14.98
                </p>
                <p className="pricing_text-context pricing_details2">
                  200 credits / month = ₹ 2,650 / ₹ 13.25
                </p>
                <p className="pricing_text-context pricing_details3">
                  40 credits / month = ₹ 599 / ₹ 14.98
                </p>
                <p className="pricing_text-context pricing_details4">
                  500 credits / month = ₹ 5,950 / ₹ 11.9
                </p>
                <p className="pricing_text-context pricing_details5">
                  40 credits / month = ₹ 599 / ₹ 14.98
                </p>
                <p className="pricing_text-context pricing_details6">
                  200 credits / month = ₹ 2,650 / ₹ 13.25
                </p>
                <p className="pricing_text-context pricing_details7">
                  40 credits / month = ₹ 599 / ₹ 14.98
                </p>
                <p className="pricing_text-context pricing_details8">
                  500 credits / month = ₹ 5,950 / ₹ 11.9
                </p>
                <p className="pricing_text-context pricing_details9">
                  500 credits / month = ₹ 5,950 / ₹ 11.9
                </p>
                <button type="button" className="submit_btn buynow_btn-rec">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="specs_details">
            <div className="specs_div">
              <p className="pricing_text-context pricing_text-context2">
                Unlimited free previews on remove.bg
              </p>
            </div>
            <div className="specs_img-box">
              <img
                src={Infinity}
                alt="infinity icon"
                className="specs_img-logo"
              />
            </div>
          </div>
          <div className="specs_details specs_details2">
            <div className="specs_div">
              <p className="pricing_text-context pricing_text-context2">
                50 free previews via API and apps per month
              </p>
            </div>
            <div className="specs_img-box">
              <img
                src={Apilogo}
                alt="infinity icon"
                className="specs_img-logo2"
              />
            </div>
          </div>
          <div className="specs_details specs_details3">
            <div className="specs_div">
              <p className="pricing_text-context pricing_text-context2">
                Magicremove for adobe photoshop
              </p>
            </div>
            <div className="specs_img-box">
              <img
                src={MagicLogo}
                alt="infinity icon"
                className="specs_img-logo2"
              />
            </div>
          </div>
          <div className="specs_details specs_details4">
            <div className="specs_div">
              <p className="pricing_text-context pricing_text-context2">
                App for Windows or Linux
              </p>
            </div>
            <div className="specs_img-box">
              <img
                src={PCLogo}
                alt="infinity icon"
                className="specs_img-logo2"
              />
            </div>
          </div>
          <div className="container freq_ques">
            <div className="row">
              <div className="col-md-3"></div>
              <div className="col-md-9 pricing_text">
                <p className="ml-5 pl-5 contact_info">
                  Frequently asked questions
                </p>
                <div className="g-line g-line2" />
                <p className="pricing_text-context freq_questions">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions plus_sign">
                  +
                </p>
                <hr className="ques_line" />
                <p className="pricing_text-context freq_questions2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions2 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line2" />

                <p className="pricing_text-context freq_questions3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions3 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line3" />

                <p className="pricing_text-context freq_questions4">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions4 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line4" />

                <p className="pricing_text-context freq_questions5">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions5 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line5" />

                <p className="pricing_text-context freq_questions6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions6 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line6" />

                <p className="pricing_text-context freq_questions7">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions7 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line7" />

                <p className="pricing_text-context freq_questions8">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
                <p className="pricing_text-context freq_questions8 plus_sign">
                  +
                </p>
                <hr className="ques_line ques_line8" />
              </div>
            </div>
          </div>
          <button className="help_btn">
            <div className="tiny_circle">?</div>
            <span className="ml-4">Help</span>
          </button>
       */
