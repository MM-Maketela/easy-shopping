import './App.css';
import { Store } from './pages/store/Store';
import { Header } from './components/header/Header';
import {Footer} from './components/footer/Footer';
import { Route, Routes, useLocation } from "react-router-dom";
import {Category} from './pages/category/Category'
import {Login} from './pages/login/Login'
import {Signup} from './pages/signup/Signup'
import {ProductDisplay} from './pages/productDisplay/ProductDisplay'
import {Checkout} from './pages/checkout/Checkout'
import { Navigation } from './components/navigation/Navigation';
import { NewsLetter } from './components/newsLetter/NewsLetter';
import { TrackMyOrder } from './pages/trackMyOrder/TrackMyOrder';
import { PrivacyPolicy } from './pages/privaryPolicy-termsAndConditions/PrivacyPolicy';
import { Help } from './pages/help/Help';
import { AboutUs } from './pages/aboutUs-contactUs-ordersAndReturns/AboutUs';
import { MyProfile } from './pages/myProfile/MyProfile';
import { MyCart } from './pages/myCart/MyCart';
import { MyWishList } from './pages/myWishList/MyWishList';

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* navigation to be updated */}
      {/* <Navigation activeLink={location.pathname} /> */}

      <Header/>
        <Routes>
          <Route path="/easy-shopping" element={<Store/>} />
          <Route  path="/easy-shopping/signup"   element={<Signup />} />
          <Route  path="/easy-shopping/login"   element={<Login/>} />
          <Route  path="/easy-shopping/productDisplay"   element={<ProductDisplay />} />
          <Route  path="/easy-shopping/category"   element={<Category />} />
          <Route  path="/easy-shopping/checkout" element={<Checkout/>} />
          <Route  path="/easy-shopping/trackMyOrder" element={<TrackMyOrder/>} />
          <Route  path="/easy-shopping/privacyPolicy" element={<PrivacyPolicy/>} />
          <Route  path="/easy-shopping/help" element={<Help/>} />
          <Route  path="/easy-shopping/aboutUs" element={<AboutUs/>} />
          <Route  path="/easy-shopping/myProfile" element={<MyProfile/>} />
          <Route  path="/easy-shopping/myCart" element={<MyCart/>} />
          <Route  path="/easy-shopping/myWishList" element={<MyWishList/>} />
        </Routes>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
