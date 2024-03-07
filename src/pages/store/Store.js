import React from 'react'
import {useEffect, useState} from 'react'
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
import {Navigation} from '../../components/navigation/Navigation'
import CollectionCard from '../../components/conllectionCard/CollectionCard'
import { SectionNav } from '../../components/sectionNav/SectionNav'
import {BsArrowRightCircle} from 'react-icons/bs/index.esm'
import {FaFacebookF} from 'react-icons/fa/index.esm'

export const Store = (props) => {
	let [data, setData] = useState(null)

	async function handleProducts(){
		try{
		   await fetch("http://localhost:3003/client/products")
		  .then(res => res.json())
		  .then(data => setData(data))
		}catch(e){
		  console.log(e)
		}
	   }
	  
		// handing products
		useEffect(()=>{
		  handleProducts()
		},[])

		if(data){
			console.log(data['data'])
		}

  return (
    <div id={classes.store} >
		
			
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
										

									{data===null ? <h1>loading</h1>: <Slider list = {[<MacroProduct  {...{ 
											id:data['data'][0].id,
											image: data['data'][0].image1,
										 	newPrice:data['data'][0].price,
										  	name:data['data'][0].productName,
										   	discount:data['data'][0].discount,
										    classification :data['data'][0].new,
											category:data['data'][0].category,
											oldPrice :"100",
											products: props.products,
											functionality:props.functionality
										}} />
											, <MacroProduct  {...{ 
												id:data['data'][1].id,
											image: data['data'][1].image1,
										 	newPrice:data['data'][1].price,
										  	name:data['data'][1].productName,
										   	discount:data['data'][1].discount,
										    classification :data['data'][1].new,
											category:data['data'][1].category,
											oldPrice :"100",
											products: props.products,
											functionality:props.functionality
											}} />
											,<MacroProduct  {...{ 
												id:data['data'][2].id,
											image: data['data'][2].image1,
										 	newPrice:data['data'][2].price,
										  	name:data['data'][2].productName,
										   	discount:data['data'][2].discount,
										    classification :data['data'][2].new,
											category:data['data'][2].category,
											oldPrice :"100",
											products: props.products,
											functionality:props.functionality
											}} />
											,<MacroProduct  {...{ 
												id:data['data'][3].id,
											image: data['data'][3].image1,
										 	newPrice:data['data'][3].price,
										  	name:data['data'][3].productName,
										   	discount:data['data'][3].discount,
										    classification :data['data'][3].new,
											category:data['data'][3].category,
											oldPrice :"100",
											products: props.products,
											functionality:props.functionality
											}} />
											,<MacroProduct  {...{ 
												id:data['data'][4].id,
											image: data['data'][4].image1,
										 	newPrice:data['data'][4].price,
										  	name:data['data'][4].productName,
										   	discount:data['data'][4].discount,
										    classification :data['data'][4].new,
											category:data['data'][4].category,
											oldPrice :"100",
											products: props.products,
											functionality:props.functionality
												}} />] }/>}
										


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
								<li className={classes.countDownElement}>
									<div>
										<h3>02</h3>
										<span>Days</span>
									</div>
								</li>
								<li className={classes.countDownElement}>
									<div>
										<h3>10</h3>
										<span>Hours</span>
									</div>
								</li>
								<li className={classes.countDownElement}>
									<div>
										<h3>34</h3>
										<span>Mins</span>
									</div>
								</li>
								<li className={classes.countDownElement}>
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
								{

									data===null ? <h1>loading...</h1> : <Slider list = {[<MacroProduct  {...{ 
										id:data['data'][5].id,
										image: data['data'][5].image1,
										 newPrice:data['data'][5].price,
										  name:data['data'][5].productName,
										   discount:data['data'][5].discount,
										classification :data['data'][5].new,
										category:data['data'][5].category,
										oldPrice :"100",
										products: props.products,
										functionality:props.functionality}} />
										, <MacroProduct  {...{ 
											id:data['data'][6].id,
										image: data['data'][6].image1,
										 newPrice:data['data'][6].price,
										  name:data['data'][6].productName,
										   discount:data['data'][6].discount,
										classification :data['data'][6].new,
										category:data['data'][6].category,
										oldPrice :"100",
										products: props.products,
										functionality:props.functionality}} />
										,<MacroProduct  {...{ 
											id:data['data'][7].id,
										image: data['data'][7].image1,
										 newPrice:data['data'][7].price,
										  name:data['data'][7].productName,
										   discount:data['data'][7].discount,
										classification :data['data'][7].new,
										category:data['data'][7].category,
										oldPrice :"100",
										products: props.products,
										functionality:props.functionality}} />
										,<MacroProduct  {...{ 
											id:data['data'][8].id,
										image: data['data'][8].image1,
										 newPrice:data['data'][8].price,
										  name:data['data'][8].productName,
										   discount:data['data'][8].discount,
										classification :data['data'][8].new,
										category:data['data'][8].category,
										oldPrice :"100",
										products: props.products,
										functionality:props.functionality}} />
										,<MacroProduct  {...{ 
											id:data['data'][9].id,
										image: data['data'][9].image1,
										 newPrice:data['data'][9].price,
										  name:data['data'][9].productName,
										   discount:data['data'][9].discount,
										classification :data['data'][9].new,
										category:data['data'][9].category,
										oldPrice :"100",
										products: props.products,
										functionality:props.functionality}} />] }/>
								}
									<div id="slick-nav-2" className="products-slick-nav"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	
		<div className={classes.section}>
			<div >
				<div  className={classes.gridTopSellingProducts}>


					{/* column1 starts here */}
					<div >
						
							<h4 className={classes.title}>Top selling</h4>
						

						<div className={classes.column1}>
							{
								data===null ? <h1>loading...</h1>: <MiniSlider    list = {[
									<MiniProduct  {...{
										image:data['data'][0].image2,
										 name:data['data'][0].productName,
										 oldPrice:"10",
										  newPrice:data['data'][0].price,
										  category:data['data'][0].category}}/>,
										  <MiniProduct  {...{
											image:data['data'][1].image2,
										 name:data['data'][1].productName,
										 oldPrice:"10",
										  newPrice:data['data'][1].price,
										  category:data['data'][1].category}}/>,
										<MiniProduct  {...{
											image:data['data'][2].image2,
											name:data['data'][2].productName,
											oldPrice:"10",
											 newPrice:data['data'][2].price,
											 category:data['data'][2].category}}/>,
										<MiniProduct  {...{
											image:data['data'][3].image2,
										 name:data['data'][3].productName,
										 oldPrice:"10",
										  newPrice:data['data'][3].price,
										  category:data['data'][3].category}}/>
										  
										  ] }/>
							}
						</div>
					</div>
					
					{/* column2 starts here  */}
					<div>
						
							<h4 className={classes.title}>Top selling</h4>
						

						<div className={classes.column2}>
							

						{
							data===null ? <h1>loading ...</h1>: <MiniSlider    list = {[
								<MiniProduct  {...{
									image:data['data'][4].image2,
										 name:data['data'][4].productName,
										 oldPrice:"10",
										  newPrice:data['data'][4].price,
										  category:data['data'][4].category}}/>,
									  <MiniProduct  {...{
										image:data['data'][5].image2,
										 name:data['data'][5].productName,
										 oldPrice:"10",
										  newPrice:data['data'][5].price,
										  category:data['data'][5].category}}/>,
									<MiniProduct  {...{
										image:data['data'][6].image2,
										name:data['data'][6].productName,
										oldPrice:"10",
										 newPrice:data['data'][6].price,
										 category:data['data'][6].category}}/>,
									<MiniProduct  {...{
										image:data['data'][7].image2,
										 name:data['data'][7].productName,
										 oldPrice:"10",
										  newPrice:data['data'][7].price,
										  category:data['data'][7].category}}/>
									  
									  ] }/>
						}
						</div>
					</div>

				
								  {/* column3 starts */}
					<div>
						
							<h4 className={classes.title}>Top selling</h4>
						
						<div className={classes.column3}>
						{
							data === null ? <h1>loading ...</h1>: <MiniSlider    list = {[
								<MiniProduct  {...{
									image:data['data'][9].image2,
										 name:data['data'][9].productName,
										 oldPrice:"10",
										  newPrice:data['data'][9].price,
										  category:data['data'][9].category}}/>,
									  <MiniProduct  {...{
										image:data['data'][10].image2,
										 name:data['data'][10].productName,
										 oldPrice:"10",
										  newPrice:data['data'][10].price,
										  category:data['data'][10].category}}/>,
									<MiniProduct  {...{
										image:data['data'][11].image2,
										name:data['data'][11].productName,
										oldPrice:"10",
										 newPrice:data['data'][11].price,
										 category:data['data'][11].category}}/>,
									<MiniProduct  {...{
										image:data['data'][12].image2,
										 name:data['data'][12].productName,
										 oldPrice:"10",
										  newPrice:data['data'][12].price,
										  category:data['data'][12].category}}/>
									  
									  ] }/>
						}
						</div>
					</div>

				</div>
			</div>
		</div>
	
    </div>
  )
}
