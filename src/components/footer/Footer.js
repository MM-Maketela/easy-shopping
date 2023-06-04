import React from 'react'
import classes from './Footer.module.css'
import { Link } from 'react-router-dom'
import {MdLocationPin,MdLocalPhone,MdEmail} from 'react-icons/md/index.esm'

export const Footer = () => {
	const iconSize = 15;
  return (
    <footer id={classes.footer}>
			<div className={classes.section}>
				<div className={classes.container}>
					<div className={classes.row}>
						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>About Us</h3>
								<p>test ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className={classes.footerLinks}>
									<li ><Link to="/" id={classes.listItem}><MdLocationPin  size={iconSize} color={"blue"} id={classes.footerIcon}/> <div id={classes.footerText}>1734 Stonecoal Road</div></Link></li>
									<li ><Link to="/" id={classes.listItem}><MdLocalPhone  size={iconSize} color={"blue"} id={classes.footerIcon}/><div id={classes.footerText}>+021-95-51-84</div></Link></li>
									<li ><Link to="/" id={classes.listItem}><MdEmail  size={iconSize} color={"blue"} id={classes.footerIcon}/> <div id={classes.footerText}>email@email.com</div></Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Categories</h3>
								<ul className={classes.footerLinks}>
									<li><Link to="/category">Hot deals</Link></li>
									<li><Link to="/category">Laptops</Link></li>
									<li><Link to="/category">Smartphones</Link></li>
									<li><Link to="/category">Cameras</Link></li>
									<li><Link to="/category">Accessories</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Information</h3>
								<ul className={classes.footerLinks}>
									<li><Link to="/aboutUs">About Us</Link></li>
									<li><Link to="/aboutUs">Contact Us</Link></li>
									<li><Link to="/privacyPolicy">Privacy Policy</Link></li>
									<li><Link to="/aboutUs">Orders and Returns</Link></li>
									<li><Link to="/privacyPolicy">Terms & Conditions</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Service</h3>
								<ul className={classes.footerLinks}>
									<li><Link to="/myProfile">My Account</Link></li>
									<li><Link to="/myCart">View Cart</Link></li>
									<li><Link to="/myWishList">Wishlist</Link></li>
									<li><Link to="/trackMyOrder">Track My Order</Link></li>
									<li><Link to="/help">Help</Link></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="bottom-footer" className="section">
				<div className="container">
					<div className="row">
						<div className={classes.finalSection}>
							<div className={classes.copyrights}>
								Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | this website is made by EasyShopping.
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
  )
}
