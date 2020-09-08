import React from 'react'
import {Breadcrumb, Button} from 'react-bootstrap';

export default ({link1,link2})=>
<Breadcrumb className="breadcrumb_api" >
                        <Breadcrumb.Item className="breadcrumb_api-link2" href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active className="breadcrumb_api-link">Pricing</Breadcrumb.Item>
                    </Breadcrumb>