import React from 'react'
export default ({img,backImage})=>{
    return <div>
        <img className="back-bg-box" src={img} style={{ backgroundImage: `url(${backImage})` }} />
    </div>

}