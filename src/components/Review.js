import React, { Component } from 'react';
import PersonPic from '../img/Person.png';
import Quote1 from '../img/quote 1.png';

export default () => {
    return <React.Fragment>
        <div className="review_section1">
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <h3 className="bold_head">Trusted</h3>
                        <p className="proc-title_min font-work-all">There are approximately 20 million more interesting activities than removing backgrounds by hand.</p>

                        <div className="row mt-5">
                            <div className="col-md-6" style={{ padding: 0 }}>
                                <p className="review-numbers r100">100M+</p>
                                <p className="proc-title_min font-work-all llo">Users</p>
                                <p className="proc-title_min font-work-all mt-n3 llo">All Over the World</p>
                            </div>
                            <div className="col-md-6">
                                <p className="review-numbers">700K+</p>
                                <p className="proc-title_min font-work-all">Users</p>
                                <p className="proc-title_min font-work-all mt-n3">All Over the World</p>
                            </div>
                        </div>


                    </div>
                    <div className="col-md ">
                        <div className="person_review preview_box" >
                            <div>
                                <img src={PersonPic} className="proc-title_min font-work-all mt-5 mb-2" alt="Person" />

                            </div>
                            <div>                    <p className="jhon-doe-p">Jhony Doe</p>
                            </div>
                            <div>
                                <p className="jhondoe-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <img src={Quote1} className="quote_sign" alt="Quote Sign" />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </React.Fragment>

}



/*
 <div className="col-md preview_box">
                    <div className="person_review">
                        <p className="">Person</p>
                        <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    </div>
                    <div className="slider_circle" />

                </div>
                */