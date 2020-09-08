import React, { Component } from 'react';

export default ()=> {
   return (
        <React.Fragment>
            <div className="container match-div">
                <h3 className="bold-head_match">Matchless Results</h3>
                <div className="tabBox">
                    <p className="match-title_min pl-5 activeTile" >People</p>

                    <p className="match-title_min pl-5 ">Products</p>
                    <p className="match-title_min pl-5 ">Animals</p>
                    <p className="match-title_min pl-5 ">Cars</p>
                    <p className="match-title_min pl-5 ">Graphics</p>
                </div>
                <div className="container mt-3">
                    <div className="row">
                        <div className="col-md-6 p-0">
                            <div className="compareLeft flr" style={{}}></div>
                        </div>
                        <div className="border-left d-sm-none d-md-block dspnone" ></div>
                        <div className="col-md-6 p-0" style={{ marginLeft: -1 }}>

                            <hr className="d-sm-block d-md-none" />
                            <div className="compareLeft flr2"></div>
                            <div className="dotcenter" ></div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}


/*
  <div className="sm-green match_sm-green" />



                            */