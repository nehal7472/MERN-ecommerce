import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";


export default function ProductList() {
  const { services } = useAuth();

  console.log(services);

  return (
    <>
      {services.map((v, i) => (
        <div key={i}>
          <NavLink to={`./singleproduct/${v.subTitle}`}>
            <div className="cursor-pointer">
              <img
                src={v.image}
                alt="topBooksImage"
                className="w-[150px] h-[200px] rounded-md"
              />
              <h1>{v.title}</h1>
              <h2>{v.subTitle}</h2>
              <span>stars</span>
            </div>
          </NavLink>
        </div>
      ))}
    </>
  );
}
