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
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container my-[120px]">
        <div className="flex justify-around items-center px-[250px]">
          <div>
            <form onSubmit={handleSubmit}>
              <div className="bg-[#DA4A54] py-16 px-4 rounded-lg bg-opacity-[.6] shadow-sm shadow-[#4DABF5]">
                <label className="input input-bordered flex items-center gap-2 mb-[10px]">
                  <FontAwesomeIcon className="text-slate-400" icon={faUser} />
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
                <button className="btn btn-neutral">Login</button>
              </div>
            </form>
            <div>
              <h2>
                do not have account?{" "}
                <button className="hover:text-[#DA4A54]">
                  <Link to={"/registration"}>registration</Link>
                </button>{" "}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
