 export class  Products {
  constructor(){
    this.products = [];
  }

  getProducts(){
    return this.products
  }

   setProducts(products){
    this.products = products
  }

}

export class Product{
  constructor(newProduct){
    this.Product = newProduct
    this.productCount = 0;
  }

  setProduct(newProduct){
    this.product = newProduct
  }
  setProductCount(count){
    this.productCount = count;
  }

  getProduct(){
    return this.product
  }
  getProductCount(){
    return this.productCount
  }
}