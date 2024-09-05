import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const URL = "http://localhost:5000/api/auth/login";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
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

      if (response.ok) {
        console.log(res_data);
        storeTokenInLS(res_data.token);
        setUser({
          email: "",
          password: "",
        });
        toast.success("login successful");
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mx-auto my-12 px-4">
        <div className="h-vh-100 flex flex-col lg:flex-row justify-center items-center gap-8">
          <div className="bg-[#9c3c46] py-12 px-6 rounded-lg bg-opacity-70 shadow-lg max-w-md w-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <label className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faUser}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-input w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </label>
                <label className="flex items-center gap-3">
                  <FontAwesomeIcon
                    className="text-slate-400 text-lg"
                    icon={faKey}
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-input w-full px-4 py-2 rounded-md bg-white text-gray-900 placeholder-gray-400"
                    placeholder="Password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-md text-white bg-[#4DABF5] hover:bg-[#3a8ed9] transition duration-300"
              >
                Login
              </button>
            </form>
          </div>
          <div className="text-center mt-6 lg:mt-0">
            <p className="text-white text-lg">
              Do not have an account?{" "}
              <Link
                to="/registration"
                className="text-[#DA4A54] hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
