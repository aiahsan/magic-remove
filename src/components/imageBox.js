import React,{useState} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { MdClose } from 'react-icons/md';
import { SplitButton, Dropdown } from 'react-bootstrap';
import HighResolutionModal from './Tool_Components/hightResModal';
import ImageTool from './Tool_Components/imagetool';
export default ({ img, handleRemove }) => {

    const [modalShow,setModalShow]=useState(false);
    const [imageModalShow,setimageModalShow]=useState(false);
//
    return <div className="container mb-5">
        <div>
            <button className="btn btn-xros" onClick={() => handleRemove(img.id)}><MdClose /></button>
        </div>
        <Tabs defaultActiveKey="Images" defaultActiveKey="removedBackground" id="uncontrolled-tab-example">
            <Tab eventKey="orignal" title="Orignal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="or-Img mt-3">
                                <img style={{ maxWidth: 500 }} src={img.orignalImage} />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="upload-parent mt-p50">
                                <button className="option-btn btn active btn-">Download</button>
                                <p className="proc-title_min font-work-all mt-2">Preview Image 500 × 500</p>
                                <button className="option-btn btn btn-outline-success">Download High-Res</button>
                                <p className="proc-title_min font-work-all mt-2">Full Image 1024 × 1024 </p>

                            </div>
                        </div>
                    </div>
                </div>
            </Tab>
            <Tab eventKey="removedBackground" title="Removed Background">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="or-Img mt-3">
                                <div style={{ float: 'right' }}>
                                    <SplitButton

                                        id={`dropdown-button-drop-${img.id}`}
                                        drop="down"
                                        variant="secondary"
                                        title="Edit"
                                        onClick={()=>setimageModalShow(!imageModalShow)}
                                    >
                                        <Dropdown.Item eventKey="1"  onClick={()=>setimageModalShow(!imageModalShow)}> Preview</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" onClick={()=>setModalShow(!modalShow)} >High-Res</Dropdown.Item>

                                    </SplitButton>
                                </div>
                                <img style={{ maxWidth: 500 }} src={img.orignalImage} />

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="upload-parent mt-p50">
                                <button className="option-btn btn active btn-">Download</button>
                                <p className="proc-title_min font-work-all">Preview Image 500 × 500</p>
                                <button className="option-btn btn btn-outline-success">Download High-Res</button>
                                <p className="proc-title_min font-work-all">Full Image 1024 × 1024 </p>

                            </div>
                        </div>
                    </div>
                </div>
            </Tab>

        </Tabs>
        <HighResolutionModal
        show={modalShow}
        onHide={() => setModalShow(!modalShow)}
        img={img}
      />
       <ImageTool
        show={imageModalShow}
        onHide={() => setimageModalShow(!imageModalShow)}
        img={img}
      />
    </div>
}