import AboutUs from "../assets/about-us.jpg";
import AboutHistory from "../assets/library.jpg";
import AboutDot from "../assets/about-dot.png";
import { useState } from "react";

export default function About() {
  let quotes = [
    {
      id: 0,
      text: "“SEO is an investment just like a tree that needs effort, patience and time to grow before you can see the result.”",
      subTitle: "― Dr. Chris Dayagdag",
      image: AboutDot,
    },
    {
      id: 1,
      text: "“Being first in the search result organically in Google is the dream of all website owners........”",
      subTitle: "– Paul Cookson",
      image: AboutDot,
    },
    {
      id: 2,
      text: "“Getting a quality website is not an expenses but rather an investment...............”",
      subTitle: "― Dr. Christopher Dayagdag",
      image: AboutDot,
    },
  ];

  let [data, setData] = useState(quotes[0]);

  let displayData = (v) => {
    setData(quotes[v.id]);
  };

  return (
    <>
      <div
        className="bg-center bg-no-repeat bg-cover h-[550px] flex justify-center items-center flex-col px-[250px]"
        style={{ backgroundImage: `url(${AboutUs})` }}
      >
        <h1 className="text-[25px] text-[#DA4A54] font-semibold">
          {data.text}
        </h1>
        <h2 className="text-[#fff] text-[20px] font-semibold text-start">
          {data.subTitle}
        </h2>
        <div className="flex gap-4">
          {quotes.map((v, i) => {
            return (
              <img
                key={i}
                src={v.image}
                alt="AboutDot"
                className="w-[30px] cursor-pointer"
                onClick={() => displayData(v)}
              />
            );
          })}
        </div>
      </div>
      <div className="bg-[#111827]">
        <div className="container">
          <div className="flex justify-around items-center gap-[100px] pt-[150px]">
            <div className="w-[550px]">
              <h2 className="text-[15px] text-blue-800 font-semibold">
                OUR HISTORY
              </h2>
              <h1 className="text-[50px] text-white font-semibold">
                <span className="text-[#DA4A54]">Creative</span> and renovate fashion trends
              </h1>
              <p className="text-[25px]">
                Collaboratively administrate empowered markets via plug-and-play
                maintain networks. Dynamically usable procrastinate B2B users
                after installed base benefits. Dramatically visualize customer
                directed convergence without revolutionary ROI.
              </p>
            </div>
            <div>
              <img
                src={AboutHistory}
                alt="aboutImage"
                className="max-w-[400px] shadow-xl"
              />
            </div>
          </div>
          <div className="flex flex-row-reverse justify-around items-center gap-[100px] py-[150px]">
            <div className="w-[550px]">
              <h2 className="text-[15px] text-blue-800 font-semibold">
                OUR VISION
              </h2>
              <h1 className="text-[50px] text-white font-semibold">
                <span className="text-[#DA4A54]">Creative</span> and renovate fashion trends
              </h1>
              <p className="text-[25px]">
                Collaboratively administrate empowered markets via plug-and-play
                maintain networks. Dynamically usable procrastinate B2B users
                after installed base benefits. Dramatically visualize customer
                directed convergence without revolutionary ROI.
              </p>
            </div>
            <div>
              <img
                src={AboutHistory}
                alt="aboutImage"
                className="max-w-[400px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
