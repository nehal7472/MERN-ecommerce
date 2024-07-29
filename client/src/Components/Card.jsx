import { NavLink } from "react-router-dom";
// import { BooksInfo } from "./Data/Booksinfo";
import { useAuth } from "../store/auth";

export default function Card() {
  const { services } = useAuth();
  return (
    <>
      <div className="grid grid-cols-3 gap-3 justify-items-center">
        {services.map((v) => {
          for (let i = 0; i <= v.id; i++) {
            if (v.id <= 3) {
              return (
                <div
                  key={v.id}
                  className="card bg-base-100 w-[18rem] shadow-xl hover:bg-[#684031]  transition duration-[0.7s] "
                >
                  <figure className="pt-6">
                    <img
                      src={v.image}
                      alt="Shoes"
                      className="rounded-xl w-[180px] h-[140px]"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{v.subTitle}</h2>
                    <p>{v.description}</p>
                    <div className="card-actions">
                      <NavLink to={`/cart`}>
                        <button className="btn btn-error">Add To Cart</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              );
            }
            break;
          }
        })}
      </div>
    </>
  );
}
