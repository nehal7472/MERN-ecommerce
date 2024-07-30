import Heading from "./Heading";
import { NavLink } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useState } from "react";

export default function TapBook() {
  const [show, setShow] = useState(false);

  const { services } = useAuth();

  let headingInfo = {
    author: "Best Books",
    heading: "Top Books",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis",
  };

  const showData = services.map((v) => {
    for (let i = 0; i <= v.id; i++) {
      if (v.id <= 5) {
        return (
          <div key={v.id} className="w-[160px] h-[350px]">
            <NavLink to={`./singleproduct/${v.subTitle}`}>
              <div className="cursor-pointer">
                <img
                  src={v.image}
                  alt="topBooksImage"
                  className="w-[150px] h-[210px] rounded-md"
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
  });

  const showAllData = services.map((v) => {
    return (
      <div key={v.id} className="w-[160px] h-[350px]">
        <NavLink to={`./singleproduct/${v.subTitle}`}>
          <div className="cursor-pointer">
            <img
              src={v.image}
              alt="topBooksImage"
              className="w-[150px] h-[210px] rounded-md"
            />
            <h1>{v.title}</h1>
            <h2>{v.subTitle}</h2>
            <span>stars</span>
          </div>
        </NavLink>
      </div>
    );
  });

  const showBooks = () => {
    setShow(!show);
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
            {!show ? showData : showAllData}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={(showHide) => showBooks(showHide)}
              className="btn btn-outline btn-error"
            >
              {show ? "Hide All Books" : "View All Books"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
