import React from 'react'
import PropTypes from 'prop-types'
import classes from './MacroProduct.module.css'
import { Link } from 'react-router-dom'
import  {Product, Products} from '../../../js/dataStructures'
// classification means whether the product is new or old.
const MacroProduct = (props) => {
    const {image, newPrice, name, discount, classification,category,oldPrice}=props; 
    let products = new Products()
    const productRating =()=>{
        return <div> product rating</div>
    }
  return (
    <div className={classes.product}>
        <div className={classes.productImgContainer}>
            <img src={image} alt=""/>
            <div className={classes.discount}>-{discount}%</div>

            <div className={classes.productDesc}>
                
                <span className={classes.classification}>{classification}</span>
            </div>
        </div>
        <div className={classes.productBody}>
            <p id={classes.productCat}>{category}</p>
            <h3 id={classes.productName}><Link to="/easy-shopping/productDisplay">{name}</Link></h3>

            <div className={classes.prices}>
                <h4 className={classes.productNewPrice}>R{newPrice}</h4>
                
                <del className={classes.productOldPrice}>R{oldPrice}</del>
            </div>
            <div className={classes.productRatingCtn}>
                {productRating()}
            </div>
            <div className={classes.wishListAndQuickViewBtn}>
                <button className={classes.addToWishList}> <span className={classes.addToWishListAndQuickViewText}>add to wishlist</span></button>
                <button className={classes.quickViewBtn}><span className={classes.addToWishListAndQuickViewText}>quick view</span></button>
            </div>
        </div>
        <div className={classes.addToCartBtnCnt}>
            <button className={classes.addToCartBtn} onClick={()=>{
            let allProducts = products.getProducts()
            allProducts.push(<h4>testing</h4>)
            products.setProducts(allProducts)
            alert("added to cart")
            }}> add to cart</button>
        </div>
    </div>
  )
}


export default MacroProduct