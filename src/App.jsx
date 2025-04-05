import { ToastContainer, toast } from "react-toastify";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

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
