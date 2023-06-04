import React from 'react'
import PropTypes from 'prop-types'
import classes from "./MiniProduct.module.css"
import { Link } from 'react-router-dom'
const MiniProduct = props => {
    const {image, newPrice, name,oldPrice, category}=props;
  return (
    <div id={classes.miniProduct}>
        <div className={classes.productImgContainer}>
            <img src={image} alt=""/>
        </div>
        <div className={classes.productDesc}>
            <p className={classes.productCat}>{category}</p>
            <h3 className={classes.productName}><Link to="/easy-shopping/productDisplay">{name}</Link></h3>
            <div className={classes.productPrices}>
              <div className={classes.productPrice} >R{newPrice}</div>
            <del className={classes.productOldPrice}>R{oldPrice}</del>
            </div>
        </div>
    </div>
  )
}



export default MiniProduct