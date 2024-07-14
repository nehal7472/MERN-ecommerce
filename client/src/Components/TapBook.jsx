import Heading from "./Heading";
import { BooksInfo } from "./Data/Booksinfo";
import { NavLink } from "react-router-dom";

export default function TapBook() {
  let headingInfo = {
    author: "Best Books",
    heading: "Top Books",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis",
  };

  return (
    <>
      <div className="bg-[#111827]">
        <div className="container">
          <div className=" pb-[50px]">
            <Heading
              author={headingInfo.author}
              heading={headingInfo.heading}
              paragraph={headingInfo.paragraph}
            />
          </div>
          <div className="grid grid-cols-5 gap-4 justify-items-center">
            {BooksInfo.map((v) => {
              for (let i = 0; i <= v.id; i++) {
                if (v.id <= 5) {
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
                }
                break;
              }
            })}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline btn-error">
              View All books
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
