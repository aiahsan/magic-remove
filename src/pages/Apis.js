import React from 'react';
import Navbar1 from "../components/Navbar";
import APIS from "../components/Apis";
import Footer1 from '../components/footer1'
export default ()=>{
    return <>
        <Navbar1/>
      <div style={{marginBottom:100}}>
      <APIS/>
      </div>
      <Footer1/>

    </>
}