import React from 'react'
import classes from './Cart.module.css'
import  {Product, Products} from '../../js/dataStructures'
export const Cart = () => {
  let products = new Products()
  let cartItems = products.getProducts()
  let numberOfItems = cartItems.length
  let buttonText = numberOfItems > 0 ? "BUY PRODUCTS":"CONTINUE SHOPPING"
  return (
    <div id={classes.cart}>
        <h2>CARTS ITEMS ({numberOfItems})</h2>
        <div className={classes.itemListGrid}>
          {
            cartItems.map((product,index) => <div key={index}>{product}</div>)
          }
        </div>
        <button id={classes.buy} >{buttonText}</button>
    </div>
  )
}
