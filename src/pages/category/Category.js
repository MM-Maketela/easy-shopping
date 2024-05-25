import React from 'react'
import {useEffect,useState} from 'react'
import classes from './Category.module.css'
import {SideBar} from '../../components/sideBar/SideBar'
import MacroProduct from '../../components/product/macro-product/MacroProduct'
import product1 from '../../assets/images/product01.png'
import product2 from '../../assets/images/product02.png'
import product3 from '../../assets/images/product03.png'
import product4 from '../../assets/images/product04.png'
import product5 from '../../assets/images/product05.png'
import {CgMenuGridR} from 'react-icons/cg/index.esm'
import {TfiMenuAlt} from 'react-icons/tfi/index.esm'
import { Counter } from '../../components/counter/Counter'
export const Category = (props) => {
  let [data, setData] = useState(null)
   //getting products

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

  function productMap(products){
    let _products = []

    //handle image
    for(let i =0; i<products.length; i++){
        const product = {handleProducts:handleProducts, id:products[i].id, image:products[i]['image1'], name:products[i].productName, price:products[i].price, discount:products[i].discount,  category:products[i].category, details:products[i].details, new:products[i].new, brand:'testing brand', rating:4}
        _products.push(product)
    }
     return _products.map((product,index)=> <div key={index} className={classes.eachProduct}>{<MacroProduct {...{ 
      id:product.id,
      image: product.image,
      newPrice:product.price,
        name:product.name,
        discount:product.discount,
        classification :product.new,
      category:product.category,
      oldPrice :"100",
      products: props.products,
      functionality:props.functionality}}/>}</div>)
}

      const iconSize = 20;

  return (
    <div className={classes.categoryContainer}>
      
    <div id={classes.category}>
      <div className={classes.sideBar}><SideBar/></div>
      <div className={classes.outerContainer}>
      <div className={classes.searchResults}>
        <div id={classes.searchResultsMessage}> search results: "phone"</div>
        <div className={classes.searchRInnerFlex}>
          <div id={classes.dropdowns}>
          <div id={classes.options}>sort by: <select id={classes.sortBy}>
                          <option>Relevance</option>
                          <option>price:Low to High</option>
                          <option>price:High to Low</option>
                          <option>Top rated</option>
                      </select>
          </div>
          {/* <div id={classes.options}>show: <select id={classes.showNItems}>
                          <option>9</option>
                          <option>18</option>
                          <option>27</option>
                      </select>
          </div> */}
          </div>
        <div  className={classes.menuIcons}>
          <div id={classes.iconContainer}> <div id={classes.iconInnerContainer}><CgMenuGridR size={iconSize}/></div></div>
          <div id={classes.iconContainer}><div id={classes.iconInnerContainer}><TfiMenuAlt size={iconSize}/></div></div>
          
        </div>
        </div>
      </div>


      {
        data ? <div className={classes.productsContainer}>
        {productMap(data['data'])} </div>:<div><h1 style={{fontSize:'3rem',color:'red'}}>Loading...</h1></div>
      }
      
      <div className={classes.productCounter}>
        <div className={classes.numberOfProducts}>
        1-10 products
        </div>
        <div>
          <Counter />
        </div>

        </div>
      </div>
    </div>
    </div>
  )
}
