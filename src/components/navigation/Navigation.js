import React from 'react'
import {Link} from 'react';
import classes  from './Navigation.module.css'
export const Navigation = () => {
  return (
    <nav id={classes.Navigation}>
			
				<div id={classes.navItemContainer}>
					<ul id={classes.navItems}>
						<li><a href="#" id={classes.item}>Home</a></li>
						<li><a  id={classes.item} href="#" >Hot Deals</a></li>
						<li><a  id={classes.item} href="#">Categories</a></li>
						<li><a  id={classes.item} href="#">Laptops</a></li>
						<li><a  id={classes.item} href="#">Smartphones</a></li>
						<li><a  id={classes.item} href="#">Cameras</a></li>
						<li><a  id={classes.item} href="#">Accessories</a></li>
					</ul>
				</div>
		</nav>
  )
}
