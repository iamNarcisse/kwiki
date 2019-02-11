import React from 'react';
import carousel from '../assets/img/carousel.jpg';
import carousel1 from '../assets/img/carousel1.jpg';
import carousel2 from '../assets/img/carousel2.jpg';

import { Carousel } from 'react-bootstrap';

const SectionOne = (props) => {
    return (
        <Carousel >
            <Carousel.Item className="carousel">
                <img alt="900x500" src={carousel} />
                <Carousel.Caption>
                    {/*    <h3>So delicious</h3>*/}
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel">
                <img alt="900x500" src={carousel1} />
                <Carousel.Caption>
                    {/*<h3>So so Delicious</h3>*/}
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel">
                <img alt="900x500" src={carousel2} />
                <Carousel.Caption>
                    {/*<h3>So so nice</h3>*/}
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}
export default SectionOne;