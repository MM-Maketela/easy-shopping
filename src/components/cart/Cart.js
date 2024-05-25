import React, { useState } from "react";
import classes from "./Cart.module.css";
import { Link } from "react-router-dom";
export const Cart = (props) => {
  const { functionality } = props;
  const { removeProduct, increment, decrement, numberOfItems, countItems, subtotal } = functionality;
  let cartItems = props.products;
  let buttonText = numberOfItems > 0 ? "BUY PRODUCTS" : "CONTINUE SHOPPING";
  const { handleCartState } = props;

  return (
    <div id={classes.cart}>
      <h2>CARTS ITEMS ({numberOfItems})</h2>

      {cartItems.length > 0 ? (
        <div className={classes.itemListGrid}>
          {cartItems.map((product) => (
            <div key={product.id} id={classes.cartItemContainer}>
              <div className={classes.productContent}>
                <div id={classes.productImgContainer}>
                  <img src={"data:image/*;base64," + product.image} id={classes.productImg} />
                </div>
                <div className={classes.namePrice}>
                  <div id={classes.itemName}>{product.name}</div>
                  <div id={classes.itemPrice}>{product.price}</div>
                </div>
                <div className={classes.qtyRating}>
                  <div id={classes.itemQty}>{product.qty}</div>
                  <div id={classes.itemRating}>{product.rating}</div>
                </div>
              </div>

              <div id={classes.buttons}>
                <button
                  type="button"
                  id={classes.Btn1}
                  onClick={() => {
                    increment(cartItems, product.id);
                    countItems(1);
                    subtotal(Number(product.price) / Number(product.qty));
                  }}
                >
                  +
                </button>
                <button
                  type="button"
                  id={classes.Btn2}
                  onClick={() => {
                    decrement(cartItems, product.id);
                    countItems(-1);
                    subtotal(-1 * (Number(product.price) / Number(product.qty)));
                  }}
                >
                  -
                </button>
                <button
                  type="button"
                  className={classes.removeItem}
                  onClick={() => {
                    removeProduct(cartItems, product.id);
                    subtotal(product.price * -1);
                    countItems(-1 * product.qty);
                  }}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h5 id={classes.cartEmpty}> CART EMPTY </h5>
      )}

      {numberOfItems > 0 ? (
        <div className={classes.subtotal}>
          <h4>Subtotal</h4>
          <div>R{props.total}</div>
        </div>
      ) : (
        <div></div>
      )}
      <div id={classes.buy}>
        <Link
          to={numberOfItems > 0 ? "" : ""}
          id={classes.buttonLInk}
          onClick={() => {
            handleCartState();
          }}
        >
          {" "}
          {buttonText}
        </Link>
      </div>
    </div>
  );
};
