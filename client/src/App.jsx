import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import TopHeader from "../src/Components/Header/TopHeader";
import Header from "../src/Components/Header/Header";
import Footer from "../src/Components/Footer";
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/cart/:id" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="*" element={<ErrorPage />} />
          <Route
            path="/product/singleproduct/:id"
            element={<SingleProduct />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
