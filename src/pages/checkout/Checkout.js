import React from 'react'
import classes from './Checkout.module.css'
export const Checkout = () => {
  return (
    <div className={classes.outerContainer}>
      <div className={classes.border}><h2 id={classes.checkoutHeader}>CHECKOUT</h2></div>
      
    <div className={classes.checkoutContainer}>
      <div className={classes.billingInfo}>
        <h3 id={classes.billingHeader}>BILLING ADDRESS</h3>
        <ul className={classes.inputList}>
          <li id={classes.li}> <input placeholder='Name' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='Surname' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='Email' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='Address' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='City or Town' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='ZIP code' id={classes.input}/></li>
          <li id={classes.li}> <input placeholder='contact no:' id={classes.input}/></li>
          <li id={classes.li}> <input  type='checkbox' id={classes.checkbox}/>
              <label>
                create an account?
              </label>
          </li>
          <li id={classes.li}> 
            <textarea placeholder='order notes' id={classes.textarea}></textarea>  
          </li>
          

        </ul>
      </div>
      
      <div className={classes.paymentMethod}>
        {/* orderHeader */}
        <h3 id={classes.orderHeader}>YOUR ORDER</h3>
        {/* orderHeader */}

        {/* orderDetails */}
        <div id={classes.orderDetails}>
          <h4>PRODUCT</h4>
          <h4 id={classes.nthChild}>TOTAL</h4>
          <p className={classes.color}>1x Product name</p>
          <p id={classes.nthChild} className={classes.color}>R500</p>
          <p className={classes.color}>7x Product name</p>
          <p id={classes.nthChild} className={classes.color}>R1500</p>
          <p className={classes.color}>3x Product name</p>
          <p id={classes.nthChild} className={classes.color}>R200</p>
          <p className={classes.color}>Delivery</p>
          <h4 id={classes.nthChild} >FREE</h4>
          <h4 >TOTAL</h4>
          <h4 id={classes.nthChild} >R2200</h4>
          <div id={classes.paymentMethod}>
          <ul id={classes.paymentList}>
          <li id={classes.li}> <input  type='radio' id={classes.radio}/>
              <label>
              Direct Bank Transfer
              </label>
          </li>
          <li id={classes.li}> <input  type='radio' id={classes.radio}/>
              <label>
              Cheque Payment
              </label>
          </li>
          <li id={classes.li}> <input  type='radio' id={classes.radio}/>
              <label>
              Ozwo Payment Method
              </label>
          </li>
          <li id={classes.li}> <input  type='checkbox' id={classes.checkbox} className={classes.terms}/>
              <label>
              I've read and accept the terms & conditions
              </label></li>

          </ul>

        </div>
        

        </div>
        {/* orderDetails */}
        <div className={classes.placeOrderBtn}><button id={classes.placeOrderBtn}>PLACE ORDER</button></div>

        
        
        
      </div>
      </div>
    </div>
  )
}
