import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa';
import { FiRotateCcw, FiRotateCw } from 'react-icons/fi';
import { GiPencilBrush } from 'react-icons/gi';
import { GrErase } from 'react-icons/gr';
import { FiCrop } from "react-icons/fi";
import { BsBrush } from 'react-icons/bs';
import { GoMirror } from 'react-icons/go'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { CgFormatText } from 'react-icons/cg'
import { CgShapeSquare } from 'react-icons/cg'
import Slider from 'react-rangeslider';
import ImgBox from '../Tool_Components/backgroundImg'
import ImageSlider from '../Tool_Components/imagesSlide'
import 'react-rangeslider/lib/index.css';
import FunImage from './canvasBackImage';
import { Stage, Layer, Group, Text, Rect, Arrow, Star, Circle, Shape, TextPath, Label, Tag } from "react-konva";

export default (props) => {

  console.log(props);
  const [brushSize, setbrushSize] = useState(5);
  const stageRef = React.useRef();
  const [stageSize, setStageSize] = useState({ width: 576, height: 498 });
  const [selectedShapeName, setSelectedShape] = useState("");


  const handleStageMouseDown = e => {

    //all objects un selected
    if (e.target === e.target.getStage()) {
        setSelectedShape("");
        return;
    }


    // clicked on transformer - do nothing
    const clickedOnTransformer =
        e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
        return;
    }

    // find clicked rect by its name
    const name = e.target.name();
    // const rect = this.state.rectangles.find(r => r.name === name);
    if (name) {
        setSelectedShape(name);
    } else {
        setSelectedShape("");
    }
};

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ backgroundColor: 'transparent' }}
      className="mdc-1"
    >

      <div className="">
        <div className="row">
          <div className="col-md-8 pd-0" style={{ backgroundColor: 'white' }}>
            <div className="or-Img">
              <div className="tool-control-head" >
                <div>
                </div>
                <div className="">
                  <button className="btn editbar-crbtn editbar-crbtn-color"><GoPlus /></button>
                  <label className="editbar-crbtn-color">100%</label>
                  <button className="btn editbar-crbtn editbar-crbtn-color"><FaMinus /></button>
                </div>

                <div className="">
                  <button className="btn editbar-crbtn editbar-crbtn-color"><FiRotateCcw /></button>
                  <button className="btn editbar-crbtn editbar-crbtn-color"><FiRotateCw /></button>
                </div>
              </div>
              <div onDrop={e => e} onDragOver={e => e.preventDefault()}>
                <Stage width={stageSize.width}
                  height={stageSize.height}
                  ref={stageRef}
                  onMouseDown={handleStageMouseDown}

                ><Layer >
                    <FunImage img={{ img: props.img.removedImage, width: stageSize.width, height: stageSize.height }} />

                  
                  </Layer>

                </Stage>
              </div>

            </div>

          </div>
          <div className="col-md-1">

          </div>
          <div className="col-md-3 edit-p-bar" >
            <div className="edit-p-text"><GiPencilBrush className="edit-pencil-icon" />Edit Picture</div>
            <div className="edit-bar-parent-btn">
              <button className="edit-bar-p-btn edit-bar-e-btn editbar-crbtn-color"><GrErase className="editbar-crbtn-color mr-1" />Erase</button>
              <button className="edit-bar-p-btn edit-bar-r-btn editbar-crbtn-color">Restore</button>
            </div>
            <div className="editor-parent">
              <p className="editor-lbl">Brush Size</p>
              <Slider
                min={1}
                max={100}
                step={1}
                value={brushSize}
                 />
              <div className="ediotr-panel">
                <button><FiCrop /></button>
                <button><BsBrush /></button>
                <button><GoMirror /></button>
                <button><RiDeleteBin6Line /></button>
                <button><CgFormatText /></button>
                <button><CgShapeSquare /></button>
              </div>
              <p className="editor-lbl mt-5">Frames / Backgrounds</p>
              <ImageSlider img={require('../../img/desktopSS.png')} />
            </div>

          </div>

        </div>
      </div>

    </Modal>
  );
}
