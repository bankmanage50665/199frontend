import { ToastContainer, toast } from "react-toastify";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify";

const Home = lazy(() => import("./pages/Home"));
const Collection = lazy(() => import("./pages/Collection"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Product = lazy(() => import("./pages/Product"));
const Cart = lazy(() => import("./pages/Cart"));
const Login = lazy(() => import("./pages/Login"));
const PlaceOrder = lazy(() => import("./pages/PlaceOrder"));
const Orders = lazy(() => import("./pages/Orders"));

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      {/* Add Helmet with Meta Pixel code here */}
      <Helmet>
        <script>
          {`!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '684957467417628');
        fbq('track', 'PageView');`}
        </script>
        <noscript>
          {`<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=684957467417628&ev=PageView&noscript=1"
        />`}
        </noscript>
      </Helmet>

      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/collection"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Collection />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="/contact"
          element={
            <Suspense fallback={<p>Loading... </p>}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="/product/:productId"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Product />
            </Suspense>
          }
        />
        <Route
          path="/cart"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/place-order"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <PlaceOrder />
            </Suspense>
          }
        />
        <Route
          path="/orders"
          element={
            <Suspense fallback={<p>Loading...</p>}>
              <Orders />
            </Suspense>
          }
        />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
