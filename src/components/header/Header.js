import React, { useState } from 'react'
import product01 from '../../assets/images/product01.png'
import product02 from '../../assets/images/product02.png'
import {Logo}  from '../logo/Logo'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import {AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai/index.esm'
import {Navigation} from '../navigation/Navigation'
import { Cart } from '../cart/Cart'
const iconSize = 25;
export const Header = (props) => {

	const [cartIsOpen, setCartIsOpen] = useState(false);
	const {numberOfItems}= props.functionality
	let numberOfWishListItems = 0;
	function handleCartState(){
		setCartIsOpen(!cartIsOpen)
	}
  return (
    <header>
			<div id={classes.topHeader}>
				<div className={classes.container}>
					<ul className={[classes.topHeaderLinks,classes.ul, classes.list].join(" ")}>
						<li><Link  to="/" id={classes.listItem}>+021-95-51-84</Link></li>
						<li><Link to="/" id={classes.listItem}> easyshopping@email.com</Link></li>
						<li><Link to="/" id={classes.listItem}> 1734 Stonecoal Road</Link></li>
					</ul>
					<ul className={[classes.ul,classes.list].join(" ")}>
						<li><Link to="/checkout" id={classes.listItem}>ZAR</Link></li>
						<li><Link to="/myProfile" id={classes.listItem}>My Account</Link></li>
					</ul>
				</div>
			</div>

			<div id={classes.header}>
				<div className={classes.container}>
					<div className={classes.row}>
						<div className={classes.logo}>
							<Logo/>
						</div>

						<div className={classes.headerSearchContainer}>
							<div className={classes.headerSearch}>
								<form>
									<select className={classes.categoryList}>
										<option value="0">All Categories</option>
										<option value="1">Category 01</option>
										<option value="1">Category 02</option>
									</select>
									<input className={classes.inputArea} placeholder="Search here"/>
									<button id={classes.searchBtn}>Search</button>
								</form>
							</div>
						</div>

						<div className={classes.headerCartWishlistCtnContainer}>
							<div className={classes.headerCartWishlistCtn}>
								<div className={classes.wishListContainer}>

										<div id={classes.wishlistIconContainer}>
										<AiOutlineHeart size={iconSize}   id={classes.whishListIcon}/>
										{numberOfWishListItems >0 ? <div id={classes.itemCounter}>0</div>:<div></div>}
										</div>
										<div className={classes.wishListMessage}>Your Wishlist</div>
										
									
								</div>

								<div className={classes.cartContainer}>
										<div  id={classes.cart}>
											<AiOutlineShoppingCart size={iconSize} onClick={()=>{ handleCartState()}} id={ classes.cartIconId}
											/>
											<div className={ cartIsOpen ? classes.cartOpen: classes.cartClosed}><Cart handleCartState = {handleCartState} products = {props.products} functionality={props.functionality} total={props.total} 
											/></div>
											{ numberOfItems>0 ? <div id={classes.cartItemCounter}>{numberOfItems}</div>:<div></div>}
											 
										</div>
										<div className={classes.cartMessage}>Your Cart
							
										</div>
										
								</div>
								
								
							</div>
							
						</div>
						{/* <div id={classes.cartItemCount}><div id={classes.qty}>3</div></div>
						<div id={classes.wishlistCount}><div id={classes.wishlistQty}>3</div></div> */}
					</div>
				</div>
			</div >
			<div id={classes.nav}><Navigation/></div>
		</header>
  )
}
