import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMessage,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../store/auth";

export default function Admin() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  if (!user.isAdmin) {
    return <Navigate to={"/"} />;
  }

  return (
    <>
      <div className="border-t-2 border-neutral-500 w-full z-[100]">
        <div className="h-screen scroll-m-3 flex flex-col items-start justify-center border-r-2 border-neutral-500  absolute px-[30px]">
          <ul className="flex flex-col gap-[40px]">
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink
                className={(e) => {
                  return e.isActive ? "text-[#DA4A54]" : "";
                }}
                to={"/admin/users"}
              >
                <FontAwesomeIcon icon={faUser} /> Users
              </NavLink>
            </li>
            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink
                className={(e) => {
                  return e.isActive ? "text-[#DA4A54]" : "";
                }}
                to={"/admin/contacts"}
              >
                <FontAwesomeIcon icon={faMessage} />
                Contacts
              </NavLink>
            </li>

            <li className="hover:text-[#DA4A54] transition duration-300 ease-in-out">
              <NavLink
                className={(e) => {
                  return e.isActive ? "text-[#DA4A54]" : "";
                }}
                to={"/"}
              >
                <FontAwesomeIcon icon={faArrowLeft} /> Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
