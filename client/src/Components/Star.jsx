/* eslint-disable react/prop-types */
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutLineStar } from "react-icons/ai";

export default function Star({ stars, review }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="text-yellow-400" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="text-yellow-400" />
        ) : (
          ""
        )}
      </span>
    );
  });

  return (
    <div className="flex gap-2">
      {ratingStar}
      <p>{review}</p>
    </div>
  );
}
