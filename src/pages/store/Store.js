import React from 'react'
import shop03 from '../../assets/images/shop03.png'
import shop02 from '../../assets/images/shop02.png'
import shop01 from '../../assets/images/shop01.png'

import product1 from '../../assets/images/product01.png'
import product2 from '../../assets/images/product02.png'
import product3 from '../../assets/images/product03.png'
import product4 from '../../assets/images/product04.png'
import product5 from '../../assets/images/product05.png'
import product6 from '../../assets/images/product06.png'
import product7 from '../../assets/images/product07.png'
import product8 from '../../assets/images/product08.png'
import product9 from '../../assets/images/product09.png'
import classes from './Store.module.css'
import MacroProduct from '../../components/product/macro-product/MacroProduct'
import Slider from '../../components/slider/Slider'
import MiniProduct from '../../components/product/mini-product/MiniProduct'
import MiniSlider from '../../components/miniSlider/MiniSlider'
import {AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram, AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai/index.esm'
import {Navigation} from '../../components/navigation/Navigation'
import CollectionCard from '../../components/conllectionCard/CollectionCard'
import { SectionNav } from '../../components/sectionNav/SectionNav'
import {BsArrowRightCircle} from 'react-icons/bs/index.esm'
import {FaFacebookF} from 'react-icons/fa/index.esm'

export const Store = () => {


	const sizeOfSocialMediaIcon = 15;
  return (
    <div id={classes.store} >
		
			<Navigation/>
        <div className={classes.section}>
			<div className={classes.container}>
				<div className={classes.row}>
					
					<CollectionCard  image = {shop01}  title = "collection title" />
					<CollectionCard  image = {shop02}  title = "collection title" />
					<CollectionCard  image = {shop03}  title = "collection title" />
				</div>
			</div>
		</div>

		<div className={classes.section}>
			<div className={classes.container}>
				<div className={classes.row1}>

					<div className={classes.row1header}>
						<div className={classes.row1InnerHeader}>
							<h3 className={classes.title}>New Products</h3>
							<SectionNav/>
						</div>
					</div>

					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab1" className="tab-pane active">
									<div className={classes.productSlider} data-nav="#slick-nav-1">
										
										<Slider list = {[<MacroProduct  {...{ 
											image: product1,
										 	newPrice:"300",
										  	name:"item",
										   	discount:"23",
										    classification :"new",
											category:"test",
											oldPrice :"250"}} />
											, <MacroProduct  {...{ 
												image: product2,
												 newPrice:"300",
												  name:"item",
												   discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product3,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product4,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product5,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />] }/>


									</div>
									<div id="slick-nav-1" className="products-slick-nav"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div id={classes.hotDeal} className={classes.section}>

			<div id={classes.leftImage}>
				<img src={product1}/>
			</div>
			<div className={classes.container}>
				<div className="row">
					<div className="col-md-12">
						<div className={classes.hotDeal}>
							<ul className={classes.hotDealCountDown}>
								<li id={classes.countDownElement}>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li id={classes.countDownElement}>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li id={classes.countDownElement}>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li id={classes.countDownElement}>
									<div>
										<h3>60</h3>
										<span>Secs</span>
									</div>
								</li>
							</ul>
							<h2 className="text-uppercase">hot deal this week</h2>
							<p>New Collection Up to 50% OFF</p>
							<a className={classes.shopNowBtn} href="#">Shop now  <BsArrowRightCircle size={15}/></a>
						</div>
					</div>
				</div>
			</div>
			<div id={classes.rightImage}>
				<img src={product2}/>
			</div>
		</div>

		<div className={classes.section}>
			<div className="container">
				<div className="row">

					<div className={classes.row1header}>
						<div className={classes.row1InnerHeader}>
							<h3 className={classes.title}>Top selling</h3>
							<SectionNav/>
						</div>
					</div>

					<div className="col-md-12">
						<div className="row">
							<div className="products-tabs">
								<div id="tab2" className="tab-pane fade in active">
								<Slider list = {[<MacroProduct  {...{ 
											image: product1,
										 	newPrice:"300",
										  	name:"item",
										   	discount:"23",
										    classification :"new",
											category:"test",
											oldPrice :"250"}} />
											, <MacroProduct  {...{ 
												image: product2,
												 newPrice:"300",
												  name:"item",
												   discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product3,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product4,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />
											,<MacroProduct  {...{ 
												image: product5,
													newPrice:"300",
													name:"item",
													discount:"23",
												classification :"new",
												category:"test",
												oldPrice :"250"}} />] }/>
									<div id="slick-nav-2" className="products-slick-nav"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div className={classes.section}>
			<div className="container">
				<div  className={classes.gridTopSellingProducts}>


					{/* column1 starts here */}
					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className={classes.title}>Top selling</h4>
						</div>

						<div className={classes.column1}>
							<MiniSlider    list = {[
							<MiniProduct  {...{
								image:product5,
								 name:"small item",
								 oldPrice:"300",
								  newPrice:"200",
								  category:"category"}}/>,
								  <MiniProduct  {...{
									image:product5,
									 name:"small item",
									 oldPrice:"300",
									  newPrice:"200",
									  category:"category"}}/>,
								<MiniProduct  {...{
								image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>,
								<MiniProduct  {...{
									image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>
								  
								  ] }/>
						</div>
					</div>
					
					{/* column2 starts here  */}
					<div className="col-md-4 col-xs-6">
						<div className="section-title">
							<h4 className="title">Top selling</h4>
							<div className="section-nav">
								<div id="slick-nav-4" className="products-slick-nav"></div>
							</div>
						</div>

						<div className={classes.column2}>
							

						<MiniSlider    list = {[
							<MiniProduct  {...{
								image:product5,
								 name:"small item",
								 oldPrice:"300",
								  newPrice:"200",
								  category:"category"}}/>,
								  <MiniProduct  {...{
									image:product5,
									 name:"small item",
									 oldPrice:"300",
									  newPrice:"200",
									  category:"category"}}/>,
								<MiniProduct  {...{
								image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>,
								<MiniProduct  {...{
									image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>
								  
								  ] }/>
						</div>
					</div>

				
								  {/* column3 starts */}
					<div>
						<div >
							<h4>Top selling</h4>
						</div>

						<div className={classes.column3}>
						<MiniSlider    list = {[
							<MiniProduct  {...{
								image:product5,
								 name:"small item",
								 oldPrice:"300",
								  newPrice:"200",
								  category:"category"}}/>,
								  <MiniProduct  {...{
									image:product5,
									 name:"small item",
									 oldPrice:"300",
									  newPrice:"200",
									  category:"category"}}/>,
								<MiniProduct  {...{
								image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>,
								<MiniProduct  {...{
									image:product5,
									name:"small item",
									oldPrice:"300",
									newPrice:"200",
									category:"category"}}/>
								  
								  ] }/>
						</div>
					</div>

				</div>
			</div>
		</div>

		<div id="newsletter" className="section">
			<div >
				<div>
					<div className={classes.newsLetterContainer}>
						<div className={classes.newsLetter}>
							<p>Sign Up for the <strong>NEWSLETTER</strong></p>
							<form className={classes.form}>
								<div>
								<input className={classes.userInput} type="email" placeholder="Enter Your Email"/>
								</div>

								<div className={classes.submitBtnCtn}>
								<button className={classes.submitBtn}>
									<div><div><AiOutlineMail size={15}/></div> <div>Subscribe</div></div>
									</button>
								</div>
							</form>
							<ul className={classes.socialMediaFollow}>
								<li>
									<a href="#"><FaFacebookF size={sizeOfSocialMediaIcon} id={classes.smIconId}/></a>
								</li>
								<li>
									<a href='#'> <AiOutlineTwitter size={sizeOfSocialMediaIcon} id={classes.smIconId}/></a>
								</li>
								<li>
									<a href="#">< AiOutlineInstagram size={sizeOfSocialMediaIcon} id={classes.smIconId}/></a>
								</li>
								<li>
									<a href="#"><AiOutlineLinkedin size={sizeOfSocialMediaIcon} id={classes.smIconId}/></a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
  )
}
