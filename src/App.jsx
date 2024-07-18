import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFoundPage from "./Pages/NotFoundPage";
import ProductDetails from "./Pages/ProductDetails";
import CartPage from "./Pages/CartPage";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useContext, useEffect } from "react";
import WishList from "./Pages/WishList";
import { ModeContext } from "./context/ModeContext";
const App = () => {
  const [mode] = useContext(ModeContext);
  useEffect(() => {
    AOS.init({duration:1000, delay:100});
  }, [])
  return (
    <>
     <div className={mode}>
      <div className="container">
        <BrowserRouter>
           <Header />
           <Routes>
             <Route path="/" element={<Home />}></Route>
             <Route path="/shop" element={<Shop />}></Route>
             <Route path="/about" element={<About />}></Route>
             <Route path="/contact" element={<Contact />}></Route>
             <Route path="/cart" element={<CartPage />}></Route>
             <Route path="/wishlist" element={<WishList />}></Route>
             <Route path={`/product/:id`} element={<ProductDetails />}></Route>
             <Route path="*" element={<NotFoundPage />}></Route>
           </Routes>
           <Footer />
        </BrowserRouter>
      </div>
     </div>
    </>
  );
};

export default App;
