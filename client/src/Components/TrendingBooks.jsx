/* eslint-disable react/jsx-no-undef */
import Product from "./Product";
import Library from "../assets/library.jpg";
import Lock from "../assets/lock.png";
import Heading from "./Heading";
import { useAuth } from "../store/auth";

export default function TrendingBooks() {
  const { isLoading, featureProducts } = useAuth();

  // console.log(featureProducts);

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  let headingInfo = {
    author: "Trending Books",
    heading: "Best Books",
    paragraph:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa iure, corporis",
  };

  return (
    <>
      <div className="bg-[#111827]">
        <div className="container pb-[50px]">
          <Heading
            author={headingInfo.author}
            heading={headingInfo.heading}
            paragraph={headingInfo.paragraph}
          />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-items-center">
              {featureProducts.map((curElem) => (
                <Product key={curElem.id} curElem={curElem} />
              ))}
            </div>
          </div>
          <div className="pt-16 flex flex-col lg:flex-row gap-8 lg:gap-16 px-4 lg:px-16">
            <div className="flex-shrink-0 max-w-full lg:max-w-md mx-auto lg:mx-0 shadow-2xl shadow-black rounded-lg overflow-hidden">
              <img
                src={Library}
                alt="LibraryImage"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="flex flex-col gap-6 text-white">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Library at your fingertips
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                odio minus enim sint quia architecto distinctio quisquam autem
                suscipit praesentium?
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Quality Books",
                  "Fast Delivery",
                  "Easy Payment method",
                  "Get offers on books",
                ].map((text, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <img src={Lock} alt="Lock" className="w-10 h-10" />
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-medium">
                      {text}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
