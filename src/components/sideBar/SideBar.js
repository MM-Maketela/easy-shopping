import React from 'react'
import { useEffect, useState } from 'react'
import classes from './SideBar.module.css'
import MiniProduct from '../../components/product/mini-product/MiniProduct'
import MiniSlider from '../../components/miniSlider/MiniSlider'
import product5 from '../../assets/images/product05.png'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai/index.esm'

export const SideBar = () => {
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
	const signSize = 13;
  return (
    <div id={classes.sideBar} className="col-md-3">
						<div className={classes.sideBar}>
							<h3 className="aside-title">Categories</h3>

							<div className={classes.innerCategoryContainer}>

								<div className="input-checkbox">
									<input type="checkbox" id="category-1"/>
									<label for="category-1">
										<span></span>
										Laptops
										<small>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-2"/>
									<label for="category-2">
										<span></span>
										Smartphones
										<small>(740)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-3"/>
									<label for="category-3">
										<span></span>
										Cameras
										<small>(1450)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-4"/>
									<label for="category-4">
										<span></span>
										Accessories
										<small>(578)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-5"/>
									<label for="category-5">
										<span></span>
										Laptops
										<small>(120)</small>
									</label>
								</div>

								<div className="input-checkbox">
									<input type="checkbox" id="category-6"/>
									<label for="category-6">
										<span></span>
										Smartphones
										<small>(740)</small>
									</label>
								</div>
							</div>
						</div>

						<div className={classes.sideBar}>
							<h3 className={classes.asideTittle}>Price (ZAR)</h3>
							<div className={classes.priceAdjuster}>
								
								<div className={classes.inputAndSignsContainer}>
								<div className={classes.inputNumber}>
									<input id="price-min" type="number"/>
									
								</div>
								<div id={classes.signs}>
									<div><div><AiOutlinePlus size={signSize}/></div></div>
									<div><div><AiOutlineMinus size={signSize} /></div></div>
								</div>
								</div>
								<div className={classes.dividerContainer}>
								<div id={classes.priceDivider}>-</div>
								</div>
								
								<div className={classes.inputAndSignsContainer}>
								<div className={classes.inputNumber}>
									<input id="price-max" type="number"/>
									
								</div>
								<div id={classes.signs}>
									<div>
										<div><AiOutlinePlus size={signSize}/></div>
										</div>
									<div><div><AiOutlineMinus size={signSize} /></div></div>
								</div>
								</div>
							</div>
						</div>

						<div className={classes.sideBar}>
							<h3 className="aside-title">Brand</h3>
							<div className={classes.innerCategoryContainer}>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-1"/>
									<label for="brand-1">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-2"/>
									<label for="brand-2">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-3"/>
									<label for="brand-3">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-4"/>
									<label for="brand-4">
										<span></span>
										SAMSUNG
										<small>(578)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-5"/>
									<label for="brand-5">
										<span></span>
										LG
										<small>(125)</small>
									</label>
								</div>
								<div className="input-checkbox">
									<input type="checkbox" id="brand-6"/>
									<label for="brand-6">
										<span></span>
										SONY
										<small>(755)</small>
									</label>
								</div>
							</div>
						</div>

						<div className={classes.sideBar}>
							<h3 className="aside-title">Top selling</h3>
							{
								data ? <MiniSlider    list = {[
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
									  ] }/>: <h1>loading..</h1>
							}
						</div>
					</div>
  )
}
