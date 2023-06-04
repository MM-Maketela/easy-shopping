import React from 'react'
import { Link } from "react-router-dom";
import classes  from './Navigation.module.css'
export const Navigation = () => {
  return (
    <nav id={classes.Navigation}>
			
				<div id={classes.navItemContainer}>
					<ul id={classes.navItems}>
						<li><Link to='/easy-shopping' id={classes.item}>Home</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category" >Hot Deals</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category">Categories</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category">Laptops</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category">Smartphones</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category">Cameras</Link></li>
						<li><Link  id={classes.item} to="/easy-shopping/category">Accessories</Link></li>
					</ul>
				</div>
		</nav>
  )
}
