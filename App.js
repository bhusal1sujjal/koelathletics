import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import ChangingNavbar from "./Components/ChangingNavbar/ChangingNavbar";
import MainNavbar from "./Components/MainNavbar/MainNavbar";
import Shop from "./Pages/Shop";
import CustomerCare from "./Pages/CustomerCare";
import ShopCategory from "./Pages/ShopCategory";
import CustomOrder from "./Pages/CustomOrder";
import Frequentlyaskedqsn from "./Pages/Frequentlyaskedqsn";
import About from "./Pages/About";
import RefundPolicy from "./Pages/ReturnPolicy";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import ShippingPolicy from "./Pages/ShippingPolicy";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";

import OrderContextProvider from "./Context/OrderContext";
import SearchContextProvider from "./Context/SearchContext";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

// Scroll handler for anchor hash links
function ScrollToHashElement() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 0);
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <OrderContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          {/* Scroll to top on route change */}
          <ScrollToTop />

          {/* Scroll to section if hash exists */}
          <ScrollToHashElement />

          <ChangingNavbar onVisibilityChange={setBannerVisible} />
          <MainNavbar bannerVisible={bannerVisible} />

          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/customercare" element={<CustomerCare />} />
            <Route path="/shop" element={<ShopCategory />} />
            <Route path="/customorder" element={<CustomOrder />} />
            <Route
              path="/frequentlyaskedqsns"
              element={<Frequentlyaskedqsn />}
            />
            <Route path="/About" element={<About />} />
            <Route path="/RefundPolicy" element={<RefundPolicy />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/ShippingPolicy" element={<ShippingPolicy />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<LoginSignup />} />
          </Routes>

          <Footer />
        </BrowserRouter>
      </SearchContextProvider>
    </OrderContextProvider>
  );
}

export default App;
