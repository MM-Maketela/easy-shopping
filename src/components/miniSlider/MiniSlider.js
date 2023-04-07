import React from 'react'
import PropTypes from 'prop-types'
import classes from './MiniSlider.module.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const MiniSlider = props => {

    const productList = props.list;
    const productsToMap = [productList[0],productList[1],productList[2]];
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 1024 },
        items: 1
      },
      desktop: {
        breakpoint: { max: 1024, min: 800 },
        items: 1
      },
      tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 1
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    const products = () => {
        return productsToMap.map((product,index )=>  <div key={index} className={classes.gridItem}>{product}</div>)
    }
  return (


    <Carousel responsive={responsive} 
      //  infinite={true}
    >
      <div className={classes.miniSlider}>
        {
       products()
       }
      </div>
      <div className={classes.miniSlider}>
        {
       products()
       }
      </div>
      <div className={classes.miniSlider}>
        {
       products()
       }
      </div>
      </Carousel>
    
  )
}

export default MiniSlider