import React from 'react'
import classes from './ProductDisplay.module.css'
import product01 from '../../assets/images/product01.png'
import { Link } from 'react-router-dom'
import {AiOutlinePlus,AiOutlineMinus,AiOutlineShoppingCart,AiOutlineHeart} from 'react-icons/ai/index.esm'
export const ProductDisplay = () => {
	const signSize = 13;
  return (
    <div id={classes.productDisplay}>
			{/* <!-- container --> */}
			<div className="container">
				{/* <!-- row --> */}
				<div className={classes.gridDisplay}>
				
					<div className={classes.images}>
						<div id={classes.productImages}>
							<div className={classes.productPreview}>
								<img src={product01} alt=""/>
							</div>

							<div className={classes.productPreview}>
								<img src={product01} alt=""/>
							</div>

							<div className={classes.productPreview}>
								<img src={product01} alt=""/>
							</div>

							<div className={classes.productPreview}>
								<img src={product01} alt=""/>
							</div>
						</div>
            <div id={classes.productMainImage}>
							
								<img src={product01} alt=""/>
						</div>
            </div>
				
						<div className={classes.productDetails}>
							<h2 className={classes.productName}>product name</h2>
							<div className={classes.productRatingContainer}>
								<div className={classes.productRating}>
									product rating
								</div>
								<Link  id={classes.a} className="review-link" to="#">10 Review<small>(s)</small> | Add your review</Link>
							</div>
							<div className={classes.inStockAndPriceContainer}>
								<h3 className={classes.productPrice}>R980.00  <small><del className={classes.productOldPrice}>R990.00</del></small></h3>
								<span className={classes.productAvailable}>In Stock</span>
							</div>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

							<div className={classes.productOptions}>
								<label>
									SIZE
									<select className={classes.inputSelect}>
										<option value="0">X</option>
									</select>
								</label>
								<label>
								COLOR
									<select className={classes.inputSelect}>
										<option value="0">Red</option>
									</select>
								</label>
							</div>

							<div className={classes.addToCart}>
								<div className={classes.qtyLabel}>
									<div id={classes.qtyText}>
										QTY
									</div>
							
								<div className={classes.inputAndSignsContainer}>
								<div className={classes.inputNumber}>
									<input id="price-min" type="number"/>
									
								</div>
								<div id={classes.signs}>
									<div><div><AiOutlinePlus size={signSize}/></div></div>
									<div><div><AiOutlineMinus size={signSize} /></div></div>
								</div>
								</div>
								</div>
								<button className={classes.addToCartBtn}>< AiOutlineShoppingCart className={classes.shoppingCart} size={15}/> <div id={classes.addToCart}>ADD TO CART</div></button>
							</div>

							<ul id={classes.ul} className={classes.productBtns}>
								<li ><Link  to="#" id={classes.listElementLnk} >< AiOutlineHeart className={classes.hearIcon} size ={17}/> <div>add to wishlist</div></Link></li>
							</ul>

							<ul id={classes.ul} className={classes.productLinks}>
								<li>Category:</li>
								<li><Link id={classes.a} to="#">Headphones</Link></li>
			
							</ul>

							

						</div>
				

					
				</div>
        <div className="col-md-12">
						<div id="product-tab">
							{/* <!-- product tab nav --> */}
							
								{/* <li className="active"><Link data-toggle="tab" to="#tab1">Description</Link></li> */}
								<div className={classes.productSubjectLine}> Product details</div>
								{/* <li><Link data-toggle="tab" to="#tab3">Reviews (3)</Link></li> */}
							
							{/* <!-- /product tab nav --> */}

							{/* <!-- product tab content --> */}
							<div className="tab-content">
								{/* <!-- tab1  --> */}
								
								{/* <!-- /tab1  --> */}

								{/* <!-- tab2  --> */}
								
										<div className={classes.productInfo}>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
										</div>
								
								
								{/* <!-- /tab2  --> */}

								{/* <!-- tab3  --> */}
								{/* <div id="tab3" className="tab-pane fade in">
									<div className="row">
										
										<div className="col-md-3">
											<div id="rating">
												<div className="rating-avg">
													<span>4.5</span>
													<div className="rating-stars">
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star"></i>
														<i className="fa fa-star-o"></i>
													</div>
												</div>
												<ul className="rating">
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-progress">
															<div ></div>
														</div>
														<span className="sum">3</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div ></div>
														</div>
														<span className="sum">2</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
													<li>
														<div className="rating-stars">
															<i className="fa fa-star"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
															<i className="fa fa-star-o"></i>
														</div>
														<div className="rating-progress">
															<div></div>
														</div>
														<span className="sum">0</span>
													</li>
												</ul>
											</div>
										</div>
										
										<div className="col-md-6">
											<div id="reviews">
												<ul className="reviews">
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
													<li>
														<div className="review-heading">
															<h5 className="name">John</h5>
															<p className="date">27 DEC 2018, 8:0 PM</p>
															<div className="review-rating">
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star"></i>
																<i className="fa fa-star-o empty"></i>
															</div>
														</div>
														<div className="review-body">
															<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
														</div>
													</li>
												</ul>
												<ul className="reviews-pagination">
													<li className="active">1</li>
													<li><Link to="#">2</Link></li>
													<li><Link to="#">3</Link></li>
													<li><Link to="#">4</Link></li>
													<li><Link to="#"><i className="fa fa-angle-right"></i></Link></li>
												</ul>
											</div>
										</div>
										
										<div className="col-md-3">
											<div id="review-form">
												<form className="review-form">
													<input className="input" type="text" placeholder="Your Name"/>
													<input className="input" type="email" placeholder="Your Email"/>
													<textarea className="input" placeholder="Your Review"></textarea>
													<div className="input-rating">
														<span>Your Rating: </span>
														<div className="stars">
															<input id="star5" name="rating" value="5" type="radio"/><label for="star5"></label>
															<input id="star4" name="rating" value="4" type="radio"/><label for="star4"></label>
															<input id="star3" name="rating" value="3" type="radio"/><label for="star3"></label>
															<input id="star2" name="rating" value="2" type="radio"/><label for="star2"></label>
															<input id="star1" name="rating" value="1" type="radio"/><label for="star1"></label>
														</div>
													</div>
													<button className="primary-btn">Submit</button>
												</form>
											</div>
										</div>
									</div>
								</div> */}
							</div>
							{/* <!-- /product tab content  --> */}
						</div>
					</div>
			</div>
		</div>
  )
}
