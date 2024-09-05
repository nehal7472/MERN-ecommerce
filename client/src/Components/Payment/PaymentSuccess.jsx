import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function PaymentSuccess() {
  return (
    <div>
      <div className="w-full h-auto min-h-[30rem] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-8 ">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#21e721] font-bold mb-4">
          Congratulations
        </h2>
        <h4 className="text-lg sm:text-xl lg:text-2xl text-gray-500 mb-6 text-center">
          Your payment has been successfully processed
        </h4>
        <div className="flex flex-col sm:flex-row gap-6 text-sm sm:text-base mt-8">
          <Link to="/" className="flex items-center gap-2 hover:text-[#DA4A54]">
            <FontAwesomeIcon
              className="text-3xl text-[#DA4A54]"
              icon={faLeftLong}
            />
            <span className="hidden sm:inline">Back to Home</span>
          </Link>
          <Link to="/product">
            <button className="btn btn-neutral py-2 px-4 text-sm sm:text-base hover:bg-gray-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
