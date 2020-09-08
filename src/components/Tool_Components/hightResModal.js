import React from 'react';
import { Modal, Button,OverlayTrigger,Tooltip } from 'react-bootstrap';
export default (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h1 className="upload-title-modal txt-center" >Edit Full Image</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="or-Img mt-3">
                <img style={{ maxWidth: 400 }} src={props.img.orignalImage} />
              </div>
              <p>Full Image </p>

            </div>
            <div className="col-md-4">
              <div className="upload-parent1">
                <h1 className="upload-title__color" >1 Credit</h1>
                <OverlayTrigger
                  
                  placement="top"
                  overlay={
                    <Tooltip >
                      <p>Images with up to 0.25 megapixels (e.g. 625x400) are always free on remove.bg.</p>
                      <p>Higher resolution downloads up to 25 megapixels (e.g. 6250x4000) are available for 1 credit per image.</p>
                      <a>Learn More</a>
        </Tooltip>
                  }
                >
                 <a>What are credits?</a>
                </OverlayTrigger>
              </div>
            </div>

          </div>
        </div>
        <div className="upload-parent borderTB pt-4">
          <h1 className="upload-title-modal txt-center">Edit Full Image</h1>
          <button className="remove-backgroundBtn btn btn-primary mb-2 p-2">Sign Up</button>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <p>Already have an account? <a>Login</a></p>
      </Modal.Footer>
    </Modal>
  );
}
