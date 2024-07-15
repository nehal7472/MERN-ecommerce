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

      if (response.ok) {
        const res_data = await response.json();
        console.log(res_data);
        storeTokenInLS(res_data.token);

        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
        });
        navigate("/login");
      }

      console.log(response);
    } catch (error) {
      console.log("register", error);
    }
  };

  return (
    <>
      <div className="container my-[120px]">
        <div className="flex justify-around items-center px-[250px]">
          <div className="w-[350px]">
            <img src={RegImage} alt="RegImage" />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="bg-[#DA4A54] py-8 px-4 rounded-lg bg-opacity-[.6] shadow-sm shadow-[#4DABF5]">
                <label className="input input-bordered flex items-center gap-2 mb-[10px]">
                  <FontAwesomeIcon className="text-slate-400" icon={faUser} />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="grow"
                    placeholder="Username"
                    required
                    autoComplete="off"
                    value={user.username}
                    onChange={handleInput}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-[10px]">
                  <FontAwesomeIcon
                    className="text-slate-400"
                    icon={faEnvelope}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="grow"
                    placeholder="email"
                    required
                    autoComplete="off"
                    value={user.email}
                    onChange={handleInput}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-[10px]">
                  <FontAwesomeIcon className="text-slate-400" icon={faPhone} />
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    className="grow"
                    placeholder="phone"
                    required
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleInput}
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 mb-[10px]">
                  <FontAwesomeIcon className="text-slate-400" icon={faKey} />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="grow"
                    placeholder="password"
                    required
                    autoComplete="off"
                    value={user.password}
                    onChange={handleInput}
                  />
                </label>
                <button className="btn btn-neutral">Registration</button>
              </div>
            </form>
            <div>
              <h2>
                already have account?
                <button className="hover:text-[#DA4A54]">
                  <Link to={"/login"}>login</Link>
                </button>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
