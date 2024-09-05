import AboutUs from "../assets/about-us.jpeg";
import AboutHistory from "../assets/about-histry.png";
import AboutVision from "../assets/about-vision.png";
import AboutDot from "../assets/about-dot.png";
import { useState } from "react";
import Footer from "../Components/Footer";

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
      text: "“Getting a quality website is not an expense but rather an investment...............”",
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
      {/* Hero Section with Background Image and Quotes */}
      <div
        className="bg-center bg-no-repeat bg-cover h-[550px] flex justify-center items-center flex-col px-4 md:px-[150px] text-center"
        style={{ backgroundImage: `url(${AboutUs})` }}
      >
        <h1 className="text-[18px] md:text-[25px] text-[#cf4f04] font-semibold mb-4">
          {data.text}
        </h1>
        <h2 className="text-[#fff] text-[18px] md:text-[20px] font-semibold">
          {data.subTitle}
        </h2>
        <div className="flex gap-4 mt-6">
          {quotes.map((v, i) => (
            <img
              key={i}
              src={v.image}
              alt="AboutDot"
              className="w-[20px] md:w-[30px] cursor-pointer"
              onClick={() => displayData(v)}
            />
          ))}
        </div>
      </div>

      {/* History Section */}
      <div className="bg-[#111827] py-[50px] md:py-[150px]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col md:flex-row justify-around items-center gap-[50px] md:gap-[100px]">
            <div className="text-center md:text-left max-w-[550px]">
              <h2 className="text-[12px] md:text-[15px] text-blue-800 font-semibold">
                OUR HISTORY
              </h2>
              <h1 className="text-[35px] md:text-[50px] text-white font-semibold">
                <span className="text-[#DA4A54]">Creative</span> and renovate fashion trends
              </h1>
              <p className="text-[16px] md:text-[25px] text-gray-300 mt-4">
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
                className="w-full max-w-[300px] md:max-w-[500px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-[#111827] py-[50px] md:py-[150px]">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex flex-col-reverse md:flex-row justify-around items-center gap-[50px] md:gap-[100px]">
            <div className="text-center md:text-left max-w-[550px]">
              <h2 className="text-[12px] md:text-[15px] text-blue-800 font-semibold">
                OUR VISION
              </h2>
              <h1 className="text-[35px] md:text-[50px] text-white font-semibold">
                <span className="text-[#DA4A54]">Creative</span> and renovate fashion trends
              </h1>
              <p className="text-[16px] md:text-[25px] text-gray-300 mt-4">
                Collaboratively administrate empowered markets via plug-and-play
                maintain networks. Dynamically usable procrastinate B2B users
                after installed base benefits. Dramatically visualize customer
                directed convergence without revolutionary ROI.
              </p>
            </div>
            <div>
              <img
                src={AboutVision}
                alt="aboutImage"
                className="w-full max-w-[250px] md:max-w-[300px] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
