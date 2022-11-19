import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./components/cart-page/CartPage";
import Checkout from "./components/checkout/Checkout";
import DetailPage from "./components/detail-page/DetailPage";
import HomePage from "./components/home-page/HomePage";
import Layout from "./components/Layout";
import ShopPage from "./components/shop-page/ShopPage";
import SignIn from "./components/sign-in/SignIn";
import SignUp from "./components/sign-up/SignUp";
import store from "./store/store";

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/detail/:productId" element={<DetailPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/login" element={<SignIn />} />
            <Route path="/register" element={<SignUp />} />
          </Routes>
        </Layout>
      </Provider>
    </BrowserRouter>
  );
}
