import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import Footer1 from "./footer1";
import BreadCrum from "./breadCrum";

export default () => {
  const [cards, setCard] = useState([1, 2, 3, 5, 6, 7, 8, 9]);

  return (
    <>
      <BreadCrum />
      <div className="container">
        <div className="row">
          {cards.map((x) => (
            <div className="col-md-4 col-xl-4">
              <div className="api_card_cst">
                <div className="api_pic-div-cst"></div>
                <p className="api_bold-text-1">Windows / Mac / Linux</p>
                <p className="api_mini-text-1">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="btn dwnld_btn-1 pt-2 pb-2 pl-5 pr-5">
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

//                    <Footer1 />
