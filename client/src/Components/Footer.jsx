import { Link } from "react-router-dom";
import PhoneLogo from "../assets/phone-icon.png";
import EmailLogo from "../assets/email-icon.png";
import InstaLogo from "../assets/insta-icon.png";
import LocationLogo from "../assets/location.png";

export default function Footer() {
  return (
    <>
      <div className="bg-[#030712] ">
        <div className="container border-b-2 py-[40px] flex justify-between  gap-[55px]">
          <div className="w-[400px]">
            <h1 className="text-[30px] text-white font-semibold">
              Books Store
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
              cumque fuga distinctio quas!
            </p>
            <p className="flex">
              <span>
                <img src={LocationLogo} alt="PhoneLogo" className="w-[20px]" />
              </span>
              Taltola, Sylhet, Bangadesh
            </p>
            <p>+880 1717-971341</p>
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
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/registration"}>Registration</Link>
            </li>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/registration"}>Registration</Link>
            </li>
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white">
              Important Links
            </h2>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <Link to={"/registration"}>Registration</Link>
            </li>
          </div>
        </div>
        <div className="text-center py-[30px]">
          <h1>
            Copyright © 2024. All rights reserved || Thanks for visit us ❤️
          </h1>
        </div>
      </div>
    </>
  );
}
