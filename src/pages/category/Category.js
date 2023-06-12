import React from 'react'
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
  
  const productList = [<MacroProduct  {...{ 
    id:11,
    image: product1,
     newPrice:"300",
      name:"item",
       discount:"23",
      classification :"new",
    category:"test",
    oldPrice :"250",
    products: props.products,
  functionality:props.functionality}} />
    ,<MacroProduct  {...{ 
      id:12,
      image: product5,
        newPrice:"300",
        name:"item",
        discount:"23",
      classification :"new",
      category:"test",
      oldPrice :"250",
      products: props.products,
      functionality:props.functionality
    }} />
    , <MacroProduct  {...{ 
      id:13,
      image: product2,
       newPrice:"300",
        name:"item",
         discount:"23",
      classification :"new",
      category:"test",
      oldPrice :"250",
      products: props.products,
      functionality:props.functionality}} />
      ,<MacroProduct  {...{ 
        id:14,
        image: product5,
          newPrice:"300",
          name:"item",
          discount:"23",
        classification :"new",
        category:"test",
        oldPrice :"250",
        products: props.products,
        functionality:props.functionality}} />
        ,<MacroProduct  {...{ 
          id:15,
          image: product5,
            newPrice:"300",
            name:"item",
            discount:"23",
          classification :"new",
          category:"test",
          oldPrice :"250",
          products: props.products,
          functionality:props.functionality}} />
    ,<MacroProduct  {...{ 
      id:16,
      image: product3,
        newPrice:"300",
        name:"item",
        discount:"23",
      classification :"new",
      category:"test",
      oldPrice :"250",
      products: props.products,
    functionality:props.functionality}} />
      ,<MacroProduct  {...{ 
        id:17,
        image: product5,
          newPrice:"300",
          name:"item",
          discount:"23",
        classification :"new",
        category:"test",
        oldPrice :"250",
        products: props.products,
      functionality:props.functionality}} />
    ,<MacroProduct  {...{ 
      id:18,
      image: product4,
        newPrice:"300",
        name:"item",
        discount:"23",
      classification :"new",
      category:"test",
      oldPrice :"250",
      products: props.products,
      functionality:props.functionality}} />
    ,<MacroProduct  {...{ 
      id:19,
      image: product5,
        newPrice:"300",
        name:"item",
        discount:"23",
      classification :"new",
      category:"test",
      oldPrice :"250",
      products: props.products,
      functionality:props.functionality}} />]
      const iconSize = 20;
  const products =() => {
    return productList.map((product,index) =>(<div key={index}>{product}
      </div>))
    }
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
      <div className={classes.productsContainer}>
        {
        
          products()
      }
      
      </div>
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
