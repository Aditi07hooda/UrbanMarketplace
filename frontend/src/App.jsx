import Footer from "./components/layouts/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header2 from "./components/layouts/Header/Header2";
import Header from "./components/layouts/Header/Header";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import { Toaster } from "react-hot-toast";
import Payment from "./components/Cart/Payment";
import About from "./components/layouts/About/About";
import ProductDetails from "./components/Product/ProductDetails";
import LoginSignUp from "./components/User/LoginSignUp";
import Products from "./components/Product/Products";
import ProductList from "./components/Admin/ProductList";
import NewProduct from "./components/Admin/NewProduct";
import Dashboard from "./components/Admin/Dashboard";
import ProtectedRoute from "./components/Route/ProtectedRoute";
import UpdateProduct from "./components/Admin/UpdateProduct";
import Profile from "./components/User/Profile";
import Contact from "./components/layouts/Contact/Contact";
import Shipping from "./components/Cart/Shipping";
import ConfirmOrder from "./components/Cart/ConfirmOrder";
import UpdateProfile from "./components/User/UpdateProfile";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import axios from "axios";
// import { store } from "./redux/store";
// import { loadUser } from "./actions/userAction";
// import { useEffect, useState } from "react";
import Process from "./components/Cart/Process";
import OrderSuccess from "./components/Cart/OrderSuccess";
import MyOrders from "./components/Order/MyOrders";
import UsersList from "./components/Admin/UsersList";
import OrderDetails from "./components/Order/OrderDetails";
import OrderList from "./components/Admin/OrderList";
import ProcessOrder from "./components/Admin/ProcessOrder";

export const server = "https://urbanmarketplace-api.onrender.com";
// export const server = "http://localhost:5000";

function App() {
  // const [stripeApiKey, setStripeApiKey] = useState("");
  // const config = {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   withCredentials: true,
  // };

  // async function getStripeApiKey() {
  //   const { data } = await axios.get(`${server}/api/v1/stripeapikey`, config);
  //   console.log(data);
  //   setStripeApiKey(data.stripeApiKey);
  // }

  // useEffect(() => {
  //   store.dispatch(loadUser());

  //   getStripeApiKey();
  // }, []);
  return (
    <>
      {/* {console.log("ii", stripeApiKey)} */}
      <Router>
        {/* <Header /> */}
        <Header2 />
        <Routes>
          <Route path="/team" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<Home2 />} /> */}
          <Route path="/product/:id" element={<ProductDetails />} />
          {/* <Route  path="/products" element={Products} /> */}
          <Route path="/products/:keyword" element={<Products />} />
          <Route path="/login" element={<LoginSignUp />} />
          {/* <Route path="/account" element={<ProtectedRoute isAdmin={true} element={<Profile />} />} /> */}
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/me/update"
            element={
              <ProtectedRoute>
                <UpdateProfile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/shipping"
            element={
              <ProtectedRoute>
                <Shipping />
              </ProtectedRoute>
            }
          />
          <Route
            path="/order/confirm"
            element={
              <ProtectedRoute>
                <ConfirmOrder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <ProtectedRoute isAdmin={true}>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/products"
            element={
              <ProtectedRoute isAdmin={true}>
                <ProductList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/product"
            element={
              <ProtectedRoute isAdmin={true}>
                <NewProduct />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/product/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <UpdateProduct />
              </ProtectedRoute>
            }
          />

<Route
            path="/admin/users"
            element={
              <ProtectedRoute isAdmin={true}>
                <UsersList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/orders"
            element={
              <ProtectedRoute isAdmin={true}>
                <OrderList/>
              </ProtectedRoute>
            }
          />
             <Route
            path="/admin/order/:id"
            element={
              <ProtectedRoute isAdmin={true}>
                <ProcessOrder/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <MyOrders />
              </ProtectedRoute>
            }
          />
          
            <Route
            path="/order/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="/success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />

          <Route path="/payment" element={<Process />} />
        </Routes>
        <Toaster />
        <Footer />
      </Router>
    </>
  );
}

export default App;
