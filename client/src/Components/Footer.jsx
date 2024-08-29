import { Link } from "react-router-dom";
import PhoneLogo from "../assets/phone-icon.png";
import EmailLogo from "../assets/email-icon.png";
import InstaLogo from "../assets/insta-icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="bg-[#030712] ">
        <div className="container py-[40px] flex justify-between  gap-[55px]">
          <div className="w-[400px] flex flex-col gap-4">
            <h1 className="text-[30px] text-white font-semibold">
              Books Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              cumque fuga distinctio quas!
            </p>
            <p className="flex item-center gap-3 text-[white]">
              <FontAwesomeIcon
                className="text-[#DA4544] text-[20px]"
                icon={faLocation}
              />
              Taltola, Sylhet, Bangadesh
            </p>
            <p className="text-[white]">
              <span>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-[#DA4544] mr-2 "
                />
              </span>{" "}
              +880 1717-971341
            </p>
            <div className="flex gap-4 cursor-pointer">
              <span>
                <img src={PhoneLogo} alt="" className="w-[20px]" />
              </span>
              <span>
                <img src={EmailLogo} alt="" className="w-[20px]" />
              </span>
              <span>
                <img src={InstaLogo} alt="" className="w-[20px]" />
              </span>
            </div>
          </div>
          <div className="flex-1 ">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <ul className="flex flex-col gap-4 mt-4 text-[17px] ">
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/registration"}>Registration</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <ul className="flex flex-col gap-4 mt-4 text-[17px] ">
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/registration"}>Registration</Link>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <ul className="flex flex-col gap-4 mt-4 text-[17px] ">
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
                <Link to={"/registration"}>Registration</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="text-center py-[30px]">
          <h1>
            Copyright © 2024. All rights reserved || Thanks for visit us ❤️
          </h1>
        </div>
      </div>
    </>
  );
}
