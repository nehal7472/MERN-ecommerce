import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Login from "../../assets/Login.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../store/auth";
import { useCartContext } from "../../context/CartContext";

export default function Header() {
  const { isLoggedIn, user } = useAuth();
  let [dropDown, SetDropDown] = useState(false);
  const { total_item } = useCartContext();

  return (
    <>
      <div className="bg-[#111827] text-white w-full sticky top-[34px] z-[100] shadow-xl mb-[35px]">
        <div className="container py-2 sm:y-0 ">
          <div className="flex justify-between items-center ">
            <div className="flex justify-center items-center gap-4">
              <NavLink href={""}>
                <img src={Logo} alt="Logo" className="w-14" />
              </NavLink>
              <p className="text-[#DA4A54] font-medium text-3xl">BookStore</p>
            </div>
            <div>
              <ul className="flex justify-center items-center font-semibold gap-[30px] cursor-pointer">
                <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                  <NavLink
                    className={(e) => {
                      return e.isActive ? "text-[#DA4A54]" : "";
                    }}
                    to={"/"}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                  <NavLink
                    className={(e) => {
                      return e.isActive ? "text-[#DA4A54]" : "";
                    }}
                    to={"/about"}
                  >
                    About
                  </NavLink>
                </li>
                <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                  <NavLink
                    className={(e) => {
                      return e.isActive ? "text-[#DA4A54]" : "";
                    }}
                    to={"/product"}
                  >
                    Product
                  </NavLink>
                </li>
                <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                  <NavLink
                    className={(e) => {
                      return e.isActive ? "text-[#DA4A54]" : "";
                    }}
                    to={"/contact"}
                  >
                    Contact
                  </NavLink>
                </li>
                {isLoggedIn ? (
                  <>
                    <span className="text-[20px] cursor-default">
                      {user.username}
                    </span>
                    <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                      <NavLink
                        className={(e) => {
                          return e.isActive
                            ? "text-[#DA4A54] text-[25px]"
                            : "text-[25px]";
                        }}
                        to={"/logout"}
                      >
                        <FontAwesomeIcon icon={faRightFromBracket} />
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <div>
                      <div
                        className="Relative"
                        onClick={() => {
                          SetDropDown(!dropDown);
                        }}
                      >
                        <img src={Login} alt="Registration" className="w-6" />
                      </div>
                      <div
                        className={
                          dropDown
                            ? "absolute bg-[#DA4A54] text-white px-5 py-3 top-[72px] right-[45px] rounded-md"
                            : "hidden"
                        }
                      >
                        <li className="mb-[10px] hover:text-black transition duration-300 ease-in-out">
                          <NavLink
                            className={(e) => {
                              return e.isActive ? "text-black" : "";
                            }}
                            to={"/login"}
                          >
                            Login
                          </NavLink>
                        </li>
                        <li className="hover:text-black transition duration-300 ease-in-out">
                          <NavLink
                            className={(e) => {
                              return e.isActive ? "text-black" : "";
                            }}
                            to={"/registration"}
                          >
                            Registration
                          </NavLink>
                        </li>
                      </div>
                    </div>
                  </>
                )}

                <NavLink
                  className={(e) => {
                    return e.isActive
                      ? "text-[#DA4A54] text-[25px] relative"
                      : "text-[25px] relative ";
                  }}
                  to={"/cart"}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                  <span className="text-[white] text-[18px] absolute top-[-12px] left-[20px]  bg-[#DA4A54] rounded-full px-[5px]">
                    {total_item}
                  </span>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
