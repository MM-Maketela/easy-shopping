import "./App.css";
import { Store } from "./pages/store/Store";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Category } from "./pages/category/Category";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
import { ProductDisplay } from "./pages/productDisplay/ProductDisplay";
import { Checkout } from "./pages/checkout/Checkout";
import { NewsLetter } from "./components/newsLetter/NewsLetter";
import { TrackMyOrder } from "./pages/trackMyOrder/TrackMyOrder";
import { PrivacyPolicy } from "./pages/privaryPolicy-termsAndConditions/PrivacyPolicy";
import { Help } from "./pages/help/Help";
import { AboutUs } from "./pages/aboutUs-contactUs-ordersAndReturns/AboutUs";
import { MyProfile } from "./pages/myProfile/MyProfile";
import { MyCart } from "./pages/myCart/MyCart";
import { MyWishList } from "./pages/myWishList/MyWishList";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
function App() {
  let [listOfCartItems, handleProducts] = useState([]);
  let [Total, updateSubtotal] = useState(0);
  let [numberOfItems, setNumberOfItems] = useState(0);
  // let [cartState, setCArtState] = useState(0);

  function addProduct(listOfCartItems, productToAdd) {
    if (listOfCartItems.length > 0) {
      let product = listOfCartItems.find((product) => {
        if (product.id === productToAdd.id) return product;
        return {};
      });

      if (product) {
        let updatedProduct = { id: productToAdd.id, name: productToAdd.name, price: Number(product.price) + Number(productToAdd.price), qty: product.qty + 1, rating: product.rating, image: product.image };
        let filteredList = listOfCartItems.filter((product) => {
          return product.id !== productToAdd.id;
        });
        handleProducts([...filteredList, updatedProduct]);
      } else {
        handleProducts([...listOfCartItems, productToAdd]);
      }
    } else {
      handleProducts([...listOfCartItems, productToAdd]);
    }
  }

  function removeProduct(listOfCartItems, productId) {
    let filteredList = listOfCartItems.filter((product) => {
      return product.id !== productId;
    });
    handleProducts(filteredList);
  }
  function increment(items, productId) {
    console.log("test");
    let productToInc = items.find((product) => {
      if (product.id === productId) return product;
      return {};
    });

    const updatedProduct = { id: productToInc.id, name: productToInc.name, price: Number(productToInc.price) + Number(Number(productToInc.price) / Number(productToInc.qty)), qty: productToInc.qty + 1, rating: productToInc.rating, image: productToInc.image };

    let filteredList = items.filter((product) => {
      if (product.id !== productId) return product;
      return {};
    });
    handleProducts([...filteredList, updatedProduct]);
  }

  function decrement(items, productId) {
    let productToDec = items.find((product) => {
      if (product.id === productId) return product;
      return {};
    });

    if (Number(productToDec.qty) === 1) {
      removeProduct(items, productId);
      return;
    }
    const updatedProduct = { id: productToDec.id, name: productToDec.name, price: Number(productToDec.price) - Number(Number(productToDec.price) / Number(productToDec.qty)), qty: productToDec.qty - 1, rating: productToDec.rating, image: productToDec.image };
    let filteredList = items.filter((product) => {
      if (product.id !== productId) return product;
      return {};
    });

    handleProducts([...filteredList, updatedProduct]);
  }
  function countItems(qty) {
    setNumberOfItems((prevNum) => prevNum + qty);
    subtotal();
  }

  function subtotal(amount) {
    amount && updateSubtotal((prevTotal) => prevTotal + Number(amount));
  }

  let functionality = {
    addProduct: addProduct,
    removeProduct: removeProduct,
    increment: increment,
    decrement: decrement,
    numberOfItems: numberOfItems,
    countItems: countItems,
    subtotal: subtotal,
  };

  // function sortProductsByName(cartItems) {

  // }
  return (
    <div>
      {/* navigation to be updated */}
      {/* <Navigation activeLink={location.pathname} /> */}
      <Header products={listOfCartItems} functionality={functionality} total={Total} />
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Store products={listOfCartItems} functionality={functionality} total={Total} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productDisplay/:id" element={<ProductDisplay />} />
          <Route path="/category" element={<Category products={listOfCartItems} functionality={functionality} total={Total} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/trackMyOrder" element={<TrackMyOrder />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/myProfile" element={<MyProfile />} />
          <Route path="/myCart" element={<MyCart />} />
          <Route path="/myWishList" element={<MyWishList />} />
        </Routes>
      </div>
      <NewsLetter />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
