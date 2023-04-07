import React from 'react'
import PropTypes from 'prop-types'
import classes from './Slider.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = (props) => {
    const productList = props.list;
    const products =() => {
        return productList.map((product,index) =>(<div key={index}>{product}
          </div>))
    }
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 4
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
        <Carousel responsive={responsive}
        // infinite={true}
        >
          {products()}
      </Carousel>
  
  )
}


export default Slider