import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
export default function Fail() {
  return (
    <div>
      <div className="w-[100%] h-[30rem] flex flex-col justify-center items-center ">
        <h2 className="text-[75px] font-bold">Sorry</h2>
        <h4 className="text-2xl">You have canceled your request</h4>
        <div className="flex gap-[30px] text-[15px] mt-[5rem]">
          <Link to={"/"}>
            <FontAwesomeIcon
              className="text-[40px] text-[#DA4A54]"
              icon={faLeftLong}
            />
          </Link>
          <Link to={"/cart"}>
            {" "}
            <button className="btn btn-neutral">Try Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
