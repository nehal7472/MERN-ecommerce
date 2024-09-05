import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Login from "../../assets/Login.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faRightFromBracket,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../store/auth";
import { useCartContext } from "../../context/CartContext";
import TopNavIcon from "../../assets/topNavIcon.png";
import Modal from "../modal/Modal";

export default function Header() {
  const { isLoggedIn, user } = useAuth();
  const [dropDown, setDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { total_item } = useCartContext();

  return (
    <header className="bg-[#111827] text-white w-full sticky top-0 z-50 shadow-md">
      <div className="bg-[#111827] border-b-2 border-orange-600 py-2">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6">

          <Modal />
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg hidden md:block">
            Welcome to the online book store
          </p>

          <div className="flex items-center gap-2 sm:gap-3">
            <p className="text-white text-xs sm:text-sm md:text-base">Explore</p>
            <img src={TopNavIcon} alt="navIcon" className="w-5 sm:w-6 md:w-8 lg:w-10" />
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-center py-2 px-4 sm:px-6">
        <div className="flex items-center gap-4">
          <NavLink to="/">
            <img src={Logo} alt="Logo" className="w-14 sm:w-16" />
          </NavLink>
          <p className="text-[#DA4A54] font-medium text-xl sm:text-2xl md:text-3xl hidden sm:block">
            BookStore
          </p>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        <nav
          className={`lg:flex lg:items-center lg:gap-8 ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center font-semibold gap-4 sm:gap-6 lg:gap-8">
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54]" : "")} to="/">
                Home
              </NavLink>
            </li>
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54]" : "")} to="/about">
                About
              </NavLink>
            </li>
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54]" : "")} to="/product">
                Product
              </NavLink>
            </li>
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54]" : "")} to="/contact">
                Contact
              </NavLink>
            </li>
            {isLoggedIn ? (
              <>
                <span className="text-lg cursor-default">{user.username}</span>
                <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                  <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54] text-2xl" : "text-2xl")} to="/logout">
                    <FontAwesomeIcon icon={faRightFromBracket} />
                  </NavLink>
                </li>
              </>
            ) : (
              <div className="relative">
                <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer">
                  <img src={Login} alt="Login" className="w-6" />
                </div>
                {dropDown && (
                  <div className="absolute bg-[#DA4A54] text-white px-4 py-2 top-12 right-0 rounded-md shadow-lg">
                    <ul>
                      <li className="mb-2 hover:text-black transition duration-300 ease-in-out">
                        <NavLink className={({ isActive }) => (isActive ? "text-black" : "")} to="/login">
                          Login
                        </NavLink>
                      </li>
                      <li className="hover:text-black transition duration-300 ease-in-out">
                        <NavLink className={({ isActive }) => (isActive ? "text-black" : "")} to="/registration">
                          Registration
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
            <NavLink className={({ isActive }) => (isActive ? "text-[#DA4A54] text-2xl relative" : "text-2xl relative")} to="/cart">
              <FontAwesomeIcon icon={faCartPlus} />
              <span className="text-white text-xs absolute -top-2 -right-2 bg-blue-500 rounded-full px-2 py-0.5">
                {total_item || 0}
              </span>
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  );
}
