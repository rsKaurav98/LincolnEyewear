import React, { useLayoutEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Product from "../Pages/Product/Product";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import { Privateroutes } from "../ContextApi/Privateroute";
import Cart from "../Pages/Cart/index";
import Shipping from "../Pages/Shipping/Shipping";
import Checkout from "../Pages/Checkout/Checkout";
import Payment from "../Pages/Payment/Payment";
import Confirm from "../Pages/Confirm/Confirm";
import OrderHistory from "../Pages/OrderHistory/OrderHistory";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Productlist from "../Pages/Admin/Productlist";
import ProductPost from "../Pages/Admin/ProductPost";
import EditProduct from "../Pages/Admin/EditProduct";
import { CategoryProvider } from "../Components/Navbar/CategoryContext";

const AllRoutes = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <Routes>
      <Route path="/" element={<CategoryProvider><Home /></CategoryProvider>} />
      <Route path="/products" element={<CategoryProvider><Product /></CategoryProvider>} />
      <Route path="/products/:id" element={<CategoryProvider><SingleProduct /></CategoryProvider>} />
      <Route
        path="/cart"
        element={
          <Privateroutes>
            <Cart />
          </Privateroutes>
        }
      />
      <Route
        path="/shipping"
        element={
          <Privateroutes>
            <Shipping />
          </Privateroutes>
        }
      />
      <Route
        path="/checkout"
        element={
          <Privateroutes>
            <Checkout />
          </Privateroutes>
        }
      />
      {/* <Route
        path="/payment"
        element={
          <Privateroutes>
            <Payment />
          </Privateroutes>
        }
      /> */}
      <Route
        path="/confirm"
        element={
          <Privateroutes>
            <Confirm />
          </Privateroutes>
        }
      />
      <Route
        path="/orderhistory"
        element={
          <Privateroutes>
            <OrderHistory />
          </Privateroutes>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Privateroutes>
            <Wishlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productlist"
        element={
          <Privateroutes>
            <Productlist />
          </Privateroutes>
        }
      />
      <Route
        path="/productpost"
        element={
          <Privateroutes>
            <ProductPost />
          </Privateroutes>
        }
      />
      <Route
        path="/editproduct/:id"
        element={
          <Privateroutes>
            <EditProduct />
          </Privateroutes>
        }
      />
    </Routes>
  );
};

export default AllRoutes;
