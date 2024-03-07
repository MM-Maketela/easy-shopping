import React from 'react'
import PropTypes from 'prop-types'
import classes from './MacroProduct.module.css'
import { Link } from 'react-router-dom'
import  {Product, Products} from '../../../js/dataStructures'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
// classification means whether the product is new or old.
const MacroProduct = (props) => {
    const {image, newPrice, name, discount, classification,category,oldPrice,products,id,functionality}=props; 
    const {addProduct,removeProduct,increment, decrement,countItems, subtotal} = functionality
    const path = '/easy-shopping/productDisplay/'+id
    let _src = "data:image/*;base64,"+image
    const productRating =()=>{
        return <div>4.5</div>
    }
  return (
    <div className={classes.product}>
        <div className={classes.productImgContainer}>
            <img src={_src}     alt=""/>
            <div className={classes.discount}>-{discount}%</div>

            <div className={classes.productDesc}>
                
                <span className={classes.classification}>{classification}</span>
            </div>
        </div>
        <div className={classes.productBody}>
            <p id={classes.productCat}>{category}</p>
            <h3 id={classes.productName}><Link  to={path}> {name}</Link></h3>
            <div className={classes.prices}>
                <h4 className={classes.productNewPrice}>R{newPrice}</h4>
                
                <del className={classes.productOldPrice}>R{oldPrice}</del>
            </div>
            <div className={classes.productRatingCtn}>
                {productRating()}
            </div>
        </div>
        <div className={classes.wishListAndQuickViewBtn}>
                <button className={classes.addToWishList}> <span className={classes.addToWishListAndQuickViewText}>add to wishlist</span></button>
                <button className={classes.quickViewBtn}><span className={classes.addToWishListAndQuickViewText}>quick view</span></button>
        </div>
        <div className={classes.addToCartBtnCnt}>
            <button className={classes.addToCartBtn} onClick={()=>{
            let productToAdd = {id:id,name:name,qty:1,price:newPrice,rating:productRating(), image:image}
            addProduct(products,productToAdd)
            countItems(1)
            subtotal(productToAdd.price)
            toast.success(`Item ${name} added to cart.`, { position: toast.POSITION.TOP_CENTER, autoClose: 2000 });
            }}> add to cart</button>
        </div>
        
    </div>
  )
}


export default MacroProduct