import { Link } from "react-router-dom";
import HeaderImage from "../../../public/image/misir_ali.jpg";
import HeaderImage2 from "../../../public/image/Amazonia.jpg";
import HeaderImage3 from "../../../public/image/Deyal.jpeg";
import { useState } from "react";

export default function HeaderBody() {
  const imageData = [
    {
      id: 0,
      title: "Michir Ali",
      picture: HeaderImage,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      title: "Amazonia",
      picture: HeaderImage2,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sed do eiusmod tempor",
    },
    {
      id: 2,
      title: "Deyal",
      picture: HeaderImage3,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lost Boy, consectetur adipiscing",
    },
  ];

  const [data, setData] = useState(imageData[0]);

  const displayImage = (v) => {
    setData(imageData[v.id]);
  };

  return (
    <div className="bg-gradient-to-b from-[#1f2937] to-[#030712] w-full min-h-screen">
      <div className="container mx-auto flex flex-col md:flex-row items-center py-8 md:py-16 gap-8">
        <div className="flex flex-col gap-6 md:w-1/2 md:pr-8 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            {data.title}
          </h1>
          <p className="text-base md:text-lg text-gray-300">{data.body}</p>
          <div>
            <Link to={"./product"}>
              <button className="btn btn-error text-white">
                Order now
              </button>
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={data.picture}
            alt={data.title}
            className="w-[240px] h-[300px] md:w-[250px] md:h-[400px] object-cover rounded-lg shadow-2xl transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="mt-8 md:mt-0 flex flex-col gap-4 bg-[#23304e] p-4 rounded-full items-center">
          {imageData.map((v, i) => (
            <img
              key={i}
              src={v.picture}
              alt={v.title}
              className={`w-14 h-20 object-cover cursor-pointer rounded-lg border-2 transition-all duration-300 
                ${
                  data.id === v.id
                    ? "border-red-500 shadow-lg opacity-100"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              onClick={() => displayImage(v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
