import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  //   get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      console.log(response);

      const data = await response.json();
      console.log(`users single data:  ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Updated successfully");
      } else {
        toast.error("Not Updated ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100%] relative ">
      <div className="overflow-x-auto flex flex-col justify-center items-center  h-screen scroll-m-2">
        <h1 className="text-[25px] mb-[15px]">Update User Data</h1>
        <div>
          <form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/xovaqoav"
            method="POST"
            className="flex flex-col gap-[20px]"
          >
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              required
              autoComplete="off"
              value={data.username}
              onChange={handleInput}
              className="input input-bordered input-error w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="email"
              required
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              className="input input-bordered input-error w-full max-w-xs"
            />
            <input
              type="phone"
              name="phone"
              id="phone"
              placeholder="phone"
              required
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
              className="input input-bordered input-error w-full max-w-xs"
            />
            <button className="btn btn-error w-[70px] mb-[20px]">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
