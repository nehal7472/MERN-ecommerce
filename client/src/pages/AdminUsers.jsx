import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      setUsers(data);
      console.log(`user ${data}`);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  return (
    <div className="w-[100%] relative ">
      <div className="overflow-x-auto flex flex-col justify-center items-center  h-screen scroll-m-2">
        <h1>Admin Users Data</h1>
        <div>
          <table className="table table-zebra">
            <thead>
              <tr className="">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index} className="">
                    <th>{item.username}</th>
                    <th>{item.email}</th>
                    <th>{item.phone}</th>
                    <th>
                      <button className="btn btn-outline btn-info text-[12px]">
                        Edit
                      </button>
                    </th>
                    <th>
                      <button className="btn btn-outline btn-error text-[12px]">
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
