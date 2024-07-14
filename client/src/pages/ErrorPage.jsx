import { Link } from "react-router-dom";
import ErrorImage from "../assets/error.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center pb-[10px]">
          <h2 className="text-[75px] text-[#DA4A54] font-bold">404</h2>
          <h4 className="text-2xl">
            Sorry
            <span className="text-[#DA4A54] text-[30px] font-extrabold">
              !
            </span>{" "}
            Page noy found
          </h4>
          <div className="w-[320px]">
            <img src={ErrorImage} alt="ErrorImage" />
          </div>
          <div className="flex gap-[30px] text-[15px] ">
            <Link to={"/"}> <FontAwesomeIcon className="text-[40px] text-[#DA4A54]" icon={faLeftLong} /></Link>
            <Link to={"/contact"}> <button className="btn btn-neutral">Report problem</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}
