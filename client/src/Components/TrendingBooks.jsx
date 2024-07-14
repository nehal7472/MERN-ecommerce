import Card from "./Card";
import Library from "../assets/library.jpg";
import Lock from "../assets/lock.png";
import Heading from "./Heading";

export default function TrendingBooks() {
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
          <Heading author = {headingInfo.author} heading= {headingInfo.heading} paragraph = {headingInfo.paragraph}/>
          <div >
            <Card />
          </div>
          <div className="pt-[70px] flex gap-[100px] pl-[5rem]">
            <div className="max-w-[400px] shadow-2xl shadow-black">
              <img src={Library} alt="LibraryImage" />
            </div>
            <div className="text-white flex flex-col gap-[20px]">
              <h1 className="text-[40px] font-bold">
                Library at your fingertips
              </h1>
              <p className="text-[15px] text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                odio minus enim sint quia architecto distinctio quisquam autem
                suscipit praesentium?
              </p>
              <div className="flex justify-start items-center gap-3">
                <img src={Lock} alt="Lock" className="w-[40px] h-[40px]" />
                <h2>Quality Books</h2>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={Lock} alt="Lock" className="w-[40px] h-[40px]" />
                <h2>Fast Delivery</h2>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={Lock} alt="Lock" className="w-[40px] h-[40px]" />
                <h2>Easy Payment method</h2>
              </div>
              <div className="flex justify-start items-center gap-3">
                <img src={Lock} alt="Lock" className="w-[40px] h-[40px]" />
                <h2>Get offers on books</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
