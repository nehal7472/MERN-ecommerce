import { NavLink } from "react-router-dom";
import { BooksInfo } from "./Data/Booksinfo";

export default function ProductList() {
  return (
    <>
      {BooksInfo.map((v) => {
        return (
          <div key={v.id}>
            <NavLink to={`./singleproduct/${v.subTitle}`}>
              <div className="cursor-pointer">
                <img
                  src={v.image}
                  alt="topBooksImage"
                  className="w-[150px] rounded-md"
                />
                <h1>{v.title}</h1>
                <h2>{v.subTitle}</h2>
                <span>stars</span>
              </div>
            </NavLink>
          </div>
        );
      })}
    </>
  );
}
