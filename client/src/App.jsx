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
import ErrorPage from "./pages/ErrorPage";
import Logout from "./pages/Logout";
import Admin from "./Components/layouts/Admin";
import AdminUsers from "./pages/AdminUsers";
import AdminContacts from "./pages/AdminContacts";
import AdminServices from "./pages/AdminServices";

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
          <Route path="/admin" element={<Admin />}>
            <Route path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContacts />} />
            <Route path="services" element={<AdminServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
