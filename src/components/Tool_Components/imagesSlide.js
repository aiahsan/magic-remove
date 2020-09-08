import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import ImgBox from './backgroundImg';
import ColorBox from '../Tool_Components/colorBox';
import { BsCloudUpload } from 'react-icons/bs';
export default (img) => {
    const [images, setImages] = useState([{ id: 1, src: 'https://images.pexels.com/photos/413195/pexels-photo-413195.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260' }
        ,
    { id: 2, src: 'https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 3, src: 'https://images.pexels.com/photos/242201/pexels-photo-242201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 4, src: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 5, src: 'https://images.pexels.com/photos/552791/pexels-photo-552791.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 6, src: 'https://images.pexels.com/photos/1008000/pexels-photo-1008000.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 7, src: 'https://images.pexels.com/photos/326311/pexels-photo-326311.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 8, src: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' },
    { id: 9, src: 'https://images.pexels.com/photos/96627/pexels-photo-96627.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }]);

    const [colors, setColors] = useState([{ id: 1, color: 'black' }
        ,
    { id: 2, color: 'green' },
    { id: 3, color: 'yellow' },
    { id: 4, color: 'blue' },
    { id: 5, color: 'green' },
    { id: 6, color: 'orange' },
    { id: 7, color: 'black' },
    { id: 8, color: 'black' },
    { id: 9, color: 'black' }
    ]);

    return <Carousel>
        <Carousel.Item>
            <div className="sliderItems-box">
                <div className="back-bg-box">
                    <BsCloudUpload style={{ marginLeft: 10, fontSize: 38 }} />

                </div>
                {
                    images.map(x => <ImgBox img={img.img} backImage={x.src} />)
                }
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="sliderItems-box">

                {
                    colors.map(x => <ColorBox img={img.img} color={x.colors} />)

                }
            </div>
        </Carousel.Item>
    </Carousel>
}