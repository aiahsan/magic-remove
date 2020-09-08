import React from "react";
import Heading from "../components/headingComp";
import NavBar from "../components/Navbar";
import BreadCrum from "../components/breadCrum";
import Head from "../components/headingComp";
import { RiFileCopyLine } from "react-icons/ri";
import { Button } from "react-bootstrap";
import { BsCodeSlash } from "react-icons/bs";
import ApiBox from '../components/apiBox';
import Footer from '../components/footer1';
const stringAPI =
  "$ch = curl_init(); $data=array( 'file_type' =>'image_url', 'image' =>'http://dev.magicremove.ch/public/images/no_remove_bg.png', 'api_key' =>'Ns0CilKwq5NhonjTAahF5UGq', ); curl_setopt($ch, CURLOPT_URL, 'http://dev.magicremove.ch/api/removebg'); curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); curl_setopt($ch, CURLOPT_POST, 1); curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data)); $headers = array(); $headers[] = 'Accept: application/json'; $headers[] = 'Content-Type: application/json'; curl_setopt($ch, CURLOPT_HTTPHEADER, $headers); $result = curl_exec($ch); if (curl_errno($ch)) { echo 'Error:' . curl_error($ch); } curl_close($ch);";
export default () => {
  return (
    <>
      <NavBar />
      <BreadCrum />
      <Head
        head="Background Removal API"
        para="Remove the background of any image* with 1 API call"
      />
      <div className="container margin-top10">
        <div className="API-Box">
          <div className="apiCopyBtn">
            {" "}
            <a>
              <RiFileCopyLine />
              Copy
            </a>
          </div>
          <p className="API-String">
            <a>{stringAPI}</a>
          </p>
        </div>
      </div>
      <div className="test-label">
        <p>
          Any image that has a foreground (tested with people, products,
          animals, cars, etc.)
        </p>
      </div>

      <div className="flexBox">
        <Button variant="" active className="p-3 theme-btn">
          {" "}
          <BsCodeSlash /> Get API Key
        </Button>
      </div>
      <div className="related-api-p">
        <p className="realted-api">Related APIS</p>
        <div className="row">
            <div className="col-md-3 col-lg-3"><ApiBox head="Windows / Mac / Linux" para="Lorem Ipsum is simply dummy text of the printing and typesetting" /></div>
            <div className="col-md-3 col-lg-3"><ApiBox head="Windows / Mac / Linux" para="Lorem Ipsum is simply dummy text of the printing and typesetting" /></div>
            <div className="col-md-3 col-lg-3"><ApiBox head="Windows / Mac / Linux" para="Lorem Ipsum is simply dummy text of the printing and typesetting" /></div>
            <div className="col-md-3 col-lg-3"><ApiBox head="Windows / Mac / Linux" para="Lorem Ipsum is simply dummy text of the printing and typesetting" /></div>
        </div>
      </div>
<div >
<Footer/>

</div>
    </>
  );
};

//
//
/*

*/
