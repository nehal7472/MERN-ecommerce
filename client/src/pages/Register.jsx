import { Link, useNavigate } from "react-router-dom";
import RegImage from "../assets/online-registration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faUser,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/register";

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const res_data = await response.json();
      console.log(res_data.message);

      if (response.ok) {
        storeTokenInLS(res_data.token);
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        toast.success("Registration successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-12 px-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="hidden w-full lg:w-1/2 max-w-md md:flex justify-center">
            <img src={RegImage} alt="Registration" className="w-full h-auto " />
          </div>

          <div className="w-full lg:w-1/2 max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-[#9c3c46] p-8 rounded-lg bg-opacity-70 shadow-lg"
            >
              <div className="space-y-4">
                <label className="flex items-center gap-3 bg-white rounded-md shadow-sm px-3 py-2">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faUser}
                  />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </label>
                <label className="flex items-center gap-3 bg-white rounded-md shadow-sm px-3 py-2">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faEnvelope}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </label>
                <label className="flex items-center gap-3 bg-white rounded-md shadow-sm px-3 py-2">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faPhone}
                  />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </label>
                <label className="flex items-center gap-3 bg-white rounded-md shadow-sm px-3 py-2">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faKey}
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full px-3 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </label>
                <button
                  type="submit"
                  className="w-full py-2 px-4 rounded-md text-white bg-[#4DABF5] hover:bg-[#3a8ed9] transition duration-300"
                >
                  Register
                </button>
              </div>
            </form>

            <div className="mt-6 text-center text-white">
              <p>
                Already have an account?{" "}
                <Link to="/login" className="text-[#DA4A54] hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
