import React, { Component } from 'react';
import photo from '../assets/img/product02.png';
import { Carousel} from 'react-bootstrap';


class SectionOne extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <Carousel.Item >
                    <img width={900} height={500} alt="900x500" src={photo} />
                    <br />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={photo} /><br />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={photo} />
 <br />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    }
}

export default SectionOne;