// src/components/bootstrap-carousel.component.js
import React from "react";

import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class slider extends React.Component {

    render() {
        return (
            <div>
                <center><div className='slider container-fluid' >
                    <div className="row">
                        <div className="col-sm-12">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://jssors8.azureedge.net/demos/image-slider/img/px-action-athlete-athletes-848618-image.jpg"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://jssors8.azureedge.net/demos/image-slider/img/px-bloom-blossom-flora-65219-image.jpg"
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>

                        </div>
                        <hr/>
                    </div>
                </div></center>
                {/* <hr/>
                <h1 className="scroll">Scroll Down</h1>
                <hr/> */}


            </div>
        )
    };
}

export default slider;