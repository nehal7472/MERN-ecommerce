// import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import HeaderImage from "../../../public/image/misir_ali.jpg";
import HeaderImage2 from "../../../public/image/Amazonia.jpg";
import HeaderImage3 from "../../../public/image/Deyal.jpeg";
import { useState } from "react";

export default function HeaderBody() {
  let imageData = [
    {
      id: 0,
      title: "Lost Boy",
      picture: HeaderImage,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 1,
      title: "Harry Potter",
      picture: HeaderImage2,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et sed do eiusmod tempor",
    },
    {
      id: 2,
      title: "The Lord of the Rings",
      picture: HeaderImage3,
      body: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lost Boy, consectetur adipiscing",
    },
  ];
  let [data, setData] = useState(imageData[0]);

  const displayImage = (v) => {
    setData(imageData[v.id]);
  };

  return (
    <div className="bg-[#030712] w-[100%] ">
      <div className="container  flex justify-between items-center py-[100px]">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-[70px] font-semibold text-white">{data.title}</h1>
          <p className="w-[600px]">{data.body}</p>
          <div>
            <button className="btn btn-outline btn-error">
              <Link to={"./product"}>Order now</Link>
            </button>
          </div>
        </div>
        <div className="h-auto w-[200px]">
          <img src={data.picture} alt="HeaderImage" />
        </div>
        <div className="h-auto w-[90px] flex flex-col gap-4 bg-[#23304e] px-2 rounded-full">
          {imageData.map((v, i) => (
            <img
              key={i}
              src={v.picture}
              alt="semiHeaderImage"
              onClick={() => displayImage(v)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
