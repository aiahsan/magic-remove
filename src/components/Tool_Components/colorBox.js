import React from 'react'
export default ({img,color})=>{
    return <div>
        <img className="back-bg-box" src={img} style={{ backgroundColor:color }} />
    </div>

}