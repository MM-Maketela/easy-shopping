import React from 'react'
import classes from './Footer.module.css'
export const Footer = () => {
  return (
    <footer id={classes.footer}>
			<div className={classes.section}>
				<div className={classes.container}>
					<div className={classes.row}>
						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>About Us</h3>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
								<ul className={classes.footerLinks}>
									<li><a href="#"><i className="fa fa-map-marker"></i>1734 Stonecoal Road</a></li>
									<li><a href="#"><i className="fa fa-phone"></i>+021-95-51-84</a></li>
									<li><a href="#"><i className="fa fa-envelope-o"></i>email@email.com</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Categories</h3>
								<ul className={classes.footerLinks}>
									<li><a href="#">Hot deals</a></li>
									<li><a href="#">Laptops</a></li>
									<li><a href="#">Smartphones</a></li>
									<li><a href="#">Cameras</a></li>
									<li><a href="#">Accessories</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Information</h3>
								<ul className={classes.footerLinks}>
									<li><a href="#">About Us</a></li>
									<li><a href="#">Contact Us</a></li>
									<li><a href="#">Privacy Policy</a></li>
									<li><a href="#">Orders and Returns</a></li>
									<li><a href="#">Terms & Conditions</a></li>
								</ul>
							</div>
						</div>

						<div className="col-md-3 col-xs-6">
							<div className={classes.footer}>
								<h3 className={classes.footerTitle}>Service</h3>
								<ul className={classes.footerLinks}>
									<li><a href="#">My Account</a></li>
									<li><a href="#">View Cart</a></li>
									<li><a href="#">Wishlist</a></li>
									<li><a href="#">Track My Order</a></li>
									<li><a href="#">Help</a></li>
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
