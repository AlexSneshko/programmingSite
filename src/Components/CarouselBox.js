import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import mountainImg from '../Assets/mountains.jpg'
import mountainImg2 from '../Assets/mountains2.jpg'
import mountainImg3 from '../Assets/mountains3.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={mountainImg}
                alt="mountain1"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={mountainImg2}
                alt="mountain1"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img 
                className='d-block w-100'
                src={mountainImg3}
                alt="mountain1"
            />
            <Carousel.Caption>
                <h3>Fores image</h3>        
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
