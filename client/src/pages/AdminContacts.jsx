import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export default function AdminContacts() {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      console.log("contact data: ", data);
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      if (response.ok) {
        getContactsData();
        toast.success("deleted successfully");
      } else {
        toast.error("Not Deleted ");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <div className="w-[100%] relative ">
      <div className="overflow-x-auto flex flex-col items-center  h-screen scroll-m-2">
        <h1 className="text-[25px] mb-[15px]">All Contact Data</h1>
        <div className="w-[70%] grid grid-cols-2 gap-4 justify-items-start">
          {contactData.map((data, index) => {
            const { username, email, message, _id } = data;
            return (
              <div key={index} className="card bg-base-100 w-96 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{username}</h2>
                  <h2 className="card-title">{email}</h2>
                  <p>{message}</p>
                  <div className="card-actions justify-end">
                    <button
                      onClick={() => deleteContactById(_id)}
                      className="btn btn-error"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
