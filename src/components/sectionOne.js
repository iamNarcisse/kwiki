import React, { Component } from 'react';
import photo from '../assets/img/food1.jpg';
import { Carousel} from 'react-bootstrap';

class SectionOne extends Component {
    render() {
        return (
            <Carousel >
                <Carousel.Item className="carousel">
                    <img  alt="900x500" src={photo} />
                    <Carousel.Caption>
                        <h3>So delicious</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img  alt="900x500" src={photo} />
                    <Carousel.Caption>
                        <h3>So so Delicious</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel">
                    <img  alt="900x500" src={photo} />
                    <Carousel.Caption>
                        <h3>So so nice</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}
export default SectionOne;