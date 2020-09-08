import React from 'react';
import {Button} from 'react-bootstrap'
export default ({head,para})=><div className="more-api-box mt-4">
    <div className="more-api-img" ></div>
    <div className="more-api-btm">
    <div className="container mt-3">
    <p className="more-api-h">{head}</p>
    <p className="more-api-p">{para}</p>
    <Button className="btn more-api-btn" >Download</Button>
    </div>
    </div>
</div>