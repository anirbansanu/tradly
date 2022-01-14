import React, { Component } from 'react';
import logo from '../../../product.jpg';
import b from '../../../BANNER.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default class ProductCarousel extends Component {
    render() {
        return (
            <Carousel className='shadow'>
                <div>
                    <img src={logo} alt="..."/>
                    <p className="legend">Picture 1</p>
                </div>
                <div>
                    <img src={b} alt="..."/>
                    <p className="legend">Picture 2</p>
                </div>
                <div>
                    <img src={logo} alt="..."/>
                    <p className="legend">Picture 3</p>
                </div>
            </Carousel>
        )
    }
}
